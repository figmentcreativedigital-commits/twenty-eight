import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { EditorialSplit } from '@/components/sections/EditorialSplit';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reveal } from '@/components/ui/Reveal';
import { providers } from '@/content/providers';

export const metadata: Metadata = {
  title: 'The Collective',
  description:
    'Three expert-led providers within 28 — Yulia Gerchik Studio, New York City Dental Smiles, and Dr. Avia Nano — highly specialized, deeply connected.',
  alternates: { canonical: '/collective' },
};

const tones = ['sand', 'stone', 'mushroom'] as const;

export default function CollectivePage() {
  return (
    <>
      <Hero
        eyebrow="The Collective"
        headline={'Three leaders.\nOne destination.'}
        supporting="Inside 28, three expert-led businesses come together to deliver an experience that is both highly specialized and deeply connected."
        primaryCta={{ label: 'Book a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Signature Experiences', href: '/signature-experiences' }}
        imageAlt="An editorial arrangement of refined tools and materials representing the three disciplines of the 28 collective."
        imageCaption="ART DIRECTION: Editorial grouping — beauty tools, ceramics, skincare textures on linen."
        size="tall"
      />

      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 inline-flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            Considered Together
          </p>
          <h2 className="text-balance font-serif text-display-md text-ink">
            Specialized expertise, coordinated as one experience.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            Each provider is an established leader in their field. Together, they make it
            possible to consider your smile, your skin, and your features as part of one
            personalized plan — with a concierge to coordinate every step.
          </p>
        </Reveal>
      </section>

      {providers.map((provider, i) => (
        <EditorialSplit
          key={provider.slug}
          eyebrow={provider.specialtyLabel}
          title={provider.name}
          body={[provider.cardStatement, provider.philosophy]}
          imageAlt={`${provider.name} — ${provider.discipline}`}
          imageCaption={provider.heroImageNote}
          imageTone={tones[i % tones.length]}
          imageRatio="4/5"
          reverse={i % 2 === 1}
          cta={{ label: `Visit ${provider.name.split(' ')[0]}`, href: `/collective/${provider.slug}` }}
          className={i % 2 === 1 ? 'bg-sand/40' : ''}
        />
      ))}

      <CtaBanner
        eyebrow="Begin"
        headline="Not sure where to begin?"
        body="A Signature 28 consultation looks at the full picture and returns a personalized roadmap across the collective."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'View Signature Experiences', href: '/signature-experiences' }}
      />
    </>
  );
}
