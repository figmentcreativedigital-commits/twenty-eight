import Image from 'next/image';
import { Monogram } from '@/components/ui/Monogram';
import { Reveal } from '@/components/ui/Reveal';
import type { Provider } from '@/content/providers';
import { cn } from '@/lib/utils';

/**
 * Provider portrait, matching the landing page's Collective cards:
 * photo, 25% warm multiply tint, and the provider's monogram.
 * Providers without a designed monogram show their initials in its place.
 */
export function ProviderPortrait({
  provider,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  className,
  reveal = false,
  zoomOnHover = false,
}: {
  provider: Provider;
  sizes?: string;
  className?: string;
  reveal?: false | 'default' | 'image';
  /** Gentle zoom when the surrounding `.group` link is hovered. */
  zoomOnHover?: boolean;
}) {
  const { portrait } = provider;
  const layers = (
    <div className="absolute inset-0 [container-type:inline-size]">
      <Image
        src={portrait.src}
        alt={portrait.alt}
        fill
        sizes={sizes}
        className={cn(
          'object-cover',
          zoomOnHover && 'transition-transform duration-900 ease-editorial group-hover:scale-[1.03]'
        )}
        style={portrait.position ? { objectPosition: portrait.position } : undefined}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-tint opacity-25 mix-blend-multiply"
      />
      {provider.monogram ? (
        <Monogram
          id={provider.monogram}
          className="absolute bottom-[4%] right-[4.5%] h-[21%] w-auto text-white [filter:drop-shadow(0_1px_10px_rgb(43_41_38/0.25))]"
        />
      ) : provider.initials ? (
        <span
          aria-hidden="true"
          className="absolute bottom-[2.5%] right-[5%] font-serif text-[24cqw] italic leading-none text-white [filter:drop-shadow(0_1px_10px_rgb(43_41_38/0.3))]"
        >
          {provider.initials}
        </span>
      ) : null}
    </div>
  );

  const classes = cn('relative overflow-hidden bg-stone', className);
  const style = { aspectRatio: '4/5' };

  if (reveal) {
    return (
      <Reveal variant={reveal === 'image' ? 'image' : 'default'} className={classes} style={style}>
        {layers}
      </Reveal>
    );
  }
  return (
    <div className={classes} style={style}>
      {layers}
    </div>
  );
}
