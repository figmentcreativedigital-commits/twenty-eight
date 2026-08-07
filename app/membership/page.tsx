import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { MembershipTierCard } from '@/components/cards/MembershipTierCard';
import {
  membershipIntro,
  howItWorks,
  membershipTiers,
  membershipBenefits,
  membershipFaqs,
} from '@/content/membership';

export const metadata: Metadata = {
  title: 'Membership',
  description:
    'A private membership at 28 — preferred access, annual planning, and concierge coordination across the collective. A relationship, not a discount club.',
  alternates: { canonical: '/membership' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: membershipFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function MembershipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero
        eyebrow="Membership"
        headline={'A private membership,\nconsidered like an investment.'}
        supporting="A relationship, not a transaction — an annual commitment to your own care, with preferred access across the collective and a concierge to coordinate it all."
        primaryCta={{ label: 'Request Membership Information', href: '/consultation?interest=Membership' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="A refined 28 membership card in taupe and champagne gold, resting on linen with a silk ribbon."
        imageCaption="ART DIRECTION: Membership card + materials — taupe, champagne foil, silk ribbon (reference provided packaging)."
        imageSrc="/images/membership.png"
        size="tall"
      />

      {/* Philosophy */}
      <section className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="The Idea" title="Private access, planned across the year." />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6">
              {membershipIntro.philosophy.map((p, i) => (
                <p key={i} className="max-w-prose font-sans text-lg leading-relaxed text-charcoal">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <SectionHeading eyebrow="How Membership Works" title="Three simple steps." className="mb-14 max-w-xl" />
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <Reveal as="div" key={step.step} delay={i * 90}>
                <span className="font-serif text-4xl text-gold">{step.step}</span>
                <h3 className="mt-4 font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="shell py-section">
        <SectionHeading
          eyebrow="Membership Tiers"
          title="Choose the level of access that fits."
          lede="Members fund a personal 28 account applied toward any service or retail across the collective, with preferred benefits by tier."
          className="mb-6 max-w-2xl"
        />
        <p className="mb-12 max-w-2xl font-sans text-xs italic leading-relaxed text-muted/80">
          Note — the tier structure below reflects an early concept and is shown for
          illustration. Balances, savings, and benefits are provisional and subject to
          confirmation before launch.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <Reveal key={tier.slug}>
              <MembershipTierCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-ink text-ivory">
        <div className="shell py-section">
          <div className="mb-14 max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
              <span className="h-px w-14 bg-gold" aria-hidden="true" />
              Member Benefits
            </p>
            <h2 className="text-balance font-serif text-display-md text-ivory">
              The advantages of a coordinated relationship.
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {membershipBenefits.map((b, i) => (
              <Reveal as="div" key={b.title} delay={i * 80}>
                <span className="mb-6 block h-px w-14 bg-gold" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-ivory">{b.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ivory/70">{b.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to providers */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 inline-flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            One Membership, the Whole Collective
          </p>
          <h2 className="text-balance font-serif text-display-sm text-ink">
            Membership moves with you across every provider.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">
            Your account and benefits apply across Yulia Gerchik Studio, New York City Dental
            Smiles, and Dr. Evia Nano — with a concierge to coordinate between them.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <SectionHeading eyebrow="Questions" title="Membership, answered." className="mb-12 max-w-xl" />
          <Accordion items={membershipFaqs} />
        </div>
      </section>

      <CtaBanner
        eyebrow="Begin"
        headline="Request membership information."
        body="Tell us a little about your goals and a member of our team will walk you through the tiers and help determine the right fit."
        primaryCta={{ label: 'Request Membership Information', href: '/consultation?interest=Membership' }}
        secondaryCta={{ label: 'Explore the Collective', href: '/collective' }}
      />
    </>
  );
}
