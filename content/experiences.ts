/**
 * Signature Experiences — curated, cross-provider programs.
 * These are personalized experiences coordinated across the collective,
 * NOT fixed discount bundles. No pricing, no promised outcomes.
 * Discipline combinations are illustrative and confirmed at consultation.
 */

export type Experience = {
  slug: string;
  name: string;
  /** One-line editorial summary. */
  summary: string;
  /** Fuller description. */
  description: string;
  /** Who it is for. */
  forWhom: string;
  /** Disciplines that may be involved (illustrative). */
  disciplines: string[];
  /** How the consultation approach works. */
  approach: string;
  /** Editorial photo for this experience's image slot. */
  image: string;
};

export const experiences: Experience[] = [
  {
    slug: 'signature-28-experience',
    image: '/images/28-placeholder-c.jpeg',
    name: 'The Signature 28 Experience',
    summary:
      'A comprehensive consultation across the collective, resulting in a personalized roadmap.',
    description:
      'A complete introduction to 28 — a considered consultation across beauty, smile aesthetics, advanced skin health, and wellness that concludes with a personalized roadmap designed around your goals.',
    forWhom:
      'Clients who want to understand the full picture before deciding where to begin.',
    disciplines: ['Beauty & Skin', 'Smile Aesthetics', 'Advanced Skin Health', 'Wellness'],
    approach:
      'One coordinated consultation. One point of contact. A written roadmap you can act on at your own pace.',
  },
  {
    slug: 'executive-refresh',
    image: '/images/28-placeholder-e.jpeg',
    name: 'The Executive Refresh',
    summary:
      'A discreet, efficient experience for looking polished, rested, and confident.',
    description:
      'A refined, time-considerate program for clients who want to look polished, rested, and confident without appearing overdone — coordinated to fit a demanding schedule.',
    forWhom:
      'Executives and professionals who value discretion and efficiency.',
    disciplines: ['Advanced Skin Health', 'Smile Aesthetics', 'Aesthetic Medicine'],
    approach:
      'A streamlined plan built around minimal disruption, with appointments coordinated across providers.',
  },
  {
    slug: 'wedding-edit',
    image: '/images/28-placeholder-a.jpeg',
    name: 'The Wedding Edit',
    summary:
      'A calm, curated pre-event experience for glowing skin, a confident smile, and refined beauty.',
    description:
      'A curated pre-event experience designed to support glowing skin, a confident smile, refined beauty, and a calm, elevated preparation process — sequenced thoughtfully in the months and weeks before the day.',
    forWhom:
      'Clients preparing for a wedding or milestone event.',
    disciplines: ['Beauty & Skin', 'Smile Aesthetics', 'Advanced Skin Health'],
    approach:
      'A timeline-based plan that begins early and builds toward the event with unhurried confidence.',
  },
  {
    slug: 'longevity-collection',
    image: '/images/28-placeholder-b.jpeg',
    name: 'The Longevity Collection',
    summary:
      'An ongoing plan centered on skin health, peptides, regenerative wellness, and maintenance.',
    description:
      'An ongoing care experience focused on advanced skin health, peptides, regenerative wellness, and aesthetic maintenance over time — a long-term relationship rather than a single visit.',
    forWhom:
      'Clients investing in prevention and long-term aesthetic maintenance.',
    disciplines: ['Advanced Skin Health', 'Peptides & Regenerative Wellness', 'Wellness'],
    approach:
      'A maintenance rhythm reviewed and refined over the year, coordinated by your concierge.',
  },
  {
    slug: 'smile-skin-transformation',
    image: '/images/28-placeholder-h.jpeg',
    name: 'The Smile + Skin Transformation',
    summary:
      'A coordinated experience combining smile enhancement and skin refinement.',
    description:
      'A cross-provider experience that brings together smile aesthetics and skin enhancement for clients seeking a more complete, refreshed appearance — planned so the two work in harmony.',
    forWhom:
      'Clients ready for a more complete refresh across smile and skin.',
    disciplines: ['Smile Aesthetics', 'Advanced Skin Health', 'Beauty & Skin'],
    approach:
      'A joint plan across dentistry and skin health, sequenced for comfort and results.',
  },
  {
    slug: 'custom-concierge-plan',
    image: '/images/28-placeholder-f.jpeg',
    name: 'Custom Concierge Plan',
    summary:
      'A bespoke path built around your goals, schedule, lifestyle, and desired level of care.',
    description:
      'A bespoke path built entirely around the individual — goals, timeline, lifestyle, and preferred level of transformation — drawing on any combination of the collective’s expertise.',
    forWhom:
      'Clients whose goals don’t fit a single program.',
    disciplines: ['Beauty & Skin', 'Smile Aesthetics', 'Advanced Skin Health', 'Wellness'],
    approach:
      'Entirely personalized, shaped in conversation and refined as your priorities evolve.',
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
