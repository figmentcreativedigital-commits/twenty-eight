import Link from 'next/link';
import { cn } from '@/lib/utils';

type WordmarkProps = {
  className?: string;
  /** Show the small descriptor beneath the numerals. */
  withDescriptor?: boolean;
  tone?: 'ink' | 'ivory';
  href?: string;
};

/**
 * The 28 wordmark is rendered typographically in Cormorant Garamond —
 * a close match to the illuminated numeral sign in the brand references,
 * and infinitely crisp at any scale.
 */
export function Wordmark({
  className,
  withDescriptor = false,
  tone = 'ink',
  href = '/',
}: WordmarkProps) {
  return (
    <Link
      href={href}
      aria-label="28 — Wellness & Aesthetics, home"
      className={cn(
        'group inline-flex flex-col leading-none transition-colors duration-400',
        tone === 'ivory' ? 'text-ivory' : 'text-ink',
        className
      )}
    >
      <span className="font-serif text-[1.75rem] tracking-[0.02em]">28</span>
      {withDescriptor ? (
        <span
          className={cn(
            'mt-1 font-sans text-[0.55rem] uppercase tracking-eyebrow',
            tone === 'ivory' ? 'text-ivory/70' : 'text-muted'
          )}
        >
          Wellness &amp; Aesthetics
        </span>
      ) : null}
    </Link>
  );
}
