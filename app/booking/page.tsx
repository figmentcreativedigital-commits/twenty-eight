import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reveal } from '@/components/ui/Reveal';
import { providers } from '@/content/providers';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book directly with a provider at 28 (Yulia Gerchik Studio, New York City Dental Smiles, Dr. Evia Nano, or Alexandra Cerone) or request a consultation across the Collective.',
  alternates: { canonical: '/booking' },
};

export default function BookingPage() {
  return (
    <>
      <Hero
        eyebrow="Booking"
        headline={'Book with\nyour provider.'}
        supporting="Each provider keeps their own schedule. Choose who you would like to see, and we will take you to their booking system."
        primaryCta={{ label: 'Not sure? Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'View Our Expertise', href: '/service-menu' }}
        imageAlt="A quiet reception detail at 28 - stone, warm light, and considered materials."
        imageSrc="/images/28-placeholder-f.jpeg"
        size="tall"
      />

      <section className="shell py-section">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="hairline-gold mx-auto mb-6 block" aria-hidden="true" />
          <p className="font-sans leading-relaxed text-muted">
            Booking a treatment takes you to the provider&rsquo;s own scheduling
            system. If you would prefer to plan across more than one provider, a
            consultation is the better place to begin.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {providers.map((provider, i) => (
            <Reveal key={provider.slug} delay={i * 90}>
              <Link
                href={`/booking/${provider.slug}`}
                className="group flex h-full flex-col border border-line p-8 transition-colors duration-400 hover:border-gold focus-visible:outline-gold-deep md:p-10"
              >
                <p className="eyebrow mb-4">{provider.specialtyLabel}</p>
                <h2 className="font-serif text-2xl text-ink transition-colors duration-400 group-hover:text-gold-deep">
                  {provider.name}
                </h2>
                <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-muted">
                  {provider.discipline}
                </p>
                <span className="link-underline mt-8 self-start">
                  Book with {provider.shortName}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Coordinated booking */}
      <section className="bg-sand/50">
        <div className="shell py-section-sm">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6 inline-flex items-center gap-3">
              <span className="hairline-gold" aria-hidden="true" />
              More Than One Provider
            </p>
            <h2 className="text-balance font-serif text-display-sm text-ink">
              Seeing more than one provider?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">
              Personalized Programs bring together treatments across the Collective.
              These are arranged by our concierge rather than booked online, so the
              sequence and timing work around you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              <Link href="/signature-experiences" className="link-underline">
                View Personalized Programs
              </Link>
              <Link href="/consultation" className="link-underline">
                Request a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        eyebrow="Begin Your Journey"
        headline="28 experience begins with a conversation."
        body="If you are not sure which provider or treatment is right, request a consultation and our team will guide you."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Explore the Collective', href: '/collective' }}
      />
    </>
  );
}
