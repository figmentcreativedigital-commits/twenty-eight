import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { providers, getProvider } from '@/content/providers';

/**
 * Per-provider booking hand-off.
 *
 * Booking at 28 is a REDIRECT, not an integration (client-confirmed
 * 2026-07-20). This page exists so the departure is a considered moment
 * rather than an abrupt jump to a third-party system — the client is told
 * where they are going and what to expect before they leave.
 *
 * While `booking.url` is empty, the page degrades to a consultation request
 * rather than rendering a dead link.
 */

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const provider = getProvider(params.slug);
  if (!provider) return { title: 'Book an Appointment' };
  return {
    title: `Book with ${provider.shortName}`,
    description: `Book an appointment with ${provider.name} at 28 in Tribeca.`,
    alternates: { canonical: `/booking/${provider.slug}` },
    robots: { index: false, follow: true },
  };
}

export default function BookingHandoffPage({
  params,
}: {
  params: { slug: string };
}) {
  const provider = getProvider(params.slug);
  if (!provider) notFound();

  const hasLink = provider.booking.url.length > 0;

  return (
    <section className="bg-ivory pb-section pt-40 lg:pt-48">
      <Container size="narrow">
        <Reveal>
          <Link href="/booking" className="link-underline mb-10 inline-flex">
            &larr; All Providers
          </Link>

          <p className="eyebrow mb-5 flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            {provider.specialtyLabel}
          </p>
          <h1 className="text-display-md text-ink">
            Book with {provider.shortName}
          </h1>

          <p className="mt-8 max-w-prose font-sans text-lg leading-relaxed text-charcoal">
            {provider.booking.note}
          </p>

          {/* What to expect — sets expectations before leaving the site */}
          <div className="mt-12 border-y border-line py-8">
            <p className="eyebrow mb-6">What to expect</p>
            <ol className="space-y-5">
              {[
                hasLink
                  ? `You will be taken to ${provider.booking.platform}, which ${provider.name} uses to manage their schedule.`
                  : `${provider.name} manages their own schedule. Online booking will be available here shortly.`,
                'Choose your treatment and a time that suits you.',
                'First visit? You will be asked to create a profile with the provider.',
              ].map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-serif text-xl text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="max-w-prose font-sans text-sm leading-relaxed text-muted">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            {hasLink ? (
              <Button
                href={provider.booking.url}
                external
                variant="primary"
                trackEvent="cta_click"
                trackParams={{
                  location: 'booking_handoff',
                  label: `Continue to ${provider.booking.platform}`,
                  provider: provider.name,
                }}
              >
                Continue to {provider.booking.platform} &rarr;
              </Button>
            ) : (
              <Button href="/consultation" variant="primary">
                Request a Consultation
              </Button>
            )}
            <Link href={`/collective/${provider.slug}`} className="link-underline">
              About {provider.shortName}
            </Link>
            <Link
              href={`/service-menu#${provider.slug}`}
              className="link-underline"
            >
              View Services
            </Link>
          </div>

          {!hasLink ? (
            <p className="mt-10 max-w-prose font-sans text-sm italic leading-relaxed text-muted/80">
              Online booking for {provider.shortName} is being set up. In the
              meantime, request a consultation and our team will arrange your
              appointment directly.
            </p>
          ) : (
            <p className="mt-10 max-w-prose font-sans text-sm italic leading-relaxed text-muted/80">
              Booking is handled by {provider.booking.platform} and opens in a new
              tab. Seeing more than one provider?{' '}
              <Link href="/consultation" className="underline decoration-gold underline-offset-4">
                Request a consultation
              </Link>{' '}
              and we will coordinate it for you.
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
