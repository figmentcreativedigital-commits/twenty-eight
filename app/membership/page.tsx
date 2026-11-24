import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BeginSection } from '@/components/sections/BeginSection';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Accordion } from '@/components/ui/Accordion';
import { MembershipTierCard } from '@/components/cards/MembershipTierCard';
import {
  membershipIntro,
  howItWorks,
  membershipTiersIntro,
  membershipTiers,
  membershipBenefits,
  wellnessScore,
  connectedExpertise,
  membershipFaqs,
} from '@/content/membership';

export const metadata: Metadata = {
  title: 'Membership',
  description:
    'Membership at 28 combines preferred access to exceptional services with an ongoing, personalized wellness relationship, coordinated by a dedicated concierge.',
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
        eyebrow={membershipIntro.hero.eyebrow}
        headline={membershipIntro.hero.headline}
        supporting={membershipIntro.hero.supporting}
        primaryCta={{
          label: 'Request Membership Information',
          href: '/consultation?interest=Membership',
        }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="A refined 28 membership card in taupe and champagne gold, resting on linen with a silk ribbon."
        imageSrc="/images/membership.png"
      />

      {/* Statement */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          {membershipIntro.statement.map((p, i) => (
            <p
              key={p}
              className={`${i > 0 ? 'mt-6 ' : ''}font-sans text-lg leading-relaxed text-charcoal`}
            >
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{membershipIntro.philosophy.eyebrow}</Eyebrow>
            <h2 className="text-balance font-serif text-display-md text-ink">
              {membershipIntro.philosophy.headline}
            </h2>
          </Reveal>
          <Reveal className="space-y-6">
            {membershipIntro.philosophy.body.map((p) => (
              <p key={p} className="max-w-prose font-sans text-lg leading-relaxed text-charcoal">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <p className="eyebrow mb-4">{howItWorks.eyebrow}</p>
          <h2 className="mb-14 max-w-xl font-serif text-display-sm text-ink">
            {howItWorks.headline}
          </h2>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {howItWorks.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <span className="font-serif text-4xl text-gold">{step.step}</span>
                <h3 className="mt-4 font-serif text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="shell py-section">
        <div className="mb-6 max-w-2xl">
          <Eyebrow className="mb-5 inline-flex">{membershipTiersIntro.eyebrow}</Eyebrow>
          <h2 className="text-balance font-serif text-display-md text-ink">
            {membershipTiersIntro.headline}
          </h2>
          <p className="lede mt-6 max-w-prose">{membershipTiersIntro.lede}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {membershipTiers.map((tier) => (
            <Reveal key={tier.slug}>
              <MembershipTierCard tier={tier} />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-2xl font-sans text-xs italic leading-relaxed text-muted/80">
          {membershipTiersIntro.disclaimer}
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-ink text-ivory">
        <div className="shell py-section">
          <div className="mb-14 max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
              <span className="h-px w-14 bg-gold" aria-hidden="true" />
              {membershipBenefits.eyebrow}
            </p>
            <h2 className="text-balance font-serif text-display-md text-ivory">
              {membershipBenefits.headline}
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {membershipBenefits.items.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 80}>
                <span className="mb-6 block h-px w-14 bg-gold" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-ivory">{b.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ivory/70">
                  {b.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 28 Wellness Score */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <div className="mb-14 max-w-2xl">
            <Eyebrow className="mb-5 inline-flex">{wellnessScore.eyebrow}</Eyebrow>
            <h2 className="text-balance font-serif text-display-md text-ink">
              {wellnessScore.headline}
            </h2>
            <p className="mt-6 max-w-prose font-sans text-lg leading-relaxed text-charcoal">
              {wellnessScore.intro}
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {wellnessScore.dimensions.map((d, i) => (
              <Reveal key={d} delay={i * 80}>
                <span className="hairline-gold mb-6 block" aria-hidden="true" />
                <h3 className="font-serif text-xl text-ink">{d}</h3>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 max-w-prose space-y-5">
            {wellnessScore.body.map((p) => (
              <p key={p} className="font-sans leading-relaxed text-charcoal">
                {p}
              </p>
            ))}
            <p className="font-sans text-sm italic leading-relaxed text-muted/80">
              {wellnessScore.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Connected expertise */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{connectedExpertise.eyebrow}</Eyebrow>
          <h2 className="text-balance font-serif text-display-sm text-ink">
            {connectedExpertise.headline}
          </h2>
          {connectedExpertise.body.map((p) => (
            <p key={p} className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="mb-12 max-w-xl font-serif text-display-sm text-ink">
            Membership, Answered.
          </h2>
          <Accordion items={membershipFaqs} />
        </div>
      </section>

      <BeginSection
        headline="Invest in Your Health. Prioritize Your Future."
        body="Whether you are beginning a wellness journey or seeking a more coordinated approach to ongoing care, 28 offers a personalized membership experience designed around you. Discover how membership can support your health, well-being, and long-term goals."
        primaryCta={{
          label: 'Request Membership Information',
          href: '/consultation?interest=Membership',
        }}
        secondaryCta={{ label: 'Explore Our Expertise', href: '/service-menu' }}
      />

      <CtaBanner
        eyebrow="Begin Your Journey"
        headline="A Lasting Commitment to Better Living."
        body="Connected expertise. Personalized care. A healthier future."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation?interest=Membership' }}
      />
    </>
  );
}
