/**
 * ────────────────────────────────────────────────────────────────
 * 28 — Global site content
 * ────────────────────────────────────────────────────────────────
 * This file is the single editing point for brand-level copy and
 * business details. Fields flagged `NEEDS CLIENT CONFIRMATION` use
 * placeholders and MUST be verified before launch — do not present
 * as fact. See CLIENT-CHECKLIST in README.md.
 */

export const site = {
  name: '28',
  fullName: '28 — Wellness & Aesthetics',
  tagline: 'Luxury health. Elevated beauty. One destination.',
  descriptor: 'A luxury wellness and aesthetics collective in Tribeca, New York.',

  // Default SEO description (kept natural, not keyword-stuffed)
  metaDescription:
    'In the heart of Tribeca, 28 unites beauty expertise, smile aesthetics, and advanced skin health in one luxury wellness collective — a considered approach to looking and feeling exceptional.',

  // NEEDS CLIENT CONFIRMATION — full address, suite, zip, phone, email, hours.
  contact: {
    neighborhood: 'Tribeca, New York',
    // Placeholder — confirm exact street address before launch.
    addressLine: 'Tribeca, New York, NY',
    // Placeholder — confirm concierge phone.
    phone: '',
    phoneDisplay: 'Available upon request',
    // Placeholder — confirm concierge email.
    email: 'concierge@28tribeca.com',
    hoursNote: 'By appointment', // NEEDS CLIENT CONFIRMATION
  },

  // NEEDS CLIENT CONFIRMATION — real handles/links. Empty links are
  // simply not rendered (no dead links).
  social: {
    instagram: '',
  },
} as const;

export type Site = typeof site;
