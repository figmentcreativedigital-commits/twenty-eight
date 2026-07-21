import Image from 'next/image';
import { cn } from '@/lib/utils';

type Tone = 'stone' | 'sand' | 'mushroom' | 'taupe' | 'charcoal';

type ImageFrameProps = {
  /** Required descriptive alt text / art-direction intent. */
  alt: string;
  /** aspect ratio as CSS value, e.g. "4/5", "16/10", "1/1". */
  ratio?: string;
  tone?: Tone;
  /** Real image source, when available. Falls back to placeholder if absent. */
  src?: string;
  /** Optional discreet caption (used for art-direction notes in the POC). */
  caption?: string;
  className?: string;
  rounded?: boolean;
  priority?: boolean;
};

const toneGradient: Record<Tone, string> = {
  stone: 'linear-gradient(150deg, #e4ddd6 0%, #d3cabf 55%, #c3b6ab 100%)',
  sand: 'linear-gradient(150deg, #f0ebe4 0%, #e5ddd3 55%, #d8cfc4 100%)',
  mushroom: 'linear-gradient(150deg, #cfc3b7 0%, #c3b6ab 55%, #b3a498 100%)',
  taupe: 'linear-gradient(150deg, #c8bdb2 0%, #b8aca3 55%, #a79a8f 100%)',
  charcoal: 'linear-gradient(150deg, #55504b 0%, #433f3b 60%, #35322f 100%)',
};

export function ImageFrame({
  alt,
  ratio = '4/5',
  tone = 'stone',
  src,
  caption,
  className,
  rounded = false,
  priority = false,
}: ImageFrameProps) {
  const isDark = tone === 'charcoal';

  return (
    <figure
      className={cn(
        'relative overflow-hidden bg-stone',
        rounded ? 'rounded-card' : '',
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0"
          style={{ backgroundImage: toneGradient[tone] }}
        >
          {/* subtle vignette + grain for a photographic feel */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.55]"
            style={{
              background:
                'radial-gradient(120% 90% at 30% 20%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(100% 100% at 80% 100%, rgba(61,58,55,0.18), transparent 60%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 mix-blend-overlay opacity-[0.12]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          {/* discreet 28 monogram watermark */}
          <span
            aria-hidden="true"
            className={cn(
              'absolute inset-0 flex items-center justify-center font-serif text-[clamp(3rem,8vw,6rem)] leading-none',
              isDark ? 'text-ivory/10' : 'text-ink/[0.06]'
            )}
          >
            28
          </span>
        </div>
      )}

      {caption ? (
        <figcaption
          className={cn(
            'absolute bottom-0 left-0 right-0 px-4 py-3 font-sans text-[0.62rem] leading-snug tracking-wide',
            isDark ? 'text-ivory/70' : 'text-ink/45'
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
