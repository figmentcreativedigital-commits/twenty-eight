/**
 * The Space — Tribeca location and guest experience.
 * Sells the feeling of the destination before the practical details.
 * Practical details are placeholders — confirm before launch.
 */

export const spaceHero = {
  eyebrow: 'The Space — Tribeca',
  headline: 'A private luxury wellness experience in the heart of Tribeca.',
  supporting:
    'The 28 experience begins the moment you arrive — calm, refined, private, and elevated. More a luxury hospitality experience than a clinical environment.',
  imageNote:
    'ART DIRECTION: Cinematic full-bleed of the arrival / reception moment. Stone, plaster, warm neutral upholstery, sculptural lighting.',
};

export const spaceStory = {
  body: [
    'The 28 experience begins the moment clients arrive. The Tribeca location is designed to feel calm, refined, private, and elevated — more like a luxury hospitality experience than a traditional clinical environment.',
    'Warm materials, soft light, and uncluttered rooms set the tone. Consultation spaces are private. Transitions between providers are thoughtful and unhurried. Every detail is arranged around comfort, discretion, and personalization.',
  ],
};

/** Interior / experience moments, each a full editorial image slot. */
export const spaceMoments: { title: string; description: string; imageNote: string }[] = [
  {
    title: 'Arrival',
    description:
      'Warm, calm, private, and highly polished — closer to entering a boutique hotel than a clinic.',
    imageNote: 'ART DIRECTION: Reception detail — stone counter, fresh branches, soft light.',
  },
  {
    title: 'Consultation',
    description:
      'Private spaces designed for a considered conversation about your goals, with no sense of hurry.',
    imageNote: 'ART DIRECTION: Intimate seating vignette — upholstery, ceramics, paper goods.',
  },
  {
    title: 'Treatment Rooms',
    description:
      'Uncluttered, residential in feel, and appointed with refined materials and quiet detail.',
    imageNote: 'ART DIRECTION: Treatment room — sculptural chaise, sheer curtains, warm plaster (reference the provided interior image).',
  },
  {
    title: 'Materials & Ritual',
    description:
      'Travertine, linen, ceramics, brushed metal, and champagne detailing — the tactile sense of luxury that defines 28.',
    imageNote: 'ART DIRECTION: Product ritual / packaging detail on travertine with silk ribbon.',
  },
];

export const guestExpectations: { title: string; description: string }[] = [
  {
    title: 'Privacy',
    description: 'Private consultation and treatment spaces, and discretion throughout your visit.',
  },
  {
    title: 'Coordination',
    description: 'Thoughtful transitions between providers, coordinated by a single point of contact.',
  },
  {
    title: 'Personalization',
    description: 'An experience tailored to your goals, timeline, and preferred level of care.',
  },
];

/** Practical details — ALL PLACEHOLDERS. Confirm before launch. */
export const practicalDetails: { label: string; value: string }[] = [
  { label: 'Neighborhood', value: 'Tribeca, New York' },
  { label: 'Address', value: 'To be confirmed' }, // NEEDS CLIENT CONFIRMATION
  { label: 'Hours', value: 'By appointment' }, // NEEDS CLIENT CONFIRMATION
  { label: 'Transit', value: 'Accessible by subway; details to be confirmed' }, // NEEDS CLIENT CONFIRMATION
  { label: 'Accessibility', value: 'Details to be confirmed' }, // NEEDS CLIENT CONFIRMATION
];

export const spaceFaqs: { q: string; a: string }[] = [
  {
    q: 'How do appointments across providers work?',
    a: 'A single point of contact coordinates your visit, so care across beauty, smile, and skin feels seamless rather than like separate appointments.',
  },
  {
    q: 'Is parking available nearby?',
    a: 'Parking and transit guidance will be provided with your appointment confirmation.', // NEEDS CLIENT CONFIRMATION
  },
  {
    q: 'How private is the experience?',
    a: 'Consultations and treatments take place in private spaces, and discretion is central to how 28 is designed.',
  },
];
