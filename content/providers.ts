/**
 * ────────────────────────────────────────────────────────────────
 * The Collective — three expert-led providers within 28.
 * ────────────────────────────────────────────────────────────────
 * Intro/headline copy is taken from the client copy document.
 * Service lists are illustrative of each discipline and are flagged
 * for confirmation — they are NOT a published menu and contain no
 * pricing. Credentials, galleries, and testimonials are intentionally
 * omitted until the client supplies verified assets.
 */

export type Provider = {
  slug: string;
  name: string;
  /** Short label used on cards, e.g. "Beauty & Skin". */
  specialtyLabel: string;
  /** One-line discipline descriptor. */
  discipline: string;
  /** Provider-page hero headline (from copy doc). */
  headline: string;
  /** Card teaser (from copy doc). */
  cardStatement: string;
  /** Longer positioning paragraph(s) for the provider page. */
  intro: string[];
  /** Provider philosophy statement. */
  philosophy: string;
  /** Expertise areas — illustrative, pending client confirmation. */
  expertise: { title: string; description: string }[];
  /** Selected services — illustrative only, no pricing. */
  selectedServices: string[];
  /** Art-direction note for the provider hero image slot. */
  heroImageNote: string;
  /** Placeholder photography. Swap for final commissioned images. */
  image: string;
  /** External booking link, if supplied by the client. Empty = no dead link. */
  bookingUrl: string;
  /** Existing brand site, for reference/handoff (not linked publicly unless confirmed). */
  referenceUrl?: string;
};

export const providers: Provider[] = [
  {
    slug: 'yulia-gerchik-studio',
    name: 'Yulia Gerchik Studio',
    specialtyLabel: 'Beauty & Skin',
    discipline: 'Refined beauty, skin, body, and aesthetic artistry',
    headline: 'Beauty, refined through artistry and expertise.',
    cardStatement:
      'A destination for refined beauty services, skin, body, and aesthetic treatments designed to enhance natural features with precision and artistry.',
    intro: [
      'Yulia Gerchik Studio brings an elevated beauty perspective to 28, offering refined services that enhance natural features through artistry, precision, and a deeply personal understanding of each client’s goals.',
      'As part of the 28 collective, Yulia Gerchik Studio gives clients access to beauty expertise that complements advanced skin health, smile aesthetics, and whole-person confidence.',
    ],
    philosophy:
      'True enhancement is quiet. Every service begins with the individual — their features, their proportions, their intentions — and works toward a result that looks like no one so much as themselves.',
    expertise: [
      {
        title: 'Skin & Facial Treatments',
        description:
          'Refined facial treatments focused on clarity, texture, and a healthy, luminous finish.',
      },
      {
        // NEEDS CLIENT CONFIRMATION — body treatments confirmed by the client
        // as an offering, but no service list has been supplied. Kept
        // deliberately non-specific until Yulia provides her body menu.
        title: 'Body Treatments',
        description:
          'Considered body treatments delivered with the same precision, calm, and attention as the studio’s facial work.',
      },
      {
        title: 'Aesthetic Beauty Services',
        description:
          'Precise, personalized beauty services delivered with an artist’s eye and a studio’s calm.',
      },
    ],
    selectedServices: [
      'Bespoke facial treatments',
      'Skin refinement rituals',
      'Body treatments',
      'Personalized beauty consultation',
    ],
    heroImageNote:
      'ART DIRECTION: Editorial beauty detail — refined treatment tools styled on linen and ceramic, warm natural light. No smiling-at-camera portraits. Reference the provided tools inspiration image.',
    image: '/images/yulia.png',
    bookingUrl: '', // NEEDS CLIENT CONFIRMATION
    referenceUrl: 'https://yuliagerchikstudio.com',
  },
  {
    slug: 'nyc-dental-smiles',
    name: 'New York City Dental Smiles',
    specialtyLabel: 'Smile Aesthetics',
    discipline: 'Cosmetic, restorative, and smile-focused dentistry',
    headline: 'A healthier, more confident smile — designed with intention.',
    cardStatement:
      'A trusted cosmetic and restorative dental practice focused on healthy, confident, elevated smiles.',
    intro: [
      'New York City Dental Smiles brings trusted dental expertise to the 28 collective, helping clients achieve smiles that are healthy, confident, and aligned with their overall aesthetic goals.',
      'From cosmetic dentistry to restorative care and smile enhancement, the practice plays an essential role in the 28 experience by connecting oral health, facial harmony, and self-confidence.',
    ],
    philosophy:
      'A smile is a feature of the face, not a set of teeth. Care here is planned with facial harmony and long-term health in mind — precise, unhurried, and quietly transformative.',
    expertise: [
      {
        title: 'Cosmetic Dentistry',
        description:
          'Smile design, whitening, and refinements that read as natural, balanced, and confident.',
      },
      {
        title: 'Restorative Care',
        description:
          'Considered restorative treatment that protects long-term oral health and function.',
      },
      {
        title: 'Smile & Facial Harmony',
        description:
          'Treatment planned in the context of the whole face, in coordination with the 28 collective.',
      },
    ],
    selectedServices: [
      'Cosmetic smile design',
      'Professional whitening',
      'Restorative dentistry',
      'Comprehensive oral health assessment',
    ],
    heroImageNote:
      'ART DIRECTION: Editorial, hospitality-led — no clinical blue, no tooth iconography. Warm treatment-room detail, refined materials, soft light. Reference the ceramic-dish inspiration image.',
    image: '/images/dental.png',
    bookingUrl: '', // NEEDS CLIENT CONFIRMATION
  },
  {
    slug: 'dr-evia-nano',
    name: 'Dr. Evia Nano',
    specialtyLabel: 'Aesthetic & Wellness Medicine',
    discipline: 'Medical aesthetics, wellness medicine, and longevity',
    headline: 'Advanced aesthetic medicine for skin, confidence, and longevity.',
    cardStatement:
      'A medical aesthetics and wellness medicine provider focused on aesthetic procedures, peptides, weight loss, regenerative wellness, and IV infusions — not general medical care.',
    intro: [
      'Dr. Evia Nano’s presence within 28 brings medical expertise to the world of aesthetics, skin health, and wellness optimization. Her practice is positioned around medical aesthetics and wellness medicine — aesthetic procedures, peptides, weight loss, regenerative wellness, and IV infusions.',
      'The experience is refined, intelligent, and deeply personal — balancing clinical credibility with the calm, luxury sensibility of the 28 collective.',
    ],
    philosophy:
      'Skin health is a long horizon. The most beautiful results come from prevention, precision, and restraint — protocols designed around the individual and maintained over time.',
    expertise: [
      {
        title: 'Aesthetic Procedures',
        description:
          'Injectables and aesthetic procedures delivered with a natural, undetectable philosophy.',
      },
      {
        title: 'Peptides & Regenerative Wellness',
        description:
          'Regenerative and longevity-focused protocols centered on prevention and maintenance.',
      },
      {
        title: 'Wellness Medicine',
        description:
          'Weight loss and IV infusion protocols focused on how you feel as much as how you look.',
      },
    ],
    // NEEDS CLIENT CONFIRMATION — category-level only. The client named
    // specific treatments (Botox, fillers) in conversation, but individual
    // service naming is held until Dr. Nano supplies and approves her own list.
    selectedServices: [
      'Aesthetic procedures',
      'Peptide therapy',
      'Weight loss',
      'Regenerative wellness',
      'IV infusions',
    ],
    heroImageNote:
      'ART DIRECTION: Editorial skincare texture and refined tools — no cold clinical imagery. Warm, tactile, composed. Reference the travertine/ceramic inspiration images.',
    // TODO: rename asset to /images/evia.png (or similar) — filename is a
    // leftover from the incorrect dermatology positioning. Path left intact
    // so the build doesn't break before the file itself is renamed.
    image: '/images/derm.png',
    bookingUrl: '', // NEEDS CLIENT CONFIRMATION
    // Medical-accuracy note: present as medical aesthetics / wellness medicine
    // only — NOT dermatology, NOT general medical care. Confirmed by the client
    // 2026-07-20. Weight loss, peptides, and IV infusions are regulated
    // advertising categories in New York: route final wording through Dr. Nano
    // and compliance review before publishing. Verify credentials before
    // publishing any.
  },
];

export function getProvider(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}
