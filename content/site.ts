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
  fullName: '28 - Wellness & Aesthetics',
  tagline: 'Integrated Care. Personalized Wellness. Healthy Longevity.',
  descriptor: 'A luxury wellness and aesthetics collective in Tribeca, New York.',

  // Default SEO description (kept natural, not keyword-stuffed)
  metaDescription:
    '28 represents a new era in integrated health and wellness - a destination in Tribeca where preventive medicine, dentistry, aesthetic care, and personalized wellness come together under one roof.',

  // NEEDS CLIENT CONFIRMATION — full address, suite, zip, phone, email, hours.
  contact: {
    neighborhood: 'Tribeca, New York',
    // Placeholder — confirm exact street address before launch.
    addressLine: 'Tribeca, New York, NY',
    // Placeholder — confirm concierge phone.
    phone: '',
    phoneDisplay: 'Available upon request',
    // Placeholder — confirm concierge email.
    email: 'concierge@the28.com',
    hoursNote: 'By appointment', // NEEDS CLIENT CONFIRMATION
  },

  // NEEDS CLIENT CONFIRMATION — real handles/links. Empty links are
  // simply not rendered (no dead links).
  social: {
    instagram: '',
  },
} as const;

export type Site = typeof site;
