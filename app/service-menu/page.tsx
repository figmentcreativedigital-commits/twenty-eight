import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { providers } from '@/content/providers';
import { serviceMenuIntro, serviceMenus } from '@/content/services';

export const metadata: Metadata = {
  title: 'Our Expertise',
  description:
    'Specialized expertise, connected care. Dentistry, preventive medicine, nutrition, skin health, and aesthetics at 28 in Tribeca, individually or as one coordinated plan.',
  alternates: { canonical: '/service-menu' },
};

export default function ServiceMenuPage() {
  return (
    <>
      <Hero
        eyebrow={serviceMenuIntro.eyebrow}
        headline={serviceMenuIntro.headline}
        supporting={serviceMenuIntro.lede}
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="An editorial arrangement of refined treatment tools and materials across the three disciplines of 28."
        imageSrc="/images/28-placeholder-g.jpeg"
      />

      {/* Provider jump nav, sticks beneath the header on scroll */}
      <nav
        aria-label="Providers"
        className="sticky top-[76px] z-30 border-b border-line bg-ivory/95 backdrop-blur-md"
      >
        <div className="shell flex gap-6 overflow-x-auto py-4 sm:gap-10">
          {providers.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="whitespace-nowrap font-sans text-[0.72rem] uppercase tracking-eyebrow text-muted transition-colors duration-400 hover:text-gold-deep"
            >
              {p.shortName}
            </a>
          ))}
        </div>
      </nav>

      {providers.map((provider, i) => {
        const menu = serviceMenus.find((m) => m.slug === provider.slug);
        return (
          <section
            key={provider.slug}
            id={provider.slug}
            className={i % 2 === 1 ? 'scroll-mt-32 bg-sand/40' : 'scroll-mt-32'}
          >
            <div className="shell py-section">
              <Reveal className="mb-16 max-w-3xl">
                <Eyebrow className="mb-5 inline-flex">{provider.specialtyLabel}</Eyebrow>
                <h2 className="text-balance font-serif text-display-md text-ink">
                  {provider.name}
                </h2>
                {menu?.intro ? (
                  <p className="mt-6 max-w-prose font-sans text-lg leading-relaxed text-muted">
                    {menu.intro}
                  </p>
                ) : null}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Button href={`/booking/${provider.slug}`} variant="secondary">
                    Book with {provider.shortName}
                  </Button>
                  <Button href={`/collective/${provider.slug}`} variant="quiet">
                    About {provider.shortName} &rarr;
                  </Button>
                </div>
              </Reveal>

              <div className="border-t border-line pt-8">
                <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                  {provider.selectedServices.map((s) => (
                    <li key={s}>
                      <h4 className="font-serif text-xl text-ink">{s}</h4>
                    </li>
                  ))}
                </ul>
              </div>

              {menu?.gapNote ? (
                <p className="mt-12 max-w-prose font-sans text-sm italic leading-relaxed text-muted/80">
                  {menu.gapNote}
                </p>
              ) : null}
            </div>
          </section>
        );
      })}

      {/* Personalized care */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Personalized Care</Eyebrow>
          <h2 className="text-balance font-serif text-display-sm text-ink">
            Your Health. Your Goals. Your Plan.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">
            At 28, every individual has unique needs, priorities, and aspirations. Whether you are
            seeking a specific treatment or a more comprehensive approach to your well-being, our
            specialists provide personalized care tailored to you.
          </p>
          <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">
            Our services can be experienced individually or thoughtfully coordinated across
            disciplines, bringing together dentistry, preventive medicine, nutrition, skin health,
            and aesthetics. With dedicated concierge support, we make navigating your care
            seamless, ensuring that every step is guided by expertise, collaboration, and your
            long-term wellness goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link href="/signature-experiences" className="link-underline">
              View Personalized Programs
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Pricing note */}
      <section className="shell py-section-sm">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="hairline-gold mx-auto mb-6 block" aria-hidden="true" />
          <p className="font-sans leading-relaxed text-muted">{serviceMenuIntro.pricingNote}</p>
        </Reveal>
      </section>

      <CtaBanner
        eyebrow="Begin Your Journey"
        headline="Not sure where to start?"
        body="Request a consultation and a member of our team will help match the right treatment - with one provider, or across the Collective."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Explore the Collective', href: '/collective' }}
      />
    </>
  );
}
