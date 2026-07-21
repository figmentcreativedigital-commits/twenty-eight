'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { consultationInterests } from '@/content/home';
import { providers } from '@/content/providers';
import {
  validateConsultation,
  type ConsultationPayload,
  type FieldErrors,
} from '@/lib/validation';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const STORAGE_KEY = '28-consultation-draft';

const emptyForm: ConsultationPayload = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interests: [],
  goals: '',
  timeline: '',
  preferredProvider: '',
  preferredContact: '',
  preferredTimes: '',
  consent: false,
  company: '',
};

const steps = ['Your details', 'Your interests', 'Your goals'] as const;

const inputClass =
  'w-full border-b border-line bg-transparent py-3 font-sans text-charcoal placeholder:text-muted/50 transition-colors duration-400 focus:border-gold-deep focus:outline-none';

export function ConsultationForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ConsultationPayload>(emptyForm);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const startedRef = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Restore any saved draft + prefill interest from the query string.
  useEffect(() => {
    let restored = emptyForm;
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) restored = { ...emptyForm, ...JSON.parse(saved) };
    } catch {
      /* ignore */
    }
    const interest = searchParams.get('interest');
    if (interest && !restored.interests.includes(interest)) {
      const match = consultationInterests.includes(interest)
        ? interest
        : 'Signature Experiences';
      restored = { ...restored, interests: [...restored.interests, match] };
    }
    setForm(restored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist draft as the user types.
  useEffect(() => {
    try {
      const { company, ...rest } = form;
      void company;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
    } catch {
      /* ignore */
    }
  }, [form]);

  // Move focus to the step heading on step change (screen-reader friendly).
  useEffect(() => {
    if (status === 'success') return;
    headingRef.current?.focus();
  }, [step, status]);

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      track('consultation_start');
    }
  };

  const update = <K extends keyof ConsultationPayload>(
    key: K,
    value: ConsultationPayload[K]
  ) => {
    markStarted();
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleInterest = (interest: string) => {
    markStarted();
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }));
    setErrors((e) => ({ ...e, interests: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const all = validateConsultation(form);
    let stepErrors: FieldErrors = {};
    if (s === 0) {
      stepErrors = {
        firstName: all.firstName,
        lastName: all.lastName,
        email: all.email,
        phone: all.phone,
      };
    } else if (s === 1) {
      stepErrors = { interests: all.interests };
    }
    const cleaned: FieldErrors = {};
    (Object.keys(stepErrors) as (keyof FieldErrors)[]).forEach((k) => {
      if (stepErrors[k]) cleaned[k] = stepErrors[k];
    });
    setErrors(cleaned);
    return Object.keys(cleaned).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    track('consultation_step_complete', { step: step + 1 });
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    const all = validateConsultation(form);
    if (Object.keys(all).length > 0) {
      setErrors(all);
      if (all.firstName || all.lastName || all.email || all.phone) setStep(0);
      else if (all.interests) setStep(1);
      return;
    }

    setStatus('submitting');
    setServerMessage('');
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        track('consultation_submit', { interests: form.interests.join(',') });
        try {
          sessionStorage.removeItem(STORAGE_KEY);
        } catch {
          /* ignore */
        }
        setStatus('success');
      } else {
        setStatus('error');
        setServerMessage(json.message ?? 'Please review your details and try again.');
        if (json.errors) setErrors(json.errors);
      }
    } catch {
      setStatus('error');
      setServerMessage('We could not send your request. Please try again in a moment.');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-6 inline-flex items-center gap-3">
          <span className="hairline-gold" aria-hidden="true" />
          Received
        </p>
        <h2 className="text-balance font-serif text-display-sm text-ink">
          Thank you. Your 28 experience begins here.
        </h2>
        <p className="mx-auto mt-6 max-w-md font-sans leading-relaxed text-muted">
          A member of our team will review your request and reach out to help determine the
          most appropriate next step — with the right provider, or across the collective.
        </p>
        <a href="/" className="link-underline mt-10 inline-flex">
          Return home
        </a>
      </div>
    );
  }

  const isLast = step === steps.length - 1;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-12">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-sans text-xs uppercase tracking-wide text-muted">
            Step {step + 1} of {steps.length}
          </p>
          <p className="font-sans text-xs uppercase tracking-wide text-gold-deep">
            {steps[step]}
          </p>
        </div>
        <ol className="flex gap-2" aria-label="Progress">
          {steps.map((label, i) => (
            <li key={label} className="h-0.5 flex-1 overflow-hidden bg-line">
              <span
                className={cn(
                  'block h-full origin-left bg-gold-deep transition-transform duration-600 ease-editorial',
                  i <= step ? 'scale-x-100' : 'scale-x-0'
                )}
              />
            </li>
          ))}
        </ol>
      </div>

      {/* Honeypot (hidden from users, visible to bots) */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
        />
      </div>

      {/* Step 0 — details */}
      {step === 0 && (
        <fieldset>
          <legend className="sr-only">Your details</legend>
          <h2 ref={headingRef} tabIndex={-1} className="mb-2 font-serif text-2xl text-ink focus:outline-none">
            Let us start with the essentials.
          </h2>
          <p className="mb-8 font-sans text-sm text-muted">All fields on this step are required.</p>

          <div className="grid gap-7 sm:grid-cols-2">
            <Field label="First name" required error={errors.firstName} htmlFor="firstName">
              <input id="firstName" type="text" autoComplete="given-name" className={inputClass} value={form.firstName} onChange={(e) => update('firstName', e.target.value)} aria-invalid={!!errors.firstName} />
            </Field>
            <Field label="Last name" required error={errors.lastName} htmlFor="lastName">
              <input id="lastName" type="text" autoComplete="family-name" className={inputClass} value={form.lastName} onChange={(e) => update('lastName', e.target.value)} aria-invalid={!!errors.lastName} />
            </Field>
            <Field label="Email" required error={errors.email} htmlFor="email">
              <input id="email" type="email" autoComplete="email" className={inputClass} value={form.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errors.email} />
            </Field>
            <Field label="Phone" required error={errors.phone} htmlFor="phone">
              <input id="phone" type="tel" autoComplete="tel" className={inputClass} value={form.phone} onChange={(e) => update('phone', e.target.value)} aria-invalid={!!errors.phone} />
            </Field>
          </div>
        </fieldset>
      )}

      {/* Step 1 — interests */}
      {step === 1 && (
        <fieldset>
          <legend className="sr-only">Your interests</legend>
          <h2 ref={headingRef} tabIndex={-1} className="mb-2 font-serif text-2xl text-ink focus:outline-none">
            What would you like to explore?
          </h2>
          <p className="mb-8 font-sans text-sm text-muted">
            Select any that apply — there are no wrong answers, and you can say &ldquo;not sure yet.&rdquo;
          </p>

          <div className="flex flex-wrap gap-3">
            {consultationInterests.map((interest) => {
              const active = form.interests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleInterest(interest)}
                  className={cn(
                    'border px-5 py-3 font-sans text-sm transition-all duration-400',
                    active ? 'border-gold-deep bg-sand/60 text-ink' : 'border-line text-muted hover:border-gold hover:text-charcoal'
                  )}
                >
                  {interest}
                </button>
              );
            })}
          </div>
          {errors.interests ? (
            <p className="mt-4 font-sans text-sm text-gold-deep" role="alert">
              {errors.interests}
            </p>
          ) : null}
        </fieldset>
      )}

      {/* Step 2 — goals */}
      {step === 2 && (
        <fieldset>
          <legend className="sr-only">Your goals</legend>
          <h2 ref={headingRef} tabIndex={-1} className="mb-2 font-serif text-2xl text-ink focus:outline-none">
            Tell us a little more.
          </h2>
          <p className="mb-8 font-sans text-sm text-muted">
            Everything here is optional — it simply helps us prepare.
          </p>

          <div className="space-y-7">
            <Field label="What would you like to explore?" optional htmlFor="goals">
              <textarea id="goals" rows={3} className={cn(inputClass, 'resize-none')} value={form.goals} onChange={(e) => update('goals', e.target.value)} placeholder="Share as much or as little as you like." />
            </Field>

            <Field label="A specific event or timeline?" optional htmlFor="timeline">
              <input id="timeline" type="text" className={inputClass} value={form.timeline} onChange={(e) => update('timeline', e.target.value)} placeholder="e.g. a wedding in the spring" />
            </Field>

            <Field label="Preferred provider, if known" optional htmlFor="preferredProvider">
              <select id="preferredProvider" className={cn(inputClass, 'appearance-none')} value={form.preferredProvider} onChange={(e) => update('preferredProvider', e.target.value)}>
                <option value="">No preference</option>
                {providers.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </Field>

            <div className="grid gap-7 sm:grid-cols-2">
              <fieldset>
                <legend className="mb-3 font-sans text-sm text-charcoal">
                  Preferred contact method <span className="text-muted">(optional)</span>
                </legend>
                <div className="flex gap-5">
                  {['Email', 'Phone', 'Either'].map((opt) => (
                    <label key={opt} className="flex cursor-pointer items-center gap-2 font-sans text-sm text-charcoal">
                      <input type="radio" name="preferredContact" value={opt} checked={form.preferredContact === opt} onChange={(e) => update('preferredContact', e.target.value)} className="accent-[color:var(--color-gold-deep)]" />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field label="Preferred days or times" optional htmlFor="preferredTimes">
                <input id="preferredTimes" type="text" className={inputClass} value={form.preferredTimes} onChange={(e) => update('preferredTimes', e.target.value)} placeholder="e.g. weekday mornings" />
              </Field>
            </div>

            {/* Consent */}
            <div className="border-t border-line pt-7">
              <label className="flex cursor-pointer items-start gap-3 font-sans text-sm leading-relaxed text-charcoal">
                <input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} aria-invalid={!!errors.consent} className="mt-1 h-4 w-4 accent-[color:var(--color-gold-deep)]" />
                <span>
                  I agree to be contacted by 28 regarding my request. <span className="text-muted">Required.</span>
                </span>
              </label>
              {errors.consent ? (
                <p className="mt-2 font-sans text-sm text-gold-deep" role="alert">
                  {errors.consent}
                </p>
              ) : null}
            </div>
          </div>
        </fieldset>
      )}

      {/* Server error */}
      {status === 'error' && serverMessage ? (
        <p className="mt-8 border border-gold-deep/40 bg-sand/50 px-4 py-3 font-sans text-sm text-charcoal" role="alert">
          {serverMessage}
        </p>
      ) : null}

      {/* Controls */}
      <div className="mt-12 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className={cn('font-sans text-sm uppercase tracking-wide transition-colors duration-400', step === 0 ? 'invisible' : 'text-muted hover:text-charcoal')}
        >
          &larr; Back
        </button>

        {!isLast ? (
          <button type="button" onClick={next} className="inline-flex items-center gap-2 bg-ink px-8 py-4 font-sans text-[0.8rem] uppercase tracking-wide text-ivory transition-colors duration-400 hover:bg-charcoal">
            Continue
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={status === 'submitting'} className="inline-flex items-center gap-2 bg-ink px-8 py-4 font-sans text-[0.8rem] uppercase tracking-wide text-ivory transition-colors duration-400 hover:bg-charcoal disabled:opacity-60">
            {status === 'submitting' ? 'Sending…' : 'Request Consultation'}
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-sans text-sm text-charcoal">
        {label}{' '}
        {required ? (
          <span className="text-gold-deep" aria-hidden="true">
            *
          </span>
        ) : null}
        {optional ? <span className="text-muted">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 font-sans text-sm text-gold-deep" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
