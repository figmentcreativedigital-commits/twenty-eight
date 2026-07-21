/**
 * Homepage and shared editorial copy.
 * Hero and section copy taken from the client copy document.
 */

export const hero = {
  eyebrow: 'A Wellness & Aesthetics Collective — Tribeca, New York',
  headline: 'Where Beauty, Wellness,\nand Expertise Meet.',
  supporting:
    '28 brings together leaders in beauty, dentistry, and aesthetic medicine to create a more complete approach to looking and feeling exceptional.',
  primaryCta: { label: 'Discover 28', href: '/about' },
  secondaryCta: { label: 'Book a Consultation', href: '/consultation' },
  imageNote:
    'ART DIRECTION: Full-bleed warm interior — Tribeca treatment/consultation space in stone, plaster, and soft light. Architectural and serene, never clinical. Reference the provided spa-interior image.',
};

export const introducing28 = {
  eyebrow: 'Introducing 28',
  headline: 'A more considered approach to beauty and wellness.',
  body: [
    '28 is a luxury wellness and aesthetics collective created for those who understand that beauty, health, and confidence are deeply connected. Located in Tribeca, 28 brings together three established leaders — Yulia Gerchik Studio, New York City Dental Smiles, and Dr. Avia Nano — to offer a more elevated, complete, and personalized approach to care.',
    'From smile aesthetics and advanced skin health to beauty treatments, peptides, and regenerative wellness, every experience at 28 is designed to help clients look refined, feel confident, and invest in themselves with intention.',
  ],
};

export const the28Difference = {
  eyebrow: 'The 28 Difference',
  headline: 'Most aesthetic experiences are fragmented. This one isn’t.',
  body: [
    'Skin is handled in one place. Dental care in another. Beauty services somewhere else entirely. 28 was created to bring those elements together in a more thoughtful way.',
    'By combining expertise across dentistry, dermatology, wellness, and beauty, 28 makes it possible to build a personalized plan that considers the full picture — your smile, your skin, your features, your health, and the way you want to present yourself to the world.',
  ],
};

export const pillars: { title: string; description: string }[] = [
  {
    title: 'Industry Leaders',
    description:
      'Each provider is an established expert in their field. Not a startup collection of services — a collaborative destination built around proven expertise.',
  },
  {
    title: 'Integrated Care',
    description:
      'Beautiful outcomes happen when oral health, skin health, facial aesthetics, and wellness are considered together instead of in silos.',
  },
  {
    title: 'Luxury Experience',
    description:
      'Every detail communicates comfort, personalization, discretion, hospitality, and exceptional service.',
  },
  {
    title: 'Whole-Person Beauty',
    description:
      'Beauty starts with health — helping clients look and feel their best through every stage of life.',
  },
];

export const whyTribeca = {
  eyebrow: 'Why Tribeca',
  headline: 'A neighborhood chosen for privacy, design, and quiet luxury.',
  body: [
    '28 was created for Tribeca — a neighborhood known for privacy, sophistication, design, and modern luxury. The location is presented not simply as an address, but as part of the brand experience.',
    'Downtown, discreet, and design-forward, it is a natural home for a new category of beauty and wellness.',
  ],
};

export const finalCta = {
  eyebrow: 'Begin',
  headline: 'Your 28 experience begins with a conversation.',
  body:
    'Every plan starts with understanding your goals. Request a consultation and a member of our team will help guide you toward the right provider or coordinated experience.',
  primaryCta: { label: 'Request a Consultation', href: '/consultation' },
  secondaryCta: { label: 'Explore the Collective', href: '/collective' },
};

/** Interests offered in the consultation flow (also used to validate). */
export const consultationInterests: string[] = [
  'Beauty & brows',
  'Facial treatments',
  'Smile aesthetics',
  'Cosmetic dentistry',
  'Restorative dentistry',
  'Advanced skin health',
  'Injectables',
  'Peptides & regenerative wellness',
  'Signature Experiences',
  'Membership',
  'Not sure yet',
];
