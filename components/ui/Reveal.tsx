'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger in ms. */
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
};

/**
 * Fades content up when it enters the viewport, once.
 * Hidden state lives in globals.css ([data-reveal]); a <noscript> override
 * in the layout guarantees content is visible without JavaScript, and the
 * whole effect is disabled under prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      el.dataset.revealed = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset.revealed = 'true';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cast to a generic element type so the polymorphic `as` prop can accept an
  // HTMLElement ref without TS resolving it to a specific (e.g. SVG) element.
  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      data-reveal=""
      className={cn(className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
