import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { experiences } from '@/content/experiences';

export const metadata: Metadata = {
  title: 'Signature Experiences',
  description:
    'Curated, cross-provider experiences at 28 — personalized programs across beauty, smile aesthetics, and advanced skin health. Not bundles; roadmaps.',
  alternates: { canonical: '/signature-experiences' },
};

const tones = ['sand', 'stone', 'mushroom', 'taupe'] as const;

export default function SignatureExperiencesPage() {
  return (
    <>
      <Hero
        eyebrow="Signature Experiences"
        headline={'Curated across\nthe collective.'}
        supporting="Personalized, coordinated experiences designed around your goals, your timeline, and the moments that matter — never fixed discount bundles."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="A refined editorial still life representing a curated, multi-part experience across the 28 collective."
        imageCaption="ART DIRECTION: Curated flat-lay — appointment cards, ribbon, ceramics, skincare on stone."
        size="tall"
      />

      {/* Intro */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 inline-flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            How It Works
          </p>
          <h2 className="text-balance font-serif text-display-md text-ink">
            One plan, coordinated across three disciplines.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            28 can coordinate services across the collective based on your goals, timeline,
            lifestyle, an upcoming event, your desired level of transformation, and your
            long-term maintenance needs — sequenced thoughtfully and guided by a single
            point of contact.
          </p>
        </Reveal>
      </section>

      {/* Experiences */}
      <div className="border-t border-line">
        {experiences.map((exp, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={exp.slug}
              id={exp.slug}
              className={`scroll-mt-28 py-section ${reverse ? 'bg-sand/40' : ''}`}
            >
              <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={reverse ? 'lg:order-2' : ''}>
                  <ImageFrame
                    alt={`${exp.name} — a curated 28 experience`}
                    caption={`ART DIRECTION: Editorial imagery evoking "${exp.name}".`}
                    tone={tones[i % tones.length]}
                    ratio="5/6"
                  />
                </Reveal>

                <Reveal delay={120} className={reverse ? 'lg:order-1' : ''}>
                  <p className="eyebrow mb-5 flex items-center gap-3">
                    <span className="font-serif text-xl not-italic text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    Signature Experience
                  </p>
                  <h3 className="font-serif text-display-sm text-ink">{exp.name}</h3>
                  <p className="mt-6 max-w-prose font-sans leading-relaxed text-charcoal">
                    {exp.description}
                  </p>

                  <dl className="mt-8 space-y-5 border-t border-line pt-8">
                    <div>
                      <dt className="eyebrow mb-2">Who it&rsquo;s for</dt>
                      <dd className="font-sans text-sm leading-relaxed text-muted">{exp.forWhom}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow mb-2">May involve</dt>
                      <dd className="flex flex-wrap gap-2">
                        {exp.disciplines.map((d) => (
                          <span
                            key={d}
                            className="border border-line px-3 py-1 font-sans text-[0.68rem] uppercase tracking-wide text-muted"
                          >
                            {d}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow mb-2">The approach</dt>
                      <dd className="font-sans text-sm leading-relaxed text-muted">{exp.approach}</dd>
                    </div>
                  </dl>

                  <div className="mt-9">
                    <Button
                      href={`/consultation?interest=${encodeURIComponent(exp.name)}`}
                      variant="secondary"
                      trackEvent="experience_click"
                      trackParams={{ experience: exp.name }}
                    >
                      Request This Experience
                    </Button>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner
        eyebrow="Begin"
        headline="Create your personalized roadmap."
        body="Tell us what you'd like to explore. We'll recommend the right experience — or design one entirely around you."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Explore Membership', href: '/membership' }}
      />
    </>
  );
}
