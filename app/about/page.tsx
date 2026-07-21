import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { EditorialSplit } from '@/components/sections/EditorialSplit';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { the28Difference, pillars } from '@/content/home';

export const metadata: Metadata = {
  title: 'About 28',
  description:
    '28 is a luxury wellness and aesthetics collective in Tribeca uniting beauty, smile aesthetics, and advanced skin health — beauty and health, considered together.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About 28"
        headline={'The future of\nbeauty lives here.'}
        supporting="28 represents a new category in luxury health and beauty — a destination where dentistry, dermatology, wellness, and aesthetics intersect to create a more complete form of personal care."
        primaryCta={{ label: 'Meet the Collective', href: '/collective' }}
        secondaryCta={{ label: 'Book a Consultation', href: '/consultation' }}
        imageAlt="A serene, architectural interior detail from 28's Tribeca destination in warm stone and plaster."
        imageCaption="ART DIRECTION: Architectural interior — arch, plaster, sculptural lighting, warm stone."
        size="tall"
      />

      {/* Positioning */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 inline-flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            Positioning
          </p>
          <h2 className="text-balance font-serif text-display-md leading-tight text-ink">
            28 unites leaders in dentistry, aesthetics, and dermatology to help clients look
            exceptional, feel confident, and age beautifully.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            Where many providers focus on a single treatment category, 28 is built on a
            broader philosophy: the face, smile, skin, and body are connected — and beauty and
            health are best considered together.
          </p>
        </Reveal>
      </section>

      {/* The 28 Difference */}
      <EditorialSplit
        eyebrow={the28Difference.eyebrow}
        title={the28Difference.headline}
        body={the28Difference.body}
        imageAlt="An editorial still life of ceramics and skincare textures on warm stone."
        imageCaption="ART DIRECTION: Editorial detail — ceramics, skincare texture, travertine."
        imageTone="sand"
        imageRatio="4/5"
      />

      {/* Pillars */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <SectionHeading eyebrow="What Sets 28 Apart" title="Four ideas at the center of everything." className="mb-14 max-w-xl" />
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal as="div" key={pillar.title} delay={i * 90}>
                <span className="hairline-gold mb-6 block" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-ink">{pillar.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* North star quote */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-6 py-section text-center sm:px-8">
          <Reveal>
            <p className="mb-8 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
              Our North Star
            </p>
            <blockquote className="text-balance font-serif text-display-sm leading-tight text-ivory">
              &ldquo;28 should feel like a private invitation into a new category of beauty and
              wellness — expert-led, deeply curated, and unmistakably luxurious.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        eyebrow="Begin"
        headline="Discover a more considered approach."
        body="Meet the collective, or begin with a consultation and a personalized roadmap."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Meet the Collective', href: '/collective' }}
      />
    </>
  );
}
