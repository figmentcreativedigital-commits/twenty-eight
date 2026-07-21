'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { primaryNav, providerNav } from '@/content/navigation';
import { Wordmark } from './Wordmark';
import { cn } from '@/lib/utils';
import { track } from '@/lib/analytics';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Body scroll lock + Escape + focus the close button while the drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const linkTone = solid ? 'text-charcoal' : 'text-ivory';

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Row 1 — announcement, collapses on scroll */}
      <div
        className={cn(
          'overflow-hidden bg-ink transition-all duration-600 ease-editorial',
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        )}
      >
        <p className="mx-auto max-w-shell px-6 py-2.5 text-center font-sans text-[0.66rem] uppercase tracking-eyebrow text-ivory">
          A new destination for beauty, wellness &amp; longevity — Tribeca, New York
        </p>
      </div>

      {/* Row 2 — navigation */}
      <div
        className={cn(
          'transition-all duration-400 ease-editorial',
          solid
            ? 'border-b border-line bg-ivory/95 backdrop-blur-md shadow-[0_1px_30px_-20px_rgba(61,58,55,0.6)]'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <Wordmark tone={solid ? 'ink' : 'ivory'} />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative font-sans text-[0.78rem] uppercase tracking-wide transition-colors duration-400 hover:text-gold',
                  linkTone,
                  pathname === item.href && 'text-gold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/consultation"
              onClick={() => track('cta_click', { location: 'header', label: 'Book a Consultation' })}
              className={cn(
                'hidden border px-6 py-3 font-sans text-[0.74rem] uppercase tracking-wide transition-all duration-400 sm:inline-flex',
                solid
                  ? 'border-charcoal/40 text-charcoal hover:border-gold-deep hover:text-gold-deep'
                  : 'border-ivory/50 text-ivory hover:border-gold hover:text-gold'
              )}
            >
              Book a Consultation
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                'flex h-10 w-10 items-center justify-center lg:hidden',
                linkTone
              )}
            >
              <span className="relative block h-3 w-6" aria-hidden="true">
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-current transition-all duration-400 ease-editorial',
                    menuOpen ? 'top-1/2 rotate-45' : 'top-0'
                  )}
                />
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-400 ease-editorial',
                    menuOpen ? 'bottom-1/2 -rotate-45' : ''
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!menuOpen}
        className="fixed inset-0 top-0 z-40 flex flex-col bg-ivory lg:hidden"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <Wordmark tone="ink" />
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-charcoal"
          >
            <span className="relative block h-4 w-4" aria-hidden="true">
              <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col overflow-y-auto px-6 py-8"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line py-4 font-serif text-3xl text-ink transition-colors duration-400 hover:text-gold-deep"
            >
              {item.label}
            </Link>
          ))}

          <p className="eyebrow mt-8 mb-3">The Collective</p>
          {providerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 font-sans text-sm uppercase tracking-wide text-muted transition-colors duration-400 hover:text-gold-deep"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/consultation"
            className="mt-10 inline-flex items-center justify-center bg-ink px-8 py-4 font-sans text-[0.8rem] uppercase tracking-wide text-ivory"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
