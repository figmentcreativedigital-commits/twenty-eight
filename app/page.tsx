import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { BeginSection } from '@/components/sections/BeginSection';
import { PrinciplesSection } from '@/components/sections/PrinciplesSection';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { providers } from '@/content/providers';
import { experiences } from '@/content/experiences';
import {
  hero,
  introducing28,
  the28Difference,
  homeCollective,
  homeExperiences,
  homeMembership,
  homeSpace,
  finalCta,
} from '@/content/home';

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        supporting={hero.supporting}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        imageAlt={hero.imageAlt}
        imageSrc={hero.imageSrc}
        size="full"
      />

      {/* Introducing 28 */}
      <Reveal as="section" className="shell py-section">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{introducing28.eyebrow}</Eyebrow>
          <h2 className="text-balance font-serif text-display-md leading-tight text-ink">
            {introducing28.headline}
          </h2>
          {introducing28.body.map((p) => (
            <p
              key={p}
              className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted"
            >
              {p}
            </p>
          ))}
          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl leading-snug text-ink">
            {introducing28.statement}
          </p>
        </div>
      </Reveal>

      {/* 28 Difference */}
      <section className="bg-sand/50">
        <div className="shell grid gap-12 py-section lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>{the28Difference.eyebrow}</Eyebrow>
            <h2 className="text-balance font-serif text-display-sm leading-tight text-ink">
              {the28Difference.headline}
            </h2>
            {the28Difference.body.map((p) => (
              <p key={p} className="mt-6 max-w-prose font-sans leading-relaxed text-charcoal">
                {p}
              </p>
            ))}
          </Reveal>
          <Photo src="/images/yulia.png" ratio="4/5" reveal="image" />
        </div>
      </section>

      {/* What Sets 28 Apart */}
      <PrinciplesSection />

      {/* The Collective */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <p className="eyebrow mb-4">{homeCollective.eyebrow}</p>
          <h2 className="max-w-xl font-serif text-display-sm text-ink">
            {homeCollective.headline}
          </h2>
          <p className="mb-14 mt-4 max-w-2xl font-serif text-xl italic leading-snug text-charcoal">
            {homeCollective.tagline}
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {providers.map((provider, i) => (
              <Reveal key={provider.slug} delay={i * 90}>
                <Link
                  href={`/collective/${provider.slug}`}
                  className="group block h-full border border-line bg-ivory transition-colors duration-400 hover:border-gold"
                >
                  <Photo
                    src={provider.image}
                    ratio="4/5"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    position={provider.imagePosition}
                  />
                  <div className="p-8">
                    <p className="eyebrow mb-2">{provider.specialtyLabel}</p>
                    <h3 className="font-serif text-2xl text-ink transition-colors duration-400 group-hover:text-gold-deep">
                      {provider.name}
                    </h3>
                    {provider.credentials ? (
                      <p className="mt-1.5 font-sans text-[0.66rem] uppercase tracking-wide text-muted">
                        {provider.credentials}
                      </p>
                    ) : null}
                    <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
                      {provider.cardStatement}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="shell py-section">
        <p className="eyebrow mb-4">{homeExperiences.eyebrow}</p>
        <h2 className="mb-14 max-w-xl font-serif text-display-sm text-ink">
          {homeExperiences.headline}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <Reveal key={exp.slug} delay={(i % 3) * 80}>
              <Link
                href={`/signature-experiences#${exp.slug}`}
                className="group block h-full border border-line p-8 transition-colors duration-400 hover:border-gold"
              >
                <h3 className="font-serif text-xl text-ink transition-colors duration-400 group-hover:text-gold-deep">
                  {exp.name}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{exp.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button href={homeExperiences.cta.href} variant="secondary">
            {homeExperiences.cta.label}
          </Button>
        </div>
      </section>

      {/* Membership */}
      <section className="bg-ink text-ivory">
        <div className="shell py-section text-center">
          <p className="mb-6 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
            {homeMembership.eyebrow}
          </p>
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-display-sm text-ivory">
            {homeMembership.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-ivory/70">
            {homeMembership.body}
          </p>
          <div className="mt-10">
            <Button href={homeMembership.cta.href} variant="ghost">
              {homeMembership.cta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* The Space */}
      <Reveal as="section" className="shell grid gap-12 py-section lg:grid-cols-2 lg:gap-20">
        <Photo src={homeSpace.imageSrc} ratio="4/5" />
        <div className="flex flex-col justify-center">
          <Eyebrow>{homeSpace.eyebrow}</Eyebrow>
          <h2 className="text-balance font-serif text-display-sm leading-tight text-ink">
            {homeSpace.headline}
          </h2>
          <p className="mt-6 max-w-prose font-sans leading-relaxed text-charcoal">
            {homeSpace.body}
          </p>
          <div className="mt-8">
            <Button href={homeSpace.cta.href} variant="secondary">
              {homeSpace.cta.label}
            </Button>
          </div>
        </div>
      </Reveal>

      <BeginSection
        eyebrow={finalCta.eyebrow}
        headline={finalCta.headline}
        body={finalCta.body}
        primaryCta={finalCta.primaryCta}
        secondaryCta={finalCta.secondaryCta}
      />
    </>
  );
}
