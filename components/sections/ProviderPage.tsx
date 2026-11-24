import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { BeginSection } from '@/components/sections/BeginSection';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { providers, type Provider } from '@/content/providers';

export function ProviderPage({ provider }: { provider: Provider }) {
  const others = providers.filter((p) => p.slug !== provider.slug);

  return (
    <>
      <Hero
        eyebrow={`The Collective - ${provider.specialtyLabel}`}
        headline={provider.headline}
        headlineSize="lg"
        supporting={provider.discipline}
        primaryCta={{ label: `Book with ${provider.shortName}`, href: `/booking/${provider.slug}` }}
        secondaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        imageAlt={`${provider.name} - ${provider.discipline}`}
        imageSrc={provider.image}
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
          </Reveal>
          <Photo
            src={provider.image}
            alt={`Editorial detail for ${provider.name}`}
            ratio="4/5"
            reveal="image"
          />
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <p className="eyebrow mb-4">Expertise</p>
          <h2 className="mb-14 max-w-2xl font-serif text-display-sm text-ink">Areas of focus</h2>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {provider.expertise.map((area, i) => (
              <Reveal key={area.title} delay={i * 90}>
                <span className="hairline-gold mb-6 block" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-ink">{area.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-8">Philosophy</p>
          <blockquote className="text-balance font-serif text-display-sm leading-tight text-ink">
            &ldquo;{provider.philosophy}&rdquo;
          </blockquote>
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
                key={s}
                className="flex items-center justify-between border-b border-ivory/15 py-5 font-sans text-ivory/90"
              >
                <span>{s}</span>
                <span aria-hidden="true" className="text-gold">
                  &mdash;
                </span>
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
          As part of 28, {provider.name} connects with beauty, smile aesthetics, and advanced skin
          health - so your care can be coordinated into a single, personalized plan.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
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
