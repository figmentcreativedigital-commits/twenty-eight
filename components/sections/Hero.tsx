import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Cta = { label: string; href: string };

type HeroProps = {
  eyebrow?: string;
  /** Use \n to control line breaks in the display headline. */
  headline: string;
  /** One or more supporting paragraphs. */
  supporting?: string | string[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  imageAlt: string;
  imageSrc: string;
  /** CSS object-position for the background crop. */
  imagePosition?: string;
  /** full = 100svh (home, the experience); tall = 82svh (interior pages). */
  size?: 'full' | 'tall';
  /** Provider pages use the slightly smaller display size. */
  headlineSize?: 'xl' | 'lg';
};

export function Hero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  secondaryCta,
  imageAlt,
  imageSrc,
  imagePosition,
  size = 'tall',
  headlineSize = 'xl',
}: HeroProps) {
  const paragraphs = supporting
    ? Array.isArray(supporting)
      ? supporting
      : [supporting]
    : [];

  return (
    <section
      className={cn(
        'relative isolate flex items-end overflow-hidden',
        size === 'full' ? 'min-h-[100svh]' : 'min-h-[82svh]'
      )}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/25"
        />
      </div>

      <div className="mx-auto w-full max-w-shell px-6 pb-20 pt-40 sm:px-8 lg:px-12 lg:pb-28">
        <div className="max-w-5xl">
          {eyebrow ? (
            <p className="mb-6 font-sans text-[0.72rem] uppercase tracking-eyebrow text-ivory">
              {eyebrow}
            </p>
          ) : null}

          <h1
            className={cn(
              'text-balance font-serif text-ivory',
              headlineSize === 'lg' ? 'text-display-lg' : 'text-display-xl'
            )}
          >
            {headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {paragraphs.length > 0 ? (
            <div className="mt-8 max-w-xl space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-lg leading-relaxed text-ivory">
                  {p}
                </p>
              ))}
            </div>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
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
