import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { BeginSection } from '@/components/sections/BeginSection';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { Accordion } from '@/components/ui/Accordion';
import {
  spaceHero,
  spaceStory,
  spaceMoments,
  guestExpectations,
  tribecaHome,
  planYourVisit,
  practicalDetails,
  spaceFaqs,
} from '@/content/space';

export const metadata: Metadata = {
  title: 'The Experience',
  description:
    'Where exceptional care meets thoughtful hospitality. What to expect at 28 in Tribeca, from your first conversation to your ongoing care.',
  alternates: { canonical: '/the-space' },
};

export default function TheSpacePage() {
  return (
    <>
      <Hero
        eyebrow={spaceHero.eyebrow}
        headline={spaceHero.headline}
        supporting={spaceHero.supporting}
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="The arrival and reception moment at 28 - stone, plaster, sculptural lighting, and soft natural light."
        imageSrc="/images/28-placeholder-f.jpeg"
        size="full"
      />

      {/* Story */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{spaceStory.eyebrow}</Eyebrow>
          <h2 className="text-balance font-serif text-display-sm text-ink">{spaceStory.headline}</h2>
          <div className="mt-6 space-y-6">
            {spaceStory.body.map((p) => (
              <p key={p} className="font-sans text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Tagline */}
      <section className="shell py-section-sm">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="hairline-gold mx-auto mb-6 block" aria-hidden="true" />
          <p className="font-serif text-xl italic leading-snug text-ink">{spaceStory.tagline}</p>
        </Reveal>
      </section>

      {/* Moments */}
      <section className="shell pb-section">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-4">{spaceMoments.eyebrow}</p>
          <h2 className="font-serif text-display-sm text-ink">{spaceMoments.headline}</h2>
        </Reveal>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {spaceMoments.items.map((moment, i) => (
            <Reveal key={moment.title} delay={(i % 2) * 100}>
              <Photo
                src={moment.image}
                alt={`${moment.title} - ${moment.description}`}
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

      {/* What to expect */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <p className="eyebrow mb-4">{guestExpectations.eyebrow}</p>
          <h2 className="mb-14 max-w-xl font-serif text-display-sm text-ink">
            {guestExpectations.headline}
          </h2>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {guestExpectations.items.map((g, i) => (
              <Reveal key={g.title} delay={i * 90}>
                <span className="hairline-gold mb-6 block" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-ink">{g.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">{g.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Tribeca home */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{tribecaHome.eyebrow}</Eyebrow>
          <h2 className="text-balance font-serif text-display-sm text-ink">
            {tribecaHome.headline}
          </h2>
          <div className="mt-6 space-y-6">
            {tribecaHome.body.map((p) => (
              <p key={p} className="font-sans text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Plan your visit */}
      <section className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{planYourVisit.eyebrow}</Eyebrow>
            <h2 className="text-balance font-serif text-display-sm text-ink">
              {planYourVisit.headline}
            </h2>
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-muted">
              {planYourVisit.body}
            </p>
          </Reveal>
          <Reveal>
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
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="mb-12 max-w-xl font-serif text-display-sm text-ink">Good to Know.</h2>
          <Accordion items={spaceFaqs} />
        </div>
      </section>

      <BeginSection
        headline="Your Well-Being Deserves a More Personal Approach."
        body="Whether you are seeking a specific service or exploring a more comprehensive approach to your health, our team is here to help you take the next step. Experience the connection between exceptional expertise, personalized care, and thoughtful hospitality."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Meet the Collective', href: '/collective' }}
      />

      <CtaBanner
        headline="A New Standard of Integrated Wellness."
        body="Personalized care. Connected expertise. Healthier living."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
      />
    </>
  );
}
