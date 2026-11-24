import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

type PhotoProps = {
  src: string;
  alt?: string;
  /** CSS aspect ratio, e.g. "4/5". */
  ratio: string;
  className?: string;
  /** Wrap in a scroll reveal. 'image' uses the settle-from-scale variant. */
  reveal?: false | 'default' | 'image';
  sizes?: string;
  priority?: boolean;
};

/**
 * Editorial image block: an overflow-hidden frame at a fixed aspect ratio
 * with the photo covering it. Matches the staging theme's image markup.
 */
export function Photo({
  src,
  alt = '',
  ratio,
  className,
  reveal = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
}: PhotoProps) {
  const img = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="h-full w-full object-cover"
    />
  );
  const classes = cn('relative overflow-hidden', className);
  const style = { aspectRatio: ratio };

  if (reveal) {
    return (
      <Reveal variant={reveal === 'image' ? 'image' : 'default'} className={classes} style={style}>
        {img}
      </Reveal>
    );
  }
  return (
    <div className={classes} style={style}>
      {img}
    </div>
  );
}
