/**
 * Homepage and shared editorial copy.
 * Mirrors the approved staging build (28-tribecca.45p.dev), Nov 2026.
 */

export const hero = {
  eyebrow: 'A Wellness & Aesthetics Collective - Tribeca, New York',
  headline: 'The Future of Healthy Living Starts Here.',
  supporting:
    '28 represents a new era in integrated health and wellness - a destination where preventive medicine, dentistry, aesthetic care, and personalized wellness come together under one roof. Guided by science, innovation, and a commitment to longevity, 28 redefines personal care by focusing not simply on how we look or how long we live, but on how well we live. Our mission is to help individuals achieve a longer, healthier, and more fulfilling life.',
  primaryCta: { label: 'Discover 28', href: '/about' },
  secondaryCta: { label: 'Book a Consultation', href: '/consultation' },
  imageSrc: '/images/28-placeholder-d.jpeg',
  imageAlt: 'A serene Tribeca interior in stone, plaster, and soft light.',
};

/** Per Dr. El Chaar's Nov 2026 revisions, as used on the landing page. */
export const introducing28 = {
  eyebrow: 'Introducing 28',
  headline: 'A more considered approach to beauty, wellness & longevity.',
  body: [
    'Born from the vision of Dr. Edgard El Chaar, 28 is a luxury beauty and wellness destination founded on the belief that health, beauty, and confidence are deeply connected.',
    'Located in the heart of Tribeca, 28 brings together distinguished professionals across dentistry, aesthetic medicine, advanced skin health, nutrition, and wellness. Each has been invited to contribute their expertise to a collective built on collaboration, scientific excellence, and a shared commitment to personalized care.',
    'From smile aesthetics and advanced skin health to aesthetic medicine, nutrition, and regenerative wellness, 28 offers a thoughtfully coordinated approach to helping individuals look exceptional, feel confident, and embrace healthier longevity.',
  ],
  statement:
    'As the collective evolves, its vision remains constant: bringing together exceptional expertise to care for the whole person.',
};

export const the28Difference = {
  eyebrow: '28 Difference',
  headline: 'Most aesthetic experiences are fragmented. This one isn’t.',
  body: [
    'Skin is handled in one place. Dental care in another. Beauty services somewhere else entirely. 28 was created to bring those elements together in a more thoughtful way.',
    'By combining expertise across dentistry, aesthetic medicine, wellness, and beauty, 28 makes it possible to build a personalized plan that considers the full picture - your smile, your skin, your features, your health, and the way you want to present yourself to the world.',
  ],
};

/** "What Sets 28 Apart" — shared by Home and About. */
export const principles = {
  eyebrow: 'What Sets 28 Apart',
  headline: 'Four Principles. One Vision: A Healthier, Longer Life.',
  items: [
    {
      title: '1. Distinguished Expertise',
      description:
        '28 brings together accomplished professionals in dentistry, preventive medicine, nutrition, skin health, and aesthetics. Each discipline contributes specialized knowledge, united by a shared commitment to scientific excellence, collaboration, and personalized care.',
    },
    {
      title: '2. Integrated, Whole-Person Care',
      description:
        'True wellness cannot be achieved through isolated treatments. At 28, we recognize the connections between oral health, nutrition, metabolic health, skin health, and overall well-being. Our collaborative approach considers the whole person, creating a more coordinated and comprehensive experience.',
    },
    {
      title: '3. Elevated, Personalized Experience',
      description:
        'Exceptional healthcare deserves an exceptional experience. Every detail at 28 is thoughtfully designed around comfort, privacy, hospitality, and individualized attention - creating an environment where scientific excellence meets refined luxury.',
    },
    {
      title: '4. Prevention & Healthy Longevity',
      description:
        'Our philosophy extends beyond treating today’s concerns. We emphasize prevention, early detection, and sustainable lifestyle choices to support long-term health, vitality, and quality of life. Because the goal is not simply to live longer, but to live healthier for longer.',
    },
  ],
};

export const homeCollective = {
  eyebrow: 'The Collective',
  headline: 'One vision. A collective of expertise.',
  tagline: 'One Vision. Exceptional Expertise. A Collective Without Boundaries.',
  intro:
    'What began as one vision is evolving into a collective of distinguished experts, united by a shared commitment to science, prevention, aesthetics, and healthy longevity. As 28 grows, so will its collective, bringing together new perspectives and specialties while remaining grounded in one guiding philosophy: helping people look their best, feel their best, and live healthier, longer lives.',
};

export const homeExperiences = {
  eyebrow: 'Signature Experiences',
  headline: 'Curated, multidisciplinary experiences.',
  cta: { label: 'View All Experiences', href: '/signature-experiences' },
};

export const homeMembership = {
  eyebrow: 'Membership',
  headline: 'A private membership for those who treat care as an investment.',
  body: 'Preferred access across the Collective, with a concierge to coordinate it all.',
  cta: { label: 'Explore Membership', href: '/membership' },
};

export const homeSpace = {
  eyebrow: 'The Space',
  headline: 'A destination shaped by design, privacy, and place.',
  body: 'Set in Tribeca, 28 was designed to feel removed from the rush without leaving the city. Calm, architectural, and discreet, the space makes the experience feel intentional from the moment you arrive.',
  cta: { label: 'Explore The Space', href: '/the-space' },
  imageSrc: '/images/28-placeholder-e.jpeg',
};

export const finalCta = {
  eyebrow: 'Begin Your Journey',
  headline: '28 experience begins with a conversation.',
  body:
    'Every plan starts with understanding your goals. Request a consultation and a member of our team will help guide you toward the right provider or coordinated experience.',
  primaryCta: { label: 'Request a Consultation', href: '/consultation' },
  secondaryCta: { label: 'Explore the Collective', href: '/collective' },
};

/** Interests offered in the consultation flow (also used to validate). */
export const consultationInterests: string[] = [
  'Beauty services',
  'Facial treatments',
  'Body treatments',
  'Smile aesthetics',
  'Cosmetic dentistry',
  'Restorative dentistry',
  'Advanced skin health',
  'Aesthetic procedures & injectables',
  'Peptides & regenerative wellness',
  'Weight loss & IV infusions',
  'Nutrition & metabolic health',
  'Signature Experiences',
  'Membership',
  'Not sure yet',
];
