import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { providers, type Provider } from '@/content/providers';

export function ProviderPage({ provider }: { provider: Provider }) {
  const others = providers.filter((p) => p.slug !== provider.slug);

  return (
    <>
      <Hero
        eyebrow={`The Collective — ${provider.specialtyLabel}`}
        headline={provider.headline}
        supporting={provider.discipline}
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt={`${provider.name} — ${provider.discipline}`}
        imageCaption={provider.heroImageNote}
        imageSrc={provider.image}
        size="tall"
      />

      {/* Introduction */}
      <section className="shell py-section">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-6 inline-flex items-center gap-3">
              <span className="hairline-gold" aria-hidden="true" />
              Within 28
            </p>
            <div className="space-y-6">
              {provider.intro.map((p, i) => (
                <p key={i} className="max-w-prose font-sans text-lg leading-relaxed text-charcoal">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImageFrame
              alt={`Editorial detail for ${provider.name}`}
              caption={provider.heroImageNote}
              src={provider.image}
              tone="sand"
              ratio="4/5"
            />
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-sand/50">
        <div className="shell py-section">
          <SectionHeading
            eyebrow="Expertise"
            title="Areas of focus"
            className="mb-14 max-w-2xl"
          />
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {provider.expertise.map((area, i) => (
              <Reveal as="div" key={area.title} delay={i * 90}>
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
        <div className="shell py-section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="mb-6 inline-flex items-center gap-3 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
                <span className="h-px w-14 bg-gold" aria-hidden="true" />
                Selected Services
              </p>
              <h2 className="text-balance font-serif text-display-sm text-ivory">
                A considered range, delivered with care.
              </h2>
              <p className="mt-6 max-w-md font-sans leading-relaxed text-ivory/70">
                An illustrative selection. Your consultation shapes the right approach for
                your goals — on its own, or coordinated across the collective.
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
        </div>
      </section>

      {/* Connection to the collective */}
      <section className="shell py-section">
        <SectionHeading
          eyebrow="Considered Together"
          title="Part of something more complete."
          lede={`As part of 28, ${provider.name} connects with beauty, smile aesthetics, and advanced skin health — so your care can be coordinated into a single, personalized plan.`}
          className="mb-14 max-w-2xl"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {others.map((o) => (
            <Reveal key={o.slug}>
              <Link
                href={`/collective/${o.slug}`}
                className="group flex items-center justify-between gap-6 border border-line p-8 transition-colors duration-400 hover:border-gold"
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
            View Signature Experiences
          </Button>
          <Button href="/collective" variant="quiet">
            Back to the Collective &rarr;
          </Button>
        </div>

        {/* Gallery / testimonials placeholder — editable, no invented content */}
        <div className="mt-16 border border-dashed border-line p-8 text-center">
          <p className="font-sans text-sm leading-relaxed text-muted/80">
            <span className="font-medium text-charcoal">Gallery &amp; testimonials:</span>{' '}
            reserved for client-approved photography and verified client stories.
            No placeholder results or reviews are shown until real assets are supplied.
          </p>
        </div>
      </section>

      <CtaBanner
        eyebrow="Begin"
        headline={`Begin with ${provider.shortName}.`}
        body="Request a consultation and a member of our team will help you plan the right next step — with this provider, or across the collective."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Explore Membership', href: '/membership' }}
      />
    </>
  );
}
