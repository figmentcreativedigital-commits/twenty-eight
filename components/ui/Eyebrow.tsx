import { cn } from '@/lib/utils';

/** Bronze eyebrow label led by a short gold hairline. */
export function Eyebrow({
  children,
  className = 'mb-6 inline-flex',
}: {
  children: React.ReactNode;
  /** Spacing/display classes. Defaults to the most common pattern. */
  className?: string;
}) {
  return (
    <p className={cn('eyebrow items-center gap-3', className)}>
      <span className="hairline-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
