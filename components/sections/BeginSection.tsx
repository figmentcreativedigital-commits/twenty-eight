import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

type Cta = { label: string; href: string };

type BeginSectionProps = {
  eyebrow?: string;
  headline: string;
  body?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  /** 'plain' sits on ivory; 'sand' wraps it in the sand band (provider pages). */
  tone?: 'plain' | 'sand';
};

/** Light, centered closing call to action ("Begin Your Journey"). */
export function BeginSection({
  eyebrow = 'Begin Your Journey',
  headline,
  body,
  primaryCta,
  secondaryCta,
  tone = 'plain',
}: BeginSectionProps) {
  const inner = (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mx-auto max-w-2xl text-balance font-serif text-display-md text-ink">
        {headline}
      </h2>
      {body ? (
        <p className="mx-auto mt-6 max-w-xl font-sans leading-relaxed text-muted">{body}</p>
      ) : null}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button
          href={primaryCta.href}
          variant="secondary"
          trackEvent="cta_click"
          trackParams={{ location: 'begin', label: primaryCta.label }}
        >
          {primaryCta.label}
        </Button>
        {secondaryCta ? (
          <Button href={secondaryCta.href} variant="quiet">
            {secondaryCta.label}
          </Button>
        ) : null}
      </div>
    </>
  );

  if (tone === 'sand') {
    return (
      <section className="bg-sand/50">
        <Reveal className="shell py-section text-center">{inner}</Reveal>
      </section>
    );
  }

  return (
    <Reveal as="section" className="shell py-section text-center">
      {inner}
    </Reveal>
  );
}
