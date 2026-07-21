import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { EditorialSplit } from '@/components/sections/EditorialSplit';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ProviderCard } from '@/components/cards/ProviderCard';
import { providers } from '@/content/providers';
import { experiences } from '@/content/experiences';
import {
  hero,
  introducing28,
  the28Difference,
  pillars,
  whyTribeca,
  finalCta,
} from '@/content/home';
import { membershipIntro } from '@/content/membership';

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        supporting={hero.supporting}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        imageAlt="A warm, softly lit treatment and consultation space in 28's Tribeca destination — stone, plaster, and natural light."
        imageCaption={hero.imageNote}
        imageSrc="/images/28-placeholder-g.jpeg"
      />

      {/* Introducing 28 — centered editorial statement */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 inline-flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            {introducing28.eyebrow}
          </p>
          <h2 className="text-balance font-serif text-display-md text-ink">
            {introducing28.headline}
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-6">
            {introducing28.body.map((p, i) => (
              <p key={i} className="font-sans text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* The 28 Difference */}
      <EditorialSplit
        eyebrow={the28Difference.eyebrow}
        title={the28Difference.headline}
        body={the28Difference.body}
        imageAlt="An editorial still life of refined materials — ceramics and skincare textures on warm stone."
        imageCaption="ART DIRECTION: Editorial detail — ceramics, skincare texture, travertine, silk ribbon."
        imageSrc="/images/28-placeholder-c.jpeg"
        imageTone="sand"
        imageRatio="4/5"
      />

      {/* Pillars */}
      <section className="bg-sand/50">
        <div className="shell py-section-sm">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal as="div" delay={i * 90} key={pillar.title}>
                <span className="hairline-gold mb-6 block" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-ink">{pillar.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Collective */}
      <section className="shell py-section">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Collective"
            title="Three leaders. One destination."
            lede="Inside 28, three expert-led businesses come together to deliver an experience that is both highly specialized and deeply connected."
            className="max-w-2xl"
          />
          <Button href="/collective" variant="quiet" className="mb-2">
            Explore the Collective →
          </Button>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider, i) => (
            <Reveal key={provider.slug} delay={i * 100}>
              <ProviderCard provider={provider} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="bg-ink text-ivory">
        <div className="shell py-section">
          <div className="mb-8 max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
              <span className="h-px w-14 bg-gold" aria-hidden="true" />
              Signature Experiences
            </p>
            <h2 className="text-balance font-serif text-display-md text-ivory">
              Curated experiences across the collective.
            </h2>
            <p className="mt-6 max-w-xl font-sans leading-relaxed text-ivory/75">
              Not fixed bundles — personalized, coordinated experiences designed around
              your goals, your timeline, and the moments that matter.
            </p>
          </div>

          <div className="mt-6">
            {experiences.slice(0, 5).map((exp, i) => (
              <Link
                key={exp.slug}
                href={`/signature-experiences#${exp.slug}`}
                className="group grid gap-4 border-t border-ivory/15 py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10"
              >
                <span className="font-serif text-2xl text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ivory transition-colors duration-400 group-hover:text-gold md:text-[1.7rem]">
                    {exp.name}
                  </h3>
                  <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ivory/70">
                    {exp.summary}
                  </p>
                </div>
                <span className="hidden font-sans text-[0.7rem] uppercase tracking-wide text-ivory/60 transition-colors duration-400 group-hover:text-gold md:inline">
                  Discover &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/signature-experiences" variant="ghost">
              View All Signature Experiences
            </Button>
          </div>
        </div>
      </section>

      {/* Membership teaser */}
      <EditorialSplit
        eyebrow={membershipIntro.eyebrow}
        title={membershipIntro.headline}
        body={[membershipIntro.lede, membershipIntro.philosophy[0]]}
        imageAlt="A refined membership card and appointment materials in taupe and champagne gold on linen."
        imageCaption="ART DIRECTION: Membership materials — taupe cards, champagne foil, silk ribbon (reference the provided packaging images)."
        imageSrc="/images/28-placeholder-b.jpeg"
        imageTone="taupe"
        imageRatio="4/5"
        reverse
        cta={{ label: 'Explore Membership', href: '/membership' }}
      />

      {/* The Space */}
      <EditorialSplit
        eyebrow="The Space — Tribeca"
        title="An experience that begins the moment you arrive."
        body={[
          'The Tribeca location is designed to feel calm, refined, private, and elevated — more like a luxury hospitality experience than a traditional clinical environment.',
          'Warm materials, soft light, and uncluttered rooms set the tone, with thoughtful transitions between providers and private spaces for every consultation.',
        ]}
        imageAlt="A serene treatment room with a sculptural chaise, sheer curtains, and warm plaster walls."
        imageCaption="ART DIRECTION: Treatment room — sculptural chaise, sheer light, warm plaster (reference the provided interior image)."
        imageSrc="/images/28-placeholder-f.jpeg"
        imageTone="stone"
        imageRatio="5/6"
        cta={{ label: 'Plan Your Visit', href: '/the-space' }}
      />

      {/* Why Tribeca */}
      <section className="bg-sand/50">
        <div className="shell py-section-sm">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6 inline-flex items-center gap-3">
              <span className="hairline-gold" aria-hidden="true" />
              {whyTribeca.eyebrow}
            </p>
            <h2 className="text-balance font-serif text-display-sm text-ink">
              {whyTribeca.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">
              {whyTribeca.body[0]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBanner
        eyebrow={finalCta.eyebrow}
        headline={finalCta.headline}
        body={finalCta.body}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </>
  );
}
