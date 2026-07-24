import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { Reveal } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import {
  spaceHero,
  spaceStory,
  spaceMoments,
  guestExpectations,
  practicalDetails,
  spaceFaqs,
} from '@/content/space';

export const metadata: Metadata = {
  title: 'The Space',
  description:
    'A private luxury wellness experience in the heart of Tribeca — arrival, interiors, treatment rooms, and what to expect at 28.',
  alternates: { canonical: '/the-space' },
};

const tones = ['stone', 'sand', 'mushroom', 'taupe'] as const;

/* Placeholder photography — swap for final commissioned images. */
const spaceImages = [
  '/images/28-placeholder-g.jpeg',
  '/images/28-placeholder-e.jpeg',
  '/images/28-placeholder-d.jpeg',
  '/images/derm.png',
];

export default function TheSpacePage() {
  return (
    <>
      <Hero
        eyebrow={spaceHero.eyebrow}
        headline={spaceHero.headline}
        supporting={spaceHero.supporting}
        primaryCta={{ label: 'Book a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="The arrival and reception moment at 28 — stone, plaster, sculptural lighting, and soft natural light."
        imageCaption={spaceHero.imageNote}
        imageSrc="/images/28-placeholder-f.jpeg"
        size="full"
      />

      {/* Story */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 inline-flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            The Experience
          </p>
          <div className="space-y-6">
            {spaceStory.body.map((p, i) => (
              <p key={i} className="font-sans text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Moments — editorial image grid */}
      <section className="shell pb-section">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {spaceMoments.map((moment, i) => (
            <Reveal key={moment.title} delay={(i % 2) * 100}>
              <ImageFrame
                alt={`${moment.title} — ${moment.description}`}
                caption={moment.imageNote}
                src={spaceImages[i % spaceImages.length]}
                tone={tones[i % tones.length]}
                ratio={i % 2 === 0 ? '4/5' : '5/4'}
              />
              <div className="mt-6">
                <p className="eyebrow mb-2">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-serif text-2xl text-ink">{moment.title}</h3>
                <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-muted">
                  {moment.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guest expectations */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <SectionHeading eyebrow="What to Expect" title="Considered from arrival to departure." className="mb-14 max-w-xl" />
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {guestExpectations.map((g, i) => (
              <Reveal as="div" key={g.title} delay={i * 90}>
                <span className="hairline-gold mb-6 block" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-ink">{g.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">{g.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practical details */}
      <section className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Plan Your Visit" title="Practical details." />
            <p className="mt-6 max-w-sm font-sans text-sm italic leading-relaxed text-muted/80">
              Address, hours, transit, and accessibility details are being finalized and
              will be confirmed with your appointment.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="divide-y divide-line border-y border-line">
              {practicalDetails.map((d) => (
                <div key={d.label} className="flex items-baseline justify-between gap-6 py-5">
                  <dt className="eyebrow">{d.label}</dt>
                  <dd className="text-right font-sans text-charcoal">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <SectionHeading eyebrow="Questions" title="Good to know." className="mb-12 max-w-xl" />
          <Accordion items={spaceFaqs} />
        </div>
      </section>

      <CtaBanner
        eyebrow="Begin"
        headline="Plan your visit to 28."
        body="Request a consultation and we'll coordinate a time that suits you."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Explore the Collective', href: '/collective' }}
      />
    </>
  );
}
