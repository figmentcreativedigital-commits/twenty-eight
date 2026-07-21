import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Container } from '@/components/ui/Container';
import { ConsultationForm } from './ConsultationForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Request a consultation at 28. Every plan begins with understanding your goals — our concierge will guide you toward the right provider or coordinated experience.',
  alternates: { canonical: '/consultation' },
  robots: { index: true, follow: true },
};

export default function ConsultationPage() {
  return (
    <section className="bg-ivory pb-section pt-40 lg:pt-48">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Intro rail */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="eyebrow mb-5 flex items-center gap-3">
              <span className="hairline-gold" aria-hidden="true" />
              Consultation
            </span>
            <h1 className="text-display-md text-ink">
              Your 28 experience begins with a conversation.
            </h1>
            <p className="mt-6 max-w-md font-sans leading-relaxed text-muted">
              Share a few details and a member of our team will help guide you toward the right
              provider or coordinated experience. This is a request for information, not a booking —
              there&rsquo;s no obligation.
            </p>

            <dl className="mt-10 space-y-4 border-t border-line pt-8">
              <div className="flex gap-4">
                <dt className="w-24 flex-shrink-0 font-sans text-xs uppercase tracking-wide text-muted">
                  Location
                </dt>
                <dd className="font-sans text-sm text-charcoal">
                  {site.contact.neighborhood}
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 flex-shrink-0 font-sans text-xs uppercase tracking-wide text-muted">
                  Hours
                </dt>
                <dd className="font-sans text-sm text-charcoal">{site.contact.hoursNote}</dd>
              </div>
              {site.contact.email ? (
                <div className="flex gap-4">
                  <dt className="w-24 flex-shrink-0 font-sans text-xs uppercase tracking-wide text-muted">
                    Email
                  </dt>
                  <dd className="font-sans text-sm text-charcoal">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="transition-colors duration-400 hover:text-gold-deep"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          {/* Form */}
          <div className="border border-line bg-ivory p-6 shadow-frame sm:p-10 lg:p-12">
            <Suspense
              fallback={
                <p className="font-sans text-sm text-muted">Loading the consultation form…</p>
              }
            >
              <ConsultationForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
}
