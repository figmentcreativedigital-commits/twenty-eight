import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { BeginSection } from '@/components/sections/BeginSection';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { providers, type Provider, type ProviderItem } from '@/content/providers';
import { cn } from '@/lib/utils';

/** 3 items sit in three columns; 4 items go 2-up, then 4-up on large screens. */
function gridCols(count: number) {
  return count === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';
}

function ItemGrid({ items }: { items: ProviderItem[] }) {
  return (
    <div className={cn('grid gap-x-10 gap-y-12', gridCols(items.length))}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 90}>
          <span className="hairline-gold mb-6 block" aria-hidden="true" />
          {item.label ? (
            <p className="eyebrow mb-3">
              {String(i + 1).padStart(2, '0')} | {item.label}
            </p>
          ) : null}
          <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
          {item.description ? (
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted">{item.description}</p>
          ) : null}
        </Reveal>
      ))}
    </div>
  );
}

export function ProviderPage({ provider }: { provider: Provider }) {
  const others = providers.filter((p) => p.slug !== provider.slug);

  return (
    <>
      <Hero
        eyebrow={`The Collective - ${provider.specialtyLabel}`}
        headline={provider.headline}
        headlineSize="lg"
        supporting={provider.heroSupporting}
        primaryCta={{ label: `Book with ${provider.shortName}`, href: `/booking/${provider.slug}` }}
        secondaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        imageAlt={provider.imageAlt ?? `${provider.name} - ${provider.discipline}`}
        imageSrc={provider.image}
        imagePosition={provider.imagePosition}
      />

      {/* Introduction */}
      <section className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Within 28</Eyebrow>
            <div className="space-y-6">
              {provider.intro.map((p, i) => (
                <p key={i} className="max-w-prose font-sans text-lg leading-relaxed text-charcoal">
                  {p}
                </p>
              ))}
            </div>

            {provider.introBlocks?.map((block) => (
              <div key={block.title} className="mt-10 border-t border-line pt-8">
                <h3 className="font-serif text-2xl text-ink">{block.title}</h3>
                <div className="mt-4 space-y-4">
                  {block.body.map((p, i) => (
                    <p key={i} className="max-w-prose font-sans leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {provider.tags ? (
              <div className="mt-10 border-t border-line pt-8">
                <p className="eyebrow mb-4">{provider.tags.title}</p>
                <ul className="flex flex-wrap gap-2">
                  {provider.tags.items.map((t) => (
                    <li
                      key={t}
                      className="border border-line px-3 py-1 font-sans text-[0.68rem] uppercase tracking-wide text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Reveal>
          <Photo
            src={provider.image}
            alt={provider.imageAlt ?? `Editorial detail for ${provider.name}`}
            ratio="4/5"
            reveal="image"
            position={provider.imagePosition}
          />
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <p className="eyebrow mb-4">Expertise</p>
          <h2 className="mb-14 max-w-2xl font-serif text-display-sm text-ink">
            {provider.expertiseTitle}
          </h2>
          <ItemGrid items={provider.expertise} />

          {provider.approach ? (
            <div className="mt-20 border-t border-line pt-14">
              <h2 className="mb-14 max-w-2xl font-serif text-display-sm text-ink">
                {provider.approach.title}
              </h2>
              <ItemGrid items={provider.approach.items} />
            </div>
          ) : null}
        </div>
      </section>

      {/* Philosophy */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-8">Philosophy</p>
          <blockquote className="text-balance font-serif text-display-sm leading-tight text-ink">
            &ldquo;{provider.philosophy}&rdquo;
          </blockquote>
          {provider.philosophyAttribution ? (
            <p className="mt-8 font-sans text-[0.72rem] uppercase tracking-eyebrow text-muted">
              {provider.philosophyAttribution}
            </p>
          ) : null}
        </Reveal>
      </section>

      {/* Selected services */}
      <section className="bg-ink text-ivory">
        <div className="shell grid gap-12 py-section lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
              <span className="h-px w-14 bg-gold" aria-hidden="true" />
              Selected Services
            </p>
            <h2 className="text-balance font-serif text-display-sm text-ivory">
              A considered range, delivered with care.
            </h2>
            <p className="mt-6 max-w-md font-sans leading-relaxed text-ivory/70">
              An illustrative selection. Your consultation shapes the right approach for your goals
              - on its own, or coordinated across the Collective.
            </p>
          </div>
          <ul className="grid content-start gap-0 self-center">
            {provider.selectedServices.map((s) => (
              <li
                key={s.title}
                className="flex items-baseline justify-between gap-6 border-b border-ivory/15 py-5 font-sans text-ivory/90"
              >
                <span>{s.title}</span>
                {s.note ? (
                  <span className="text-right text-sm text-ivory/60">{s.note}</span>
                ) : (
                  <span aria-hidden="true" className="text-gold">
                    &mdash;
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connection to the Collective */}
      <section className="shell py-section">
        <p className="eyebrow mb-4">Considered Together</p>
        <h2 className="mb-6 max-w-2xl font-serif text-display-sm text-ink">
          Part of something more complete.
        </h2>
        <p className="mb-14 max-w-2xl font-sans text-lg leading-relaxed text-muted">
          As part of 28, {provider.name} works alongside expertise in dentistry, aesthetic medicine,
          skin health, and nutrition - so your care can be coordinated into a single, personalized
          plan.
        </p>
        <div className={cn('grid gap-8', others.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2')}>
          {others.map((o) => (
            <Reveal key={o.slug}>
              <Link
                href={`/collective/${o.slug}`}
                className="group flex h-full items-center justify-between gap-6 border border-line p-8 transition-colors duration-400 hover:border-gold"
              >
                <div>
                  <p className="eyebrow mb-2">{o.specialtyLabel}</p>
                  <h3 className="font-serif text-2xl text-ink transition-colors duration-400 group-hover:text-gold-deep">
                    {o.name}
                  </h3>
                </div>
                <span aria-hidden="true" className="text-gold">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          <Button href={`/service-menu#${provider.slug}`} variant="secondary">
            View {provider.shortName}&rsquo;s Services
          </Button>
          <Button href="/signature-experiences" variant="quiet">
            View Personalized Programs
          </Button>
          <Button href="/collective" variant="quiet">
            Back to the Collective &rarr;
          </Button>
        </div>

        {/* Gallery / testimonials placeholder. No invented content. */}
        <div className="mt-16 border border-dashed border-line p-8 text-center">
          <p className="font-sans text-sm leading-relaxed text-muted/80">
            <span className="font-medium text-charcoal">Gallery &amp; testimonials:</span>{' '}
            reserved for client-approved photography and verified client stories. No placeholder
            results or reviews are shown until real assets are supplied.
          </p>
        </div>
      </section>

      <BeginSection
        tone="sand"
        headline={`Begin with ${provider.shortName}.`}
        body="Request a consultation and a member of our team will help you plan the right next step - with this provider, or across the Collective."
        primaryCta={{ label: `Book with ${provider.shortName}`, href: `/booking/${provider.slug}` }}
        secondaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
      />
    </>
  );
}
