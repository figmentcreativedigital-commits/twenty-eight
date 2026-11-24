/**
 * The Experience (route: /the-space). Tribeca location and guest experience.
 * Practical details are placeholders: confirm before launch.
 * Copy mirrors the approved staging build (28-tribecca.45p.dev), Nov 2026.
 */

export const spaceHero = {
  eyebrow: 'The Experience - Tribeca, New York',
  headline: 'Where Exceptional Care Meets Thoughtful Hospitality.',
  supporting: [
    'At 28, we believe that the experience of healthcare should be as exceptional as the care itself.',
    'Located in the heart of Tribeca, 28 brings together clinical expertise, personalized wellness, and refined hospitality in an environment designed around your comfort, privacy, and well-being.',
    'From your first conversation to your ongoing care, every detail reflects our commitment to making your journey toward healthier living seamless, personal, and reassuring.',
  ],
};

export const spaceStory = {
  eyebrow: '28 Experience',
  headline: 'Designed Around You. Dedicated to Your Well-Being.',
  body: [
    'At 28, we believe exceptional healthcare begins with understanding the individual. Our Tribeca destination combines scientific expertise, personalized attention, and thoughtful hospitality to create an environment where health, wellness, and aesthetics come together naturally.',
    'Every aspect of your visit is designed to provide comfort, discretion, and confidence - from your initial consultation to the coordination of your personalized care.',
  ],
  tagline: 'The Future of Healthy Living Starts Here.',
};

/** Experience moments, each with an editorial image slot. */
export const spaceMoments = {
  eyebrow: 'Your Experience',
  headline: 'Thoughtfully Designed. Personally Delivered.',
  items: [
    {
      title: 'A Warm Welcome',
      description:
        'Your experience begins in a welcoming, thoughtfully designed environment where privacy, comfort, and personalized attention take priority. Our team is dedicated to making every visit feel effortless and reassuring.',
      image: '/images/28-placeholder-g.jpeg',
    },
    {
      title: 'A Meaningful Consultation',
      description:
        'We believe exceptional care begins with listening. Our specialists take the time to understand your concerns, health priorities, lifestyle, and aspirations before recommending an appropriate path forward.',
      image: '/images/28-placeholder-e.jpeg',
    },
    {
      title: 'Expertise in Every Detail',
      description:
        'Our clinical and wellness spaces are designed to combine modern technology, professional excellence, and patient comfort. Each discipline maintains its specialized expertise while contributing to a broader philosophy of integrated care.',
      image: '/images/28-placeholder-d.jpeg',
    },
    {
      title: 'Coordinated Care, Continued Support',
      description:
        'Your experience extends beyond a single appointment. When your needs involve multiple disciplines, our team helps coordinate consultations, treatments, and follow-up care, supporting a more connected and personalized wellness journey.',
      image: '/images/derm.png',
    },
  ],
};

export const guestExpectations = {
  eyebrow: 'What to Expect',
  headline: 'Exceptional Care. Thoughtful Attention.',
  items: [
    {
      title: 'Privacy & Discretion',
      description:
        'Private consultation and treatment environments designed to respect your comfort, confidentiality, and personal preferences.',
    },
    {
      title: 'Connected Expertise',
      description:
        'Access to complementary disciplines in preventive medicine, nutrition, dentistry, skin health, and aesthetics, with coordination when appropriate to your needs.',
    },
    {
      title: 'Personalized Attention',
      description:
        'Care shaped around your individual priorities, clinical needs, lifestyle, and long-term wellness goals.',
    },
    {
      title: 'Refined Hospitality',
      description:
        'A welcoming environment where thoughtful design, attentive service, and professional excellence come together.',
    },
  ],
};

export const tribecaHome = {
  eyebrow: 'Our Tribeca Home',
  headline: 'A Space Designed for Comfort and Well-Being.',
  body: [
    'Located in one of New York City’s most distinctive neighborhoods, 28 reflects our belief that the environment in which care is delivered matters.',
    'Thoughtfully selected materials, natural textures, soft lighting, and private spaces create a setting that feels welcoming, sophisticated, and calm.',
    'The result is an environment where clinical professionalism and refined hospitality complement one another - allowing you to focus on what matters most: your health and well-being.',
  ],
};

export const planYourVisit = {
  eyebrow: 'Plan Your Visit',
  headline: 'We Look Forward to Welcoming You.',
  body: 'Our concierge team will assist with appointment arrangements and provide the information needed to prepare for your visit.',
};

/** Practical details. ALL PLACEHOLDERS. Confirm before launch. */
export const practicalDetails: { label: string; value: string }[] = [
  { label: 'Neighborhood', value: 'Tribeca, New York' },
  { label: 'Address', value: 'To be confirmed' }, // NEEDS CLIENT CONFIRMATION
  { label: 'Hours', value: 'By appointment' }, // NEEDS CLIENT CONFIRMATION
  {
    label: 'Transportation',
    value: 'Subway and local transportation information will be provided upon confirmation.',
  }, // NEEDS CLIENT CONFIRMATION
  { label: 'Accessibility', value: 'Details will be confirmed before opening.' }, // NEEDS CLIENT CONFIRMATION
];

export const spaceFaqs: { q: string; a: string }[] = [
  {
    q: 'How are appointments across different providers coordinated?',
    a: 'When your care involves more than one discipline, our concierge team can assist with coordinating appointments and communication among participating providers, with your consent. Each professional remains responsible for their clinical recommendations and treatment decisions.',
  },
  {
    q: 'Can I visit 28 for a single service?',
    a: 'Absolutely. You may seek an individual consultation or service without participating in a comprehensive wellness program or membership.',
  },
  {
    q: 'Is membership required?',
    a: 'No. Membership is optional and designed for individuals interested in additional benefits, coordinated wellness planning, and an ongoing relationship with 28.',
  },
  {
    q: 'How private is the experience?',
    a: 'Privacy and discretion are fundamental to our approach. Our consultation and treatment environments are designed with confidentiality and personal comfort in mind.',
  },
  {
    q: 'Is parking available nearby?',
    a: 'Our team can provide information about nearby parking and transportation options when your appointment is confirmed.', // NEEDS CLIENT CONFIRMATION
  },
];
