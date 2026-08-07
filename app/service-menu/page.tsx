import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { serviceMenuIntro, serviceMenus } from '@/content/services';

export const metadata: Metadata = {
  title: 'Service Menu',
  description:
    'The full range of treatments at 28 — beauty and skin, aesthetic and wellness medicine, and smile aesthetics — organised by provider.',
  alternates: { canonical: '/service-menu' },
};

export default function ServiceMenuPage() {
  return (
    <>
      <Hero
        eyebrow={serviceMenuIntro.eyebrow}
        headline={'Every service,\nacross the collective.'}
        supporting={serviceMenuIntro.lede}
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'The Collective', href: '/collective' }}
        imageAlt="An editorial arrangement of refined treatment tools and materials across the three disciplines of 28."
        imageCaption="ART DIRECTION: Editorial grouping — treatment tools, ceramics, skincare textures on linen."
        imageSrc="/images/28-placeholder-g.jpeg"
        size="tall"
      />

      {/* Provider jump nav — sticks beneath the header on scroll */}
      <nav
        aria-label="Providers"
        className="sticky top-[76px] z-30 border-b border-line bg-ivory/95 backdrop-blur-md"
      >
        <div className="shell flex gap-6 overflow-x-auto py-4 sm:gap-10">
          {serviceMenus.map((menu) => (
            <a
              key={menu.slug}
              href={`#${menu.slug}`}
              className="whitespace-nowrap font-sans text-[0.72rem] uppercase tracking-eyebrow text-muted transition-colors duration-400 hover:text-gold-deep"
            >
              {menu.shortName}
            </a>
          ))}
        </div>
      </nav>

      {/* Pricing note */}
      <section className="shell py-section-sm">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="hairline-gold mx-auto mb-6 block" aria-hidden="true" />
          <p className="font-sans leading-relaxed text-muted">
            {serviceMenuIntro.pricingNote}
          </p>
        </Reveal>
      </section>

      {serviceMenus.map((menu, mi) => (
        <section
          key={menu.slug}
          id={menu.slug}
          className={mi % 2 === 1 ? 'bg-sand/40 scroll-mt-32' : 'scroll-mt-32'}
        >
          <div className="shell py-section">
            {/* Provider header */}
            <Reveal className="mb-16 max-w-3xl">
              <p className="eyebrow mb-5 inline-flex items-center gap-3">
                <span className="hairline-gold" aria-hidden="true" />
                {menu.eyebrow}
              </p>
              <h2 className="text-balance font-serif text-display-md text-ink">
                {menu.name}
              </h2>
              <p className="mt-6 max-w-prose font-sans text-lg leading-relaxed text-muted">
                {menu.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button href={`/booking/${menu.slug}`} variant="secondary">
                  Book with {menu.shortName}
                </Button>
                <Button href={`/collective/${menu.slug}`} variant="quiet">
                  About {menu.shortName} &rarr;
                </Button>
              </div>
            </Reveal>

            {/* Groups */}
            <div className="space-y-16">
              {menu.groups.map((group, gi) => (
                <Reveal as="div" key={group.title} delay={gi * 60}>
                  <div className="mb-8 border-t border-line pt-8">
                    <h3 className="font-serif text-2xl text-ink md:text-[1.7rem]">
                      {group.title}
                    </h3>
                    {group.intro ? (
                      <p className="mt-3 max-w-prose font-sans text-sm leading-relaxed text-muted">
                        {group.intro}
                      </p>
                    ) : null}
                  </div>

                  {group.items ? (
                    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                      {group.items.map((item) => (
                        <div key={item.name}>
                          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                            <h4 className="font-serif text-xl text-ink">{item.name}</h4>
                            {item.duration ? (
                              <span className="font-sans text-[0.68rem] uppercase tracking-wide text-gold-deep">
                                {item.duration}
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-3 max-w-prose font-sans text-sm leading-relaxed text-muted">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {group.simpleItems ? (
                    <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                      {group.simpleItems.map((s) => (
                        <li
                          key={s}
                          className="flex items-baseline gap-3 font-sans text-sm text-charcoal"
                        >
                          <span
                            aria-hidden="true"
                            className="h-px w-3 flex-shrink-0 translate-y-[-0.35em] bg-gold"
                          />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>
              ))}
            </div>

            {menu.gapNote ? (
              <p className="mt-12 max-w-prose font-sans text-sm italic leading-relaxed text-muted/80">
                {menu.gapNote}
              </p>
            ) : null}
          </div>
        </section>
      ))}

      {/* Cross-provider note */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 inline-flex items-center gap-3">
            <span className="hairline-gold" aria-hidden="true" />
            Considered Together
          </p>
          <h2 className="text-balance font-serif text-display-sm text-ink">
            Any service à la carte — or combined into one plan.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">
            Every treatment above can be booked on its own. They can also be
            coordinated across providers into a single personalised plan, with a
            concierge to sequence the steps.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link href="/signature-experiences" className="link-underline">
              View Signature Experiences
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        eyebrow="Begin"
        headline="Not sure where to start?"
        body="Request a consultation and a member of our team will help match the right treatment — with one provider, or across the collective."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Explore the Collective', href: '/collective' }}
      />
    </>
  );
}
