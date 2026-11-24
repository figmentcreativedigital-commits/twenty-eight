/**
 * ────────────────────────────────────────────────────────────────
 * Membership
 * ────────────────────────────────────────────────────────────────
 * PROVISIONAL DATA: the tier structure reflects the client's concept
 * (funded-balance model with escalating benefits). Balances, savings
 * percentages, and benefits are NOT final and must be reviewed for
 * accuracy and legal/financial compliance before publication.
 * `provisional: true` on each tier drives an on-page "concept" note.
 *
 * Copy mirrors the approved staging build (28-tribecca.45p.dev), Nov 2026.
 */

export const membershipIntro = {
  hero: {
    eyebrow: 'Membership',
    headline: 'More Than Membership. A Commitment to Your Well-Being.',
    supporting:
      'Membership at 28 combines the flexibility of preferred access to exceptional services with the value of an ongoing, personalized wellness relationship.',
  },
  statement: [
    'Through integrated expertise in preventive medicine, nutrition, dentistry, skin health, and aesthetics, we bring together personalized care, dedicated concierge support, and a commitment to healthy longevity.',
    'Our philosophy is simple: investing in your health today is an investment in how well you live tomorrow.',
  ],
  philosophy: {
    eyebrow: 'The Philosophy',
    headline: 'Your Wellness Is a Journey, Not a Transaction.',
    body: [
      'True wellness is not achieved through isolated appointments. It develops through prevention, informed decisions, personalized care, and meaningful relationships with trusted healthcare professionals.',
      'At 28, membership is designed to support that journey while providing the convenience and flexibility of a funded account that can be applied toward eligible services and products across our Collective.',
      'Whether your priorities involve preventive health, nutrition, oral care, skin health, aesthetics, or healthy aging, our goal is to make caring for yourself a continuous, thoughtful, and rewarding experience.',
    ],
  },
};

export const howItWorks = {
  eyebrow: 'How Membership Works',
  headline: 'Three Steps Toward a More Connected Approach to Wellness.',
  steps: [
    {
      step: '01',
      title: 'Choose Your Membership',
      description:
        'Select a membership tier that reflects your lifestyle, wellness priorities, and desired benefits. Your funded membership account can be applied toward eligible services and products across participating providers at 28, subject to membership terms.',
    },
    {
      step: '02',
      title: 'Personalize Your Wellness Journey',
      description:
        'With dedicated concierge support, develop a personalized annual wellness roadmap based on your individual health priorities, lifestyle, and goals. Depending on your membership level, this may include coordinated assessments, preventive care planning, and multidisciplinary wellness reviews.',
    },
    {
      step: '03',
      title: 'Experience Connected Care',
      description:
        'Enjoy preferred scheduling, applicable membership benefits, coordinated appointments, and ongoing support as your wellness needs evolve throughout the year.',
    },
  ],
};

export type MembershipTier = {
  slug: string;
  name: string;
  /** Tier subtitle, e.g. "Essential Wellness". */
  title: string;
  /** Funded account balance, in whole dollars. PROVISIONAL. */
  balance: number;
  /** Member savings on services and products, as a percentage. PROVISIONAL. */
  savingsPct: number;
  /** Short positioning paragraph. */
  positioning: string;
  /** Benefit lines shown in the comparison. */
  benefits: string[];
  /** Whether these terms are still a concept pending confirmation. */
  provisional: boolean;
  featured?: boolean;
};

export const membershipTiersIntro = {
  eyebrow: 'Membership Tiers',
  headline: 'Your Wellness. Your Commitment. Your Choice.',
  lede: 'Choose the level of membership that best reflects your healthcare priorities, lifestyle, and desired experience.',
  disclaimer:
    'Membership balances, discounts, eligibility, included services, and benefits are preliminary and subject to confirmation before launch. Clinical services remain subject to professional evaluation and medical necessity where applicable.',
};

export const membershipTiers: MembershipTier[] = [
  {
    slug: 'silver',
    name: 'Silver',
    title: 'Essential Wellness',
    balance: 2000,
    savingsPct: 10,
    positioning:
      'An introduction to the integrated wellness philosophy of 28, combining financial flexibility with personalized service and convenient access to participating professionals.',
    benefits: [
      '$2,000 funded account balance toward eligible services and products',
      'Proposed 10% preferred savings on eligible services and retail',
      'Preferred scheduling across participating providers',
      'Concierge assistance with appointments and service coordination',
      'Initial wellness goals consultation and personalized annual planning',
      'Access to selected member events and experiences',
    ],
    provisional: true,
  },
  {
    slug: 'gold',
    name: 'Gold',
    title: 'Enhanced Wellness',
    balance: 5000,
    savingsPct: 20,
    positioning:
      'Designed for individuals seeking a more proactive approach to their health, Gold combines preferred access with enhanced wellness planning and interdisciplinary coordination.',
    benefits: [
      '$5,000 funded account balance toward eligible services and products',
      'Proposed 20% preferred savings on eligible services and retail',
      'Priority scheduling across participating providers',
      'Enhanced concierge coordination',
      'Personalized annual wellness roadmap',
      'One annual multidisciplinary wellness review, with scope to be defined',
      'Coordination of appropriate preventive medicine, nutrition, oral health, and skin health services',
      'Access to selected member events and experiences',
    ],
    provisional: true,
    featured: true,
  },
  {
    slug: 'platinum',
    name: 'Platinum',
    title: 'Premier Wellness',
    balance: 10000,
    savingsPct: 30,
    positioning:
      'Our most comprehensive membership concept, designed for individuals who value personalized attention, coordinated expertise, and a sustained commitment to long-term health and well-being.',
    benefits: [
      '$10,000 funded account balance toward eligible services and products',
      'Proposed 30% preferred savings on eligible services and retail',
      'Highest scheduling priority, subject to clinical availability',
      'Dedicated concierge coordination across participating providers',
      'Comprehensive annual wellness planning',
      'Annual multidisciplinary wellness review, with scope to be defined',
      'Periodic wellness follow-ups and personalized plan adjustments, as specified in the final membership terms',
      'Coordinated access to preventive medicine, nutrition, oral health, skin health, and aesthetics',
      'Exclusive invitations to selected member events and experiences',
      'Additional personalized privileges, to be confirmed',
    ],
    provisional: true,
  },
];

export const membershipBenefits = {
  eyebrow: 'Member Benefits',
  headline: 'The Value of a Connected Relationship.',
  items: [
    {
      title: 'Preferred Access',
      description:
        'Convenient scheduling and coordinated access to participating professionals and services across the 28 Collective.',
    },
    {
      title: 'Personalized Wellness Planning',
      description:
        'An individualized approach to preventive health, nutrition, oral health, skin health, and aesthetics, guided by your priorities and long-term goals.',
    },
    {
      title: 'Dedicated Concierge Coordination',
      description:
        'A central point of contact to help navigate appointments, coordinate participating providers, and simplify your wellness experience.',
    },
    {
      title: 'Continuity of Care',
      description:
        'Support for maintaining an ongoing relationship with your care team, with opportunities to review your wellness goals and adjust your plan as appropriate.',
    },
    {
      title: 'Membership Privileges',
      description:
        'Access to applicable preferred pricing, selected experiences, and private events according to your membership level.',
    },
  ],
};

export const wellnessScore = {
  eyebrow: 'A More Measurable Approach to Wellness',
  headline: 'Understanding Your Health. Supporting Your Progress.',
  intro:
    'As part of our evolving approach to personalized wellness, 28 is developing the 28 Wellness Score, an informational framework that brings together four interconnected dimensions of well-being:',
  dimensions: [
    'Medical Health',
    'Nutrition & Metabolic Wellness',
    'Oral Health & Dentistry',
    'Skin Health',
  ],
  body: [
    'By evaluating relevant health and wellness indicators, the framework is intended to help establish a baseline, identify opportunities for improvement, and support meaningful conversations between individuals and their care teams.',
    'Over time, periodic reassessments may help members observe changes in their wellness indicators and refine their personalized plans.',
  ],
  disclaimer:
    '28 Wellness Score is a developing wellness framework, not a validated diagnostic assessment or prediction of longevity. Its availability and inclusion in membership tiers will be confirmed before launch.',
};

export const connectedExpertise = {
  eyebrow: 'One Membership. Connected Expertise.',
  headline: 'Different Disciplines. One Shared Commitment to You.',
  body: [
    'Membership at 28 connects you with the complementary expertise of our founding practices, bringing dentistry, preventive medicine, nutrition, skin health, and aesthetics into a more coordinated experience.',
    'Each provider maintains independent professional judgment and responsibility for clinical care. Our concierge team helps coordinate appointments and communication, with appropriate consent, creating a more seamless experience centered around your individual needs.',
  ],
};

export const membershipFaqs: { q: string; a: string }[] = [
  {
    q: 'How does the 28 membership account work?',
    a: 'Members fund a personal account balance according to their selected tier. That balance can be applied toward eligible services and retail products offered by participating providers, subject to the final membership terms. Each tier also includes designated access, coordination, and wellness planning benefits.',
  },
  {
    q: 'Can membership be used across all three founding practices?',
    a: 'The membership is intended to provide coordinated access to participating services offered by Yulia Gerchik Studio, New York City Dental Smiles, and Dr. Evia Nano. Eligible services, account redemption, and provider-specific terms will be confirmed before launch.',
  },
  {
    q: 'Is membership required to visit 28?',
    a: 'No. Individual services and consultations are available without membership. Membership is designed for those who value an ongoing relationship, coordinated wellness planning, and preferred benefits.',
  },
  {
    q: 'Does membership include medical and wellness assessments?',
    a: 'Selected membership tiers are intended to include defined wellness planning or review services. The scope of clinical assessments, any additional fees, and the participating providers will be clearly described in the final membership terms.',
  },
  {
    q: 'How do I begin?',
    a: 'Request membership information, and our team will help you explore the available tiers, understand the proposed benefits, and identify the option that best aligns with your priorities.',
  },
];
