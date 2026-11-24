'use client';

import { useEffect, useRef, useState } from 'react';
import { consultationInterests } from '@/content/home';
import { providers } from '@/content/providers';
import {
  validateConsultation,
  type ConsultationPayload,
  type FieldErrors,
} from '@/lib/validation';
import { track } from '@/lib/analytics';

const STORAGE_KEY = '28-consultation-draft';

const emptyForm: ConsultationPayload = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interests: [],
  goals: '',
  timeline: 'As soon as possible',
  preferredProvider: '',
  preferredContact: 'Email',
  preferredTimes: '',
  consent: false,
  company: '',
};

const steps = ['Details', 'Interests', 'Goals'] as const;

const inputClass = 'w-full border border-line bg-ivory px-4 py-3 font-sans text-charcoal';

const contactMethods = ['Email', 'Phone', 'Text'];
const timelines = ['As soon as possible', 'Within 1–3 months', 'Just exploring'];

export function ConsultationForm() {
  const [form, setForm] = useState<ConsultationPayload>(emptyForm);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const startedRef = useRef(false);
  const headingRef = useRef<HTMLParagraphElement>(null);

  // Restore any saved draft + prefill interest from the query string.
  useEffect(() => {
    let restored = emptyForm;
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) restored = { ...emptyForm, ...JSON.parse(saved) };
    } catch {
      /* ignore */
    }
    const interest = new URLSearchParams(window.location.search).get('interest');
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

  // Move focus to the step label on step change (screen-reader friendly).
  // Skipped on first render so the page doesn't jump to the form.
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
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
          most appropriate next step - with the right provider, or across the Collective.
        </p>
        <a href="/" className="link-underline mt-10 inline-flex">
          Return home
        </a>
      </div>
    );
  }

  const stepLabel = (i: number) => (
    <p
      ref={step === i ? headingRef : undefined}
      tabIndex={-1}
      className="eyebrow mb-8 focus:outline-none"
    >
      Step {i + 1} of {steps.length} - {steps[i]}
    </p>
  );

  return (
    <form
      className="mx-auto max-w-2xl"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (step === steps.length - 1) submit();
        else next();
      }}
    >
      {/* Honeypot (hidden from users, visible to bots) */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
          />
        </label>
      </div>

      {/* Step 1 - details */}
      <div className="form-step" hidden={step !== 0}>
        {stepLabel(0)}
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="First name *" error={errors.firstName}>
            <input name="firstName" type="text" required autoComplete="given-name" className={inputClass} value={form.firstName} onChange={(e) => update('firstName', e.target.value)} aria-invalid={!!errors.firstName} />
          </Field>
          <Field label="Last name *" error={errors.lastName}>
            <input name="lastName" type="text" required autoComplete="family-name" className={inputClass} value={form.lastName} onChange={(e) => update('lastName', e.target.value)} aria-invalid={!!errors.lastName} />
          </Field>
          <Field label="Email *" error={errors.email}>
            <input name="email" type="email" required autoComplete="email" className={inputClass} value={form.email} onChange={(e) => update('email', e.target.value)} aria-invalid={!!errors.email} />
          </Field>
          <Field label="Phone *" error={errors.phone}>
            <input name="phone" type="tel" required autoComplete="tel" className={inputClass} value={form.phone} onChange={(e) => update('phone', e.target.value)} aria-invalid={!!errors.phone} />
          </Field>
          <Field label="Preferred provider">
            <select name="preferredProvider" className={inputClass} value={form.preferredProvider} onChange={(e) => update('preferredProvider', e.target.value)}>
              <option value="">No preference</option>
              {providers.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Preferred contact method">
            <select name="preferredContact" className={inputClass} value={form.preferredContact} onChange={(e) => update('preferredContact', e.target.value)}>
              {contactMethods.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <button type="button" onClick={next} className="btn-secondary mt-10">
          Continue
        </button>
      </div>

      {/* Step 2 - interests */}
      <div className="form-step" hidden={step !== 1}>
        {stepLabel(1)}
        <div className="grid gap-3 sm:grid-cols-2">
          {consultationInterests.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-3 border border-line px-4 py-3 font-sans text-sm text-charcoal"
            >
              <input
                type="checkbox"
                name="interests[]"
                value={interest}
                checked={form.interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
              />
              {interest}
            </label>
          ))}
        </div>
        {errors.interests ? (
          <p className="mt-4 font-sans text-sm text-gold-deep" role="alert">
            {errors.interests}
          </p>
        ) : null}
        <div className="mt-10 flex gap-4">
          <button type="button" onClick={back} className="btn-quiet">
            Back
          </button>
          <button type="button" onClick={next} className="btn-secondary">
            Continue
          </button>
        </div>
      </div>

      {/* Step 3 - goals */}
      <div className="form-step" hidden={step !== 2}>
        {stepLabel(2)}
        <Field label="What are you hoping to achieve?" className="mb-6 block">
          <textarea name="goals" rows={4} className={inputClass} value={form.goals} onChange={(e) => update('goals', e.target.value)} />
        </Field>
        <Field label="Timeline" className="mb-6 block">
          <select name="timeline" className={inputClass} value={form.timeline} onChange={(e) => update('timeline', e.target.value)}>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred times" className="mb-6 block">
          <input name="preferredTimes" type="text" className={inputClass} value={form.preferredTimes} onChange={(e) => update('preferredTimes', e.target.value)} />
        </Field>
        <label className="flex items-start gap-3 font-sans text-sm text-charcoal">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1"
            checked={form.consent}
            onChange={(e) => update('consent', e.target.checked)}
            aria-invalid={!!errors.consent}
          />
          <span>I consent to be contacted by 28 about my request. *</span>
        </label>
        {errors.consent ? (
          <p className="mt-2 font-sans text-sm text-gold-deep" role="alert">
            {errors.consent}
          </p>
        ) : null}

        {status === 'error' && serverMessage ? (
          <p className="mt-8 border border-gold-deep/40 bg-sand/50 px-4 py-3 font-sans text-sm text-charcoal" role="alert">
            {serverMessage}
          </p>
        ) : null}

        <div className="mt-10 flex gap-4">
          <button type="button" onClick={back} className="btn-quiet">
            Back
          </button>
          <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
            {status === 'submitting' ? 'Sending…' : 'Request a Consultation'}
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  className = 'block',
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block font-sans text-sm text-charcoal">{label}</span>
      {children}
      {error ? (
        <span className="mt-2 block font-sans text-sm text-gold-deep" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
