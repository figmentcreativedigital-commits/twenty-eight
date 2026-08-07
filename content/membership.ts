/**
 * ────────────────────────────────────────────────────────────────
 * Membership
 * ────────────────────────────────────────────────────────────────
 * PROVISIONAL DATA — the tier structure below reflects the client's
 * initial concept (funded-balance model with escalating benefits).
 * Balances, savings percentages, and benefits are NOT final and must
 * be reviewed for accuracy and legal/financial compliance before
 * publication. `provisional: true` on each tier drives an on-page
 * "concept" note. See CLIENT-CHECKLIST in README.md.
 *
 * Deliberately framed as private access and annual planning — never
 * a coupon or loyalty program.
 */

export const membershipIntro = {
  eyebrow: 'Membership',
  headline: 'A private membership, considered like an investment.',
  lede:
    'Membership at 28 is a relationship, not a transaction — an annual commitment to your own care, with preferred access across the collective and a concierge to coordinate it all.',
  philosophy: [
    '28 was created for clients who invest in their long-term wellness and aesthetic journey rather than simply booking individual appointments.',
    'Members fund a personal 28 account they can apply toward any service or retail product across the collective. Depending on tier, members receive preferred benefits, priority access, and a personalized annual roadmap — coordinated by a single point of contact.',
  ],
};

export const howItWorks: { step: string; title: string; description: string }[] = [
  {
    step: '01',
    title: 'Fund your 28 account',
    description:
      'Choose a membership tier and fund a personal account balance to apply toward services and retail across the collective.',
  },
  {
    step: '02',
    title: 'Plan your year',
    description:
      'Your concierge helps build a personalized roadmap across smile, skin, aesthetics, beauty, and wellness.',
  },
  {
    step: '03',
    title: 'Enjoy preferred access',
    description:
      'Members receive priority scheduling, tier benefits, and streamlined coordination between providers.',
  },
];

export type MembershipTier = {
  slug: string;
  name: string;
  /** Funded account balance, in whole dollars. PROVISIONAL. */
  balance: number;
  /** Member savings on services and products, as a percentage. PROVISIONAL. */
  savingsPct: number;
  /** Short positioning line. */
  positioning: string;
  /** Benefit lines shown in the comparison. */
  benefits: string[];
  /** Whether these terms are still a concept pending confirmation. */
  provisional: boolean;
  featured?: boolean;
};

export const membershipTiers: MembershipTier[] = [
  {
    slug: 'silver',
    name: 'Silver',
    balance: 2000,
    savingsPct: 10,
    positioning: 'An elegant introduction to membership.',
    benefits: [
      'Funded 28 account balance',
      'Preferred savings on services and retail',
      'Priority scheduling across the collective',
      'Personalized annual planning',
    ],
    provisional: true,
  },
  {
    slug: 'gold',
    name: 'Gold',
    balance: 5000,
    savingsPct: 20,
    positioning: 'Deeper access and greater value.',
    benefits: [
      'Funded 28 account balance',
      'Enhanced savings on services and retail',
      'Priority scheduling across the collective',
      'Personalized annual planning',
      'Concierge coordination between providers',
    ],
    provisional: true,
    featured: true,
  },
  {
    slug: 'platinum',
    name: 'Platinum',
    balance: 10000,
    savingsPct: 30,
    positioning: 'The fullest expression of the 28 experience.',
    benefits: [
      'Funded 28 account balance',
      'Highest savings on services and retail',
      'Priority scheduling across the collective',
      'Personalized annual planning',
      'Dedicated concierge coordination',
      'Complimentary signature Haute Couture Facial',
      'Invitations to member-only previews and events',
    ],
    provisional: true,
  },
];

export const membershipBenefits: { title: string; description: string }[] = [
  {
    title: 'Priority Access',
    description:
      'Preferred scheduling across the collective and streamlined coordination between providers.',
  },
  {
    title: 'Annual Planning',
    description:
      'A personalized beauty and wellness roadmap across smile, skin, aesthetics, and maintenance.',
  },
  {
    title: 'Concierge Care',
    description:
      'A single, elevated point of entry for curated recommendations and treatment flow.',
  },
  {
    title: 'Private Benefits',
    description:
      'Access to member previews, events, and the benefits associated with your tier.',
  },
];

export const membershipFaqs: { q: string; a: string }[] = [
  {
    q: 'How does the 28 account work?',
    a: 'Members fund a personal account balance that can be applied toward any service or retail product across the collective. Your tier determines the preferred benefits and level of concierge coordination you receive.', // PROVISIONAL — confirm terms
  },
  {
    q: 'Can membership be used across all three providers?',
    a: 'Yes. Membership is designed to move with you across Yulia Gerchik Studio, New York City Dental Smiles, and Dr. Evia Nano, with a concierge to coordinate between them.',
  },
  {
    q: 'Is membership required to visit 28?',
    a: 'No. Every experience at 28 is available without membership. Membership is for clients who want preferred access and a coordinated annual plan.',
  },
  {
    q: 'How do I begin?',
    a: 'Request membership information and a member of our team will walk you through the tiers and help determine the right fit.',
  },
];
