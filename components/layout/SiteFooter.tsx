import Link from 'next/link';
import { footerNav } from '@/content/navigation';
import { site } from '@/content/site';
import { Wordmark } from './Wordmark';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-shell px-6 py-section-sm sm:px-8 lg:px-12">
        {/* Top — brand + invitation */}
        <div className="flex flex-col gap-10 border-b border-ivory/10 pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <Wordmark variant="lockup" tone="ivory" asLink={false} className="h-40" />
            <p className="mt-8 font-serif text-2xl leading-snug text-ivory/90 md:text-3xl">
              {site.tagline}
            </p>
          </div>
          <Link
            href="/consultation"
            className="inline-flex w-fit items-center gap-3 border border-ivory/40 px-8 py-4 font-sans text-[0.78rem] uppercase tracking-wide text-ivory transition-colors duration-400 hover:border-gold hover:text-gold"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Middle — nav + contact */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className="mb-5 font-sans text-[0.68rem] uppercase tracking-eyebrow text-ivory/50">
                {group.heading}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-ivory/80 transition-colors duration-400 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="mb-5 font-sans text-[0.68rem] uppercase tracking-eyebrow text-ivory/50">
              Visit
            </p>
            <address className="space-y-2 font-sans text-sm not-italic text-ivory/80">
              <p>{site.contact.neighborhood}</p>
              <p>{site.contact.hoursNote}</p>
              {site.contact.email ? (
                <p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="transition-colors duration-400 hover:text-gold"
                  >
                    {site.contact.email}
                  </a>
                </p>
              ) : null}
              {site.contact.phone ? (
                <p>
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="transition-colors duration-400 hover:text-gold"
                  >
                    {site.contact.phoneDisplay}
                  </a>
                </p>
              ) : null}
            </address>
          </div>
        </div>

        {/* Bottom — legal */}
        <div className="flex flex-col gap-4 border-t border-ivory/10 pt-8 text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs">
            © {year} 28 — Wellness &amp; Aesthetics. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs">
            <Link href="/privacy" className="transition-colors duration-400 hover:text-gold">
              Privacy
            </Link>
            <Link href="/accessibility" className="transition-colors duration-400 hover:text-gold">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
