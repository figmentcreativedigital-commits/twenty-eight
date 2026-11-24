import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProviderPortrait } from '@/components/ui/ProviderPortrait';
import { providers } from '@/content/providers';
import { homeCollective, introducing28 } from '@/content/home';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'The Collective',
  description:
    'One vision, a collective of expertise. Yulia Gerchik Studio, New York City Dental Smiles, Dr. Evia Nano, and Alexandra Cerone bring integrated health, wellness, and longevity to Tribeca.',
  alternates: { canonical: '/collective' },
};

export default function CollectivePage() {
  return (
    <>
      <Hero
        eyebrow="The Collective"
        headline="A New Destination for Integrated Health, Wellness & Longevity"
        supporting="Tribeca, New York"
        primaryCta={{ label: 'Book a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Personalized Programs', href: '/signature-experiences' }}
        imageAlt="An editorial arrangement of refined tools and materials representing the disciplines of 28 Collective."
        imageSrc="/images/28-placeholder-g.jpeg"
      />

      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-serif text-display-md text-ink">
            {homeCollective.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl italic leading-snug text-charcoal">
            {homeCollective.tagline}
          </p>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            {homeCollective.intro}
          </p>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            {introducing28.statement}
          </p>
        </Reveal>
      </section>

      {providers.map((provider, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={provider.slug} className={cn('py-section', reverse && 'bg-sand/40')}>
            <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <ProviderPortrait
                provider={provider}
                reveal="default"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={cn(reverse && 'lg:order-2')}
              />
              <Reveal className={cn(reverse && 'lg:order-1')}>
                <Eyebrow className="mb-5 flex">{provider.specialtyLabel}</Eyebrow>
                <h3 className="font-serif text-display-md text-ink">{provider.name}</h3>
                {provider.credentials ? (
                  <p className="mt-3 font-sans text-[0.72rem] uppercase tracking-wide text-muted">
                    {provider.credentials}
                  </p>
                ) : null}
                <div className="mt-7 space-y-5">
                  {[provider.cardStatement, provider.intro[0]].map((p) => (
                    <p key={p} className="max-w-prose font-sans leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-9">
                  <Button href={`/collective/${provider.slug}`} variant="quiet">
                    Visit {provider.shortName} &rarr;
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBanner
        eyebrow="Begin Your Journey"
        headline="Not sure where to begin?"
        body="A signature consultation at 28 considers the full picture of wellness and aesthetics and delivers a personalized roadmap across the Collective."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'View Personalized Programs', href: '/signature-experiences' }}
      />
    </>
  );
}
