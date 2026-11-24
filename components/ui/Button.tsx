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

// Variants map 1:1 to the .btn-* classes in globals.css (shared with the
// WordPress build) so both sites render identical buttons.
const base = 'disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  quiet: 'btn-quiet',
};

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', className, trackEvent, trackParams } = props;
  const classes = cn(variants[variant], base, className);

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
