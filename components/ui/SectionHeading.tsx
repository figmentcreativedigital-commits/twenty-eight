import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  /** Heading level for correct document outline. */
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  size?: 'md' | 'lg';
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  as: Tag = 'h2',
  className,
  size = 'md',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow ? (
        <span className="eyebrow mb-5 flex items-center gap-3">
          <span className="hairline-gold" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={cn(
          'text-balance',
          size === 'lg' ? 'text-display-lg' : 'text-display-md'
        )}
      >
        {title}
      </Tag>
      {lede ? (
        <p
          className={cn(
            'lede mt-6 max-w-prose',
            align === 'center' && 'mx-auto'
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
