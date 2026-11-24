import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { providers } from '@/content/providers';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'The Collective',
  description:
    'Three founders, one shared purpose. Yulia Gerchik Studio, New York City Dental Smiles, and Dr. Evia Nano bring integrated health, wellness, and longevity to Tribeca.',
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
        imageAlt="An editorial arrangement of refined tools and materials representing the three disciplines of 28 Collective."
        imageSrc="/images/28-placeholder-g.jpeg"
      />

      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-serif text-display-md text-ink">
            Three Visionaries. One Shared Purpose.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            28 was born from a shared belief that health, wellness, and longevity should not be
            approached in isolation. Three founders, each bringing distinct expertise and
            perspectives, have come together to create a new model of integrated care - one that
            connects science, prevention, aesthetics, and personalized wellness to help people live
            healthier, better, and longer.
          </p>
        </Reveal>
        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="text-balance font-serif text-display-sm text-ink">
            Different Expertise. One Shared Vision.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            28 was founded on the belief that true wellness requires more than individual expertise
            - it requires collaboration. Bringing together distinguished professionals from
            complementary disciplines, our founders share a vision of integrating health,
            prevention, aesthetics, and longevity into a more comprehensive approach to personal
            care.
          </p>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            Together, they have created a destination where science, personalized care, and an
            elevated experience come together with one purpose: to help people live healthier, feel
            better, and thrive longer.
          </p>
        </Reveal>
      </section>

      {providers.map((provider, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={provider.slug} className={cn('py-section', reverse && 'bg-sand/40')}>
            <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Photo
                src={provider.image}
                alt={`${provider.name} - ${provider.discipline}`}
                ratio="4/5"
                reveal="default"
                className={cn(reverse && 'lg:order-2')}
              />
              <Reveal className={cn(reverse && 'lg:order-1')}>
                <Eyebrow className="mb-5 flex">{provider.specialtyLabel}</Eyebrow>
                <h3 className="font-serif text-display-md text-ink">{provider.name}</h3>
                <div className="mt-7 space-y-5">
                  {[provider.cardStatement, provider.philosophy].map((p) => (
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
