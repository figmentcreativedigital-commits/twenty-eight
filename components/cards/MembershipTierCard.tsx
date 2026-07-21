'use client';

import Link from 'next/link';
import { formatCurrency, cn } from '@/lib/utils';
import { track } from '@/lib/analytics';
import type { MembershipTier } from '@/content/membership';

export function MembershipTierCard({ tier }: { tier: MembershipTier }) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col border p-8 transition-transform duration-600 ease-editorial md:p-10',
        tier.featured
          ? 'border-gold bg-sand/40 lg:-translate-y-3'
          : 'border-line bg-ivory'
      )}
    >
      {tier.featured ? (
        <span className="absolute -top-px right-6 -translate-y-1/2 bg-gold px-3 py-1 font-sans text-[0.6rem] uppercase tracking-eyebrow text-ivory">
          Most chosen
        </span>
      ) : null}

      <p className="eyebrow">{tier.name}</p>
      <p className="mt-4 font-serif text-2xl text-ink">{tier.positioning}</p>

      <div className="mt-7 flex items-baseline gap-3 border-y border-line py-6">
        <span className="font-serif text-4xl text-ink">
          {formatCurrency(tier.balance)}
        </span>
        <span className="font-sans text-sm text-muted">account balance</span>
      </div>
      <p className="mt-4 font-sans text-sm text-gold-deep">
        {tier.savingsPct}% preferred savings on services &amp; retail
      </p>

      <ul className="mt-7 flex-1 space-y-3">
        {tier.benefits.map((b) => (
          <li key={b} className="flex gap-3 font-sans text-sm leading-relaxed text-charcoal">
            <span aria-hidden="true" className="mt-2 h-px w-3 flex-shrink-0 bg-gold" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/consultation?interest=Membership"
        onClick={() => track('membership_interest', { tier: tier.name })}
        className={cn(
          'mt-9 inline-flex items-center justify-center px-6 py-4 font-sans text-[0.76rem] uppercase tracking-wide transition-all duration-400',
          tier.featured
            ? 'bg-ink text-ivory hover:bg-charcoal'
            : 'border border-charcoal/40 text-charcoal hover:border-gold-deep hover:text-gold-deep'
        )}
      >
        Request Information
      </Link>

      {tier.provisional ? (
        <p className="mt-4 font-sans text-[0.65rem] italic leading-snug text-muted/70">
          Concept terms — subject to confirmation.
        </p>
      ) : null}
    </div>
  );
}
