import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

type Cta = { label: string; href: string };

type CtaBannerProps = {
  eyebrow?: string;
  headline: string;
  body?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export function CtaBanner({
  eyebrow,
  headline,
  body,
  primaryCta,
  secondaryCta,
}: CtaBannerProps) {
  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-4xl px-6 py-section text-center sm:px-8">
        <Reveal>
          {eyebrow ? (
            <p className="mb-6 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance font-serif text-display-md text-ivory">
            {headline}
          </h2>
          {body ? (
            <p className="mx-auto mt-7 max-w-xl font-sans leading-relaxed text-ivory/80">
              {body}
            </p>
          ) : null}
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={primaryCta.href}
              variant="primary"
              className="!bg-ivory !text-ink hover:!bg-gold hover:!text-ink"
              trackEvent="cta_click"
              trackParams={{ location: 'cta_banner', label: primaryCta.label }}
            >
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="ghost"
                trackEvent="cta_click"
                trackParams={{ location: 'cta_banner', label: secondaryCta.label }}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
