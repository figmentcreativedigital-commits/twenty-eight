import { ImageFrame } from '@/components/ui/ImageFrame';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Cta = { label: string; href: string };

/** Subtle dual shadow — a crisp edge plus a soft halo — keeps white display
 *  type legible where it crosses the brightest parts of a photograph. */
const heroTextShadow =
  '0 1px 2px rgba(20,18,16,0.38), 0 4px 44px rgba(20,18,16,0.32)';

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
        {/* Legibility system — tuned for white type over bright photography.
            Three cooperating layers keep the nav, copy, and buttons readable
            without visibly darkening the photograph. */}
        {/* 1) Even tint — tames near-white images across the whole frame. */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink/[0.35]" />
        {/* 2) Bottom anchor — seats the headline, supporting copy, and buttons;
               carries weight up through the middle where the display type sits. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/10"
        />
        {/* 3) Top veil — seats the fixed navigation on every hero page. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-ink/85 via-ink/50 to-transparent"
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
            <p
              className="mb-6 font-sans text-[0.72rem] uppercase tracking-eyebrow text-ivory"
              style={{ textShadow: heroTextShadow }}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1
            className="text-balance font-serif text-display-xl text-ivory"
            style={{ textShadow: heroTextShadow }}
          >
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
              style={{ textShadow: heroTextShadow }}
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
