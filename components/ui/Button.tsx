'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { track, type AnalyticsEvent } from '@/lib/analytics';

type Variant = 'primary' | 'secondary' | 'ghost' | 'quiet';

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Fire a centralized analytics event on click. */
  trackEvent?: AnalyticsEvent;
  trackParams?: Record<string, string | number | boolean>;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ActionButtonProps = CommonProps & {
  href?: never;
  external?: never;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

const base =
  'inline-flex items-center justify-center gap-2.5 font-sans text-[0.8rem] uppercase tracking-wide transition-all duration-400 ease-editorial focus-visible:outline-gold-deep disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-ivory px-8 py-4 hover:bg-charcoal hover:-translate-y-px',
  secondary:
    'border border-charcoal/40 text-charcoal px-8 py-4 hover:border-gold-deep hover:text-gold-deep',
  ghost:
    'border border-ivory/50 text-ivory px-8 py-4 hover:border-gold hover:text-gold',
  quiet: 'link-underline !text-[0.78rem]',
};

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, trackEvent, trackParams } = props;
  const classes = cn(base, variants[variant], className);

  const handleTrack = () => {
    if (trackEvent) track(trackEvent, trackParams);
  };

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={handleTrack}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={handleTrack}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={() => {
        handleTrack();
        props.onClick?.();
      }}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
