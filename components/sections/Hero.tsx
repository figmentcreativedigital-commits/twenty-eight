import { ImageFrame } from '@/components/ui/ImageFrame';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Cta = { label: string; href: string };

type HeroProps = {
  eyebrow?: string;
  /** Use \n to control line breaks in the display headline. */
  headline: string;
  supporting?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  imageAlt: string;
  imageCaption?: string;
  imageSrc?: string;
  /** Compact hero for interior pages. */
  size?: 'full' | 'tall' | 'compact';
  align?: 'left' | 'center';
};

export function Hero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  secondaryCta,
  imageAlt,
  imageCaption,
  imageSrc,
  size = 'full',
  align = 'left',
}: HeroProps) {
  const minH =
    size === 'full'
      ? 'min-h-[100svh]'
      : size === 'tall'
        ? 'min-h-[82svh]'
        : 'min-h-[64svh]';

  return (
    <section className={cn('relative isolate flex items-end overflow-hidden', minH)}>
      {/* Background image slot */}
      <div className="absolute inset-0 -z-10">
        <ImageFrame
          alt={imageAlt}
          caption={imageCaption}
          src={imageSrc}
          tone="charcoal"
          ratio="16/10"
          className="h-full w-full"
          priority
        />
        {/* legibility scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/25"
        />
      </div>

      <div className="mx-auto w-full max-w-shell px-6 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28">
        <div
          className={cn(
            'max-w-3xl',
            align === 'center' && 'mx-auto text-center'
          )}
        >
          {eyebrow ? (
            <p className="mb-6 font-sans text-[0.72rem] uppercase tracking-eyebrow text-ivory">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-balance font-serif text-display-xl text-ivory">
            {headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {supporting ? (
            <p
              className={cn(
                'mt-8 max-w-xl font-sans text-lg leading-relaxed text-ivory',
                align === 'center' && 'mx-auto'
              )}
            >
              {supporting}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                'mt-11 flex flex-col gap-4 sm:flex-row sm:items-center',
                align === 'center' && 'sm:justify-center'
              )}
            >
              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  variant="primary"
                  trackEvent="cta_click"
                  trackParams={{ location: 'hero', label: primaryCta.label }}
                >
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  variant="ghost"
                  trackEvent="cta_click"
                  trackParams={{ location: 'hero', label: secondaryCta.label }}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
