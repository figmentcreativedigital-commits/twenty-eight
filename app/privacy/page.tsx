import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How 28 handles the information you share with us.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="bg-ivory pb-section pt-40 lg:pt-48">
      <Container size="narrow">
        <span className="eyebrow mb-5 flex items-center gap-3">
          <span className="hairline-gold" aria-hidden="true" />
          Privacy
        </span>
        <h1 className="text-display-md text-ink">Privacy Notice</h1>

        <div className="mt-6 border border-line bg-sand/40 px-5 py-4 font-sans text-sm leading-relaxed text-muted">
          Template pending client and legal review. This page is a starting point and must be
          replaced with a reviewed privacy policy before launch — including any obligations specific
          to health-adjacent services.
        </div>

        <div className="prose-28 mt-12 space-y-10">
          <Section title="What we collect">
            When you request a consultation or membership information, we collect the details you
            provide — such as your name, email address, phone number, areas of interest, and any
            context you choose to share.
          </Section>

          <Section title="How we use it">
            We use your information to respond to your request, coordinate care across the collective,
            and communicate with you about your inquiry. We do not sell your personal information.
          </Section>

          <Section title="How it's shared">
            Within 28, your information may be shared with the relevant provider or concierge to help
            with your request. We may use trusted service providers (for example, email delivery or
            scheduling tools) to operate the site and respond to you.
          </Section>

          <Section title="Your choices">
            You may request access to, correction of, or deletion of the information you&rsquo;ve shared
            by contacting us. You can opt out of non-essential communications at any time.
          </Section>

          <Section title="Contact">
            Questions about this notice can be directed to{' '}
            {site.contact.email ? (
              <a
                href={`mailto:${site.contact.email}`}
                className="text-charcoal underline decoration-gold underline-offset-4 transition-colors hover:text-gold-deep"
              >
                {site.contact.email}
              </a>
            ) : (
              'our concierge team'
            )}
            .
          </Section>
        </div>
      </Container>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <p className="mt-4 font-sans leading-relaxed text-muted">{children}</p>
    </div>
  );
}
