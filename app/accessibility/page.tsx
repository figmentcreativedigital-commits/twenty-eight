import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Our commitment to an accessible experience at 28.',
  alternates: { canonical: '/accessibility' },
  robots: { index: false, follow: true },
};

export default function AccessibilityPage() {
  return (
    <section className="bg-ivory pb-section pt-40 lg:pt-48">
      <Container size="narrow">
        <span className="eyebrow mb-5 flex items-center gap-3">
          <span className="hairline-gold" aria-hidden="true" />
          Accessibility
        </span>
        <h1 className="text-display-md text-ink">Accessibility Statement</h1>

        <div className="mt-6 border border-line bg-sand/40 px-5 py-4 font-sans text-sm leading-relaxed text-muted">
          Template pending client review. The site is built with accessibility in mind; this
          statement should be confirmed and kept current as content is finalized.
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="font-serif text-2xl text-ink">Our approach</h2>
            <p className="mt-4 font-sans leading-relaxed text-muted">
              We want everyone to be able to explore 28 comfortably. The site is designed to follow
              recognized accessibility practices, including semantic structure, keyboard navigation,
              visible focus states, respect for reduced-motion preferences, and considered color
              contrast.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink">Ongoing work</h2>
            <p className="mt-4 font-sans leading-relaxed text-muted">
              Accessibility is an ongoing effort. As we add photography and new content, we continue
              to review the experience against current standards.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ink">Feedback</h2>
            <p className="mt-4 font-sans leading-relaxed text-muted">
              If you encounter any difficulty using this site, please let us know
              {site.contact.email ? (
                <>
                  {' '}at{' '}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-charcoal underline decoration-gold underline-offset-4 transition-colors hover:text-gold-deep"
                  >
                    {site.contact.email}
                  </a>
                </>
              ) : (
                ' by contacting our concierge team'
              )}{' '}
              and we&rsquo;ll do our best to help.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
