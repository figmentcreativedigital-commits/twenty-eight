import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { experiences, experiencesIntro } from '@/content/experiences';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Personalized Programs',
  description:
    'Personalized programs at 28 that bring together preventive medicine, nutrition, dentistry, skin health, and aesthetics around your individual needs and goals.',
  alternates: { canonical: '/signature-experiences' },
};

export default function SignatureExperiencesPage() {
  const { hero, howItWorks, closing } = experiencesIntro;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        supporting={hero.supporting}
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="A refined editorial still life representing a curated, multi-part experience across 28 Collective."
        imageSrc="/images/28-placeholder-d.jpeg"
      />

      {/* How it works */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2 className="text-balance font-serif text-display-md text-ink">
            {howItWorks.headline}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            {howItWorks.body}
          </p>
        </Reveal>
      </section>

      {/* Programs */}
      <div className="border-t border-line">
        {experiences.map((exp, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={exp.slug}
              id={exp.slug}
              className={cn('scroll-mt-28 py-section', reverse && 'bg-sand/40')}
            >
              <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Photo
                  src={exp.image}
                  alt={`${exp.name} - a curated 28 experience`}
                  ratio="5/6"
                  reveal="default"
                  className={cn(reverse && 'lg:order-2')}
                />

                <Reveal className={cn(reverse && 'lg:order-1')}>
                  <p className="eyebrow mb-5 flex items-center gap-3">
                    <span className="font-serif text-xl not-italic text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    Personalized Program
                  </p>
                  <h3 className="font-serif text-display-sm text-ink">{exp.name}</h3>
                  {exp.description.map((p) => (
                    <p key={p} className="mt-6 max-w-prose font-sans leading-relaxed text-charcoal">
                      {p}
                    </p>
                  ))}

                  <dl className="mt-8 space-y-5 border-t border-line pt-8">
                    <div>
                      <dt className="eyebrow mb-2">Who It&rsquo;s For</dt>
                      <dd className="font-sans text-sm leading-relaxed text-muted">{exp.forWhom}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow mb-2">{exp.areasLabel}</dt>
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
                      <dt className="eyebrow mb-2">Our Approach</dt>
                      <dd className="font-sans text-sm leading-relaxed text-muted">{exp.approach}</dd>
                    </div>
                  </dl>

                  {exp.feature ? (
                    <div className="mt-8 space-y-4 border-t border-line pt-8">
                      <h4 className="font-serif text-xl text-ink">{exp.feature.title}</h4>
                      {exp.feature.body.map((p) => (
                        <p key={p} className="font-sans text-sm leading-relaxed text-muted">
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-9">
                    <Button
                      href={`/consultation?interest=${encodeURIComponent(exp.name)}`}
                      variant="secondary"
                      trackEvent="experience_click"
                      trackParams={{ experience: exp.name }}
                    >
                      {exp.ctaLabel}
                    </Button>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner
        eyebrow={closing.eyebrow}
        headline={closing.headline}
        body={closing.body}
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Explore Membership', href: '/membership' }}
      />
    </>
  );
}
