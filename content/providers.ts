/**
 * ────────────────────────────────────────────────────────────────
 * The Collective: the experts within 28.
 * ────────────────────────────────────────────────────────────────
 * Profile copy matches the pre-launch landing page (the28-landing,
 * Nov 2026), which draws on each provider's own material:
 *   Yulia Gerchik Studio   → studio's Nov 2026 positioning doc
 *   NYC Dental Smiles      → nycdentalsmiles.com (Why NYCDS, About, Services)
 *   Dr. Evia Nano          → eviaesthetics.com
 *   Alexandra Cerone       → client bio + alendryx.com
 *
 * Positioning per Dr. El Chaar's Nov 2026 revisions: 28 is born from his
 * vision and the providers are invited experts, not co-founders.
 *
 * NO PRICING on the site. Alexandra's consultation rate was supplied but is
 * deliberately not published. Galleries and testimonials stay omitted until
 * the client supplies verified assets.
 */

export type ProviderItem = {
  title: string;
  description?: string;
  /** Optional small label, e.g. a step name. */
  label?: string;
};

export type Provider = {
  slug: string;
  name: string;
  /** Short form used in inline CTAs, e.g. "Visit Dr. Nano", "Begin with Yulia." */
  shortName: string;
  /** Post-nominals or byline shown under the name. */
  credentials?: string;
  /** Short label used on cards, e.g. "Skin Health & Beauty". */
  specialtyLabel: string;
  /** One-line discipline descriptor (booking cards, image alt text). */
  discipline: string;
  /** Provider-page hero headline. */
  headline: string;
  /** Line under the provider-page hero headline. */
  heroSupporting: string;
  /** Card teaser. */
  cardStatement: string;
  /** Opening paragraphs for the provider page. */
  intro: string[];
  /** Additional titled text under the intro. */
  introBlocks?: { title: string; body: string[] }[];
  /** Tag row under the intro, e.g. technology or clinical background. */
  tags?: { title: string; items: string[] };
  /** "Expertise" section heading and items. */
  expertiseTitle: string;
  expertise: ProviderItem[];
  /** Optional second group in the expertise band. */
  approach?: { title: string; items: ProviderItem[] };
  /** Pull quote. Stored without quotation marks. */
  philosophy: string;
  philosophyAttribution?: string;
  /** Selected services, illustrative. No pricing. */
  selectedServices: { title: string; note?: string }[];
  image: string;
  /** Optional wide image for the provider-page hero when `image` is a portrait. */
  heroImage?: string;
  heroImageAlt?: string;
  /** Alt text when the image is a photo of the person rather than an editorial still. */
  imageAlt?: string;
  /** object-position for crops of the image, e.g. '50% 25%'. */
  imagePosition?: string;
  /**
   * Booking hand-off. Confirmed 2026-07-20: booking is a REDIRECT to each
   * provider's own platform, not an on-site or integrated booking system.
   *
   * `url` empty = platform not yet supplied. The UI degrades to a consultation
   * request rather than rendering a dead link.
   */
  booking: {
    /** Platform name shown to the client before they leave the site. */
    platform: string;
    /** Destination. EMPTY UNTIL SUPPLIED BY THE PROVIDER. Never guess a URL. */
    url: string;
    /** What to expect once they arrive. */
    note: string;
  };
  /** Existing brand site, for reference/handoff (not linked publicly unless confirmed). */
  referenceUrl?: string;
};

export const providers: Provider[] = [
  {
    slug: 'yulia-gerchik-studio',
    name: 'Yulia Gerchik Studio',
    shortName: 'Yulia',
    specialtyLabel: 'Skin Health & Beauty',
    discipline: 'Where skin science meets health and beauty',
    headline: 'Skin health is whole body health.',
    heroSupporting: 'Where Skin Science Meets Health and Beauty',
    cardStatement:
      'Where skin science meets health and beauty: personalized facials, body treatments, and laser, guided by an assessment of your skin at every visit.',
    intro: [
      'At Yulia Gerchik Studio, beautiful skin begins with healthy skin, and healthy skin begins with understanding the body as a whole. As the body’s largest organ, the skin is a vital protective barrier, influenced by nutrition, hormones, lifestyle, aging, and overall well-being.',
      'Within 28, Yulia Gerchik Studio complements medical, dental, nutritional, and wellness expertise through a shared commitment to prevention, personalized care, and long-term health. The focus is not only how your skin looks today, but its health, resilience, and vitality for years to come.',
    ],
    introBlocks: [
      {
        title: 'Understanding skin beyond the surface',
        body: [
          'Skin is constantly evolving, so it is assessed at every visit rather than treated as a fixed skin type. Advanced technologies, concentrated formulations, and carefully designed protocols support skin health, strengthen its protective barrier, and enhance natural beauty.',
        ],
      },
    ],
    expertiseTitle: 'A three-step approach',
    expertise: [
      {
        label: 'Assessment',
        title: 'Understanding your skin',
        description:
          'Every treatment begins with a personalized assessment of the skin’s current condition, individual concerns, and lifestyle influences.',
      },
      {
        label: 'Preparation',
        title: 'Creating the foundation for healthy skin',
        description:
          'Precise cleansing, exfoliation, hydration, and balancing techniques prepare the skin while respecting its natural protective functions.',
      },
      {
        label: 'Treatment',
        title: 'Science meets personalized care',
        description:
          'Advanced aesthetic technologies, active formulations, and individualized techniques, designed to improve skin quality, restore balance, and enhance natural beauty.',
      },
    ],
    philosophy: 'Healthy skin is not separate from health. It is part of it.',
    philosophyAttribution: 'Skin Health. Personalized Care. Timeless Confidence.',
    selectedServices: [
      { title: 'The Atelier Signatures', note: 'Iconic facials. Individual results.' },
      { title: 'The Sculpting Collection', note: 'Lift. Tone. Redefine.' },
      { title: 'The Radiance Collection', note: 'Renew. Brighten. Glow.' },
      { title: 'The Renewal Collection', note: 'Regenerate. Restore. Transform.' },
      { title: 'The Restoration Collection', note: 'Soothe. Strengthen. Revitalize.' },
      { title: 'Body Treatments', note: 'Sculpt. Drain. Detox. Renew.' },
      { title: 'Laser Hair Removal', note: 'Smooth. Confident. Effortless.' },
      { title: 'Enhancements', note: 'Customize your treatment.' },
    ],
    image: '/images/yulia.png',
    booking: {
      platform: 'Mindbody',
      url: '', // NEEDS CLIENT CONFIRMATION: Mindbody booking link
      note: 'Booking for Yulia Gerchik Studio is handled through Mindbody, where you can choose a treatment, pick a time, and create a profile if it is your first visit.',
    },
    referenceUrl: 'https://yuliagerchikstudio.com',
  },
  {
    slug: 'nyc-dental-smiles',
    name: 'New York City Dental Smiles',
    shortName: 'New York City Dental Smiles',
    credentials: 'By Dr. Edgard El Chaar',
    specialtyLabel: 'Dentistry & Smile Aesthetics',
    discipline: 'Comprehensive, medically informed dentistry',
    headline: 'Empowering, perfecting, and protecting smiles.',
    heroSupporting: 'By Dr. Edgard El Chaar, Clinical Professor in Periodontics, Penn Dental Medicine',
    cardStatement:
      'Comprehensive, medically informed dentistry, from cosmetic smile design to implant and restorative care, built on the belief that oral health is inseparable from overall health.',
    intro: [
      'Founded by Dr. Edgard El Chaar, New York City Dental Smiles was created to redefine what dentistry can be: comprehensive, medically informed, and delivered with the highest standards of clinical excellence.',
      'Its team brings together expertise in cosmetic, restorative, implant, and preventive dentistry, united by one philosophy: oral health is inseparable from overall health. The same belief sits at the heart of 28.',
    ],
    introBlocks: [
      {
        title: 'The Edgard El Chaar standard of care',
        body: [
          'An evidence-driven, ethics-first approach: precise treatment planning, uncompromising quality, and compassionate care. Dr. El Chaar is a Clinical Professor in Periodontics at Penn Dental Medicine and previously led advanced training at NYU.',
          'He is also a published author and educator. His book, Practical Techniques in Periodontics and Implant Dentistry, is used by clinicians around the world, and he hosts a podcast on oral health for patients and peers.',
        ],
      },
    ],
    tags: {
      title: 'Technology',
      items: ['In-house ceramic lab', '3D cone beam imaging', 'Intraoral scanning', '3D printing', 'Digital X-rays'],
    },
    expertiseTitle: 'Areas of expertise',
    expertise: [
      {
        title: 'Cosmetic Dentistry',
        description:
          'Porcelain veneers, professional whitening, and smile design you approve before anything is permanent.',
      },
      {
        title: 'Restorative & Implant Dentistry',
        description: 'Crowns, bridges, implant restorations, and full-mouth rehabilitation.',
      },
      { title: 'Orthodontics', description: 'Including Invisalign clear aligners.' },
      {
        title: 'Comprehensive Care',
        description: 'Preventive care, complete evaluations, and same-day emergency care.',
      },
    ],
    philosophy: 'We don’t just treat smiles. We elevate health, confidence, and quality of life.',
    philosophyAttribution: 'New York City Dental Smiles by Dr. Edgard El Chaar',
    selectedServices: [
      { title: 'Porcelain veneers' },
      { title: 'Professional whitening' },
      { title: 'Smile design' },
      { title: 'Implant restorations' },
      { title: 'Crowns and bridges' },
      { title: 'Full-mouth rehabilitation' },
      { title: 'Invisalign clear aligners' },
      { title: 'Same-day emergency care' },
    ],
    image: '/images/dental.png',
    booking: {
      platform: 'the practice scheduling system',
      url: '', // NEEDS CLIENT CONFIRMATION: NDS platform not yet identified
      note: 'Booking for New York City Dental Smiles is handled through the practice’s own scheduling system.',
    },
    referenceUrl: 'https://nycdentalsmiles.com',
  },
  {
    slug: 'dr-evia-nano',
    name: 'Dr. Evia Nano',
    shortName: 'Dr. Nano',
    credentials: 'Board-Certified Physician',
    specialtyLabel: 'Aesthetic & Wellness Medicine',
    discipline: 'Medical aesthetics and wellness medicine',
    headline: 'The art of subtle transformation.',
    heroSupporting:
      'Medical Director, Eviaesthetics. Medical aesthetics and wellness medicine, not general medical care.',
    // Mirrors eviaesthetics.com at category level: no drug names, prices,
    // ratings, or results claims. NY medical-advertising review is still open
    // for weight management and IV therapy: remove those items to hold them back.
    cardStatement:
      'Two decades of aesthetic medicine, known for subtle, natural results across injectables, advanced skin treatments, and physician-led wellness.',
    intro: [
      'For two decades, Dr. Evia Nano has practiced aesthetic medicine on a single principle: results that never announce themselves. Her clients leave looking like themselves, only rested, radiant, and at ease.',
      'Every face is studied and every plan is individual. Each treatment is physician-led and performed by Dr. Nano herself.',
    ],
    expertiseTitle: 'Areas of expertise',
    expertise: [
      {
        title: 'Injectables',
        description:
          'Neurotoxin and dermal fillers, with natural-looking results that respect your anatomy.',
      },
      {
        title: 'Advanced Skin Treatments',
        description: 'Microneedling, PRP, and medical-grade chemical peels.',
      },
      {
        title: 'Physician-Led Weight Management',
        description: 'Personalized programs with medical monitoring from start to finish.',
      },
      {
        title: 'NAD+ and IV Therapy',
        description: 'Custom infusion protocols, designed around the individual.',
      },
    ],
    approach: {
      title: 'Her approach',
      items: [
        {
          title: 'Medical Precision',
          description:
            'Board-certified expertise and two decades of clinical judgment behind every procedure.',
        },
        {
          title: 'Artistic Eye',
          description: 'An intuitive sense of facial proportion, harmony, and balance.',
        },
        {
          title: 'Individual Devotion',
          description:
            'No templates. Every plan is designed for one person and refined over time.',
        },
      ],
    },
    philosophy:
      'I believe the finest work is the work no one can name, only sense. Every face is singular. My role is to reveal it, never to rewrite it.',
    philosophyAttribution: 'Dr. Evia A. Nano, MD',
    selectedServices: [
      { title: 'Neurotoxin and dermal fillers' },
      { title: 'Microneedling' },
      { title: 'PRP' },
      { title: 'Medical-grade chemical peels' },
      { title: 'Physician-led weight management' },
      { title: 'NAD+ and IV therapy' },
    ],
    // TODO: rename asset to /images/evia.png (or similar). The filename is a
    // leftover from the incorrect dermatology positioning.
    image: '/images/derm.png',
    booking: {
      platform: 'Eviaesthetics',
      url: '', // NEEDS CLIENT CONFIRMATION: Dr. Nano's booking link
      note: 'Consultations with Dr. Nano are booked through her practice, Eviaesthetics. A private consultation is credited toward your first treatment.',
    },
    referenceUrl: 'https://eviaesthetics.com',
    // Medical-accuracy note: medical aesthetics / wellness medicine only.
    // NOT dermatology, NOT general medical care. Weight management and IV
    // therapy are regulated advertising categories in New York: route final
    // wording through Dr. Nano and compliance review before launch.
  },
  {
    slug: 'alexandra-cerone',
    name: 'Alexandra Cerone',
    shortName: 'Alexandra',
    credentials: 'MS, RDN, CDN, CSOWM',
    specialtyLabel: 'Nutrition & Metabolic Health',
    discipline: 'Clinical nutrition and metabolic health',
    headline: 'Nutrition. Behavior change. Follow-through.',
    heroSupporting:
      'MS, RDN, CDN, CSOWM. Registered Dietitian Nutritionist and Board-Certified Specialist in Obesity and Weight Management.',
    cardStatement:
      'A registered dietitian nutritionist and board-certified specialist in obesity and weight management, helping people turn nutrition knowledge into consistent, practical action.',
    intro: [
      'Alexandra Cerone is a Registered Dietitian Nutritionist with a diverse clinical background spanning oncology, chronic disease management, metabolic health, and behavioral nutrition. Her experience includes caring for medically complex patients and first responders facing unique physical and psychological health challenges.',
      'With a Master of Science in Speech-Language Pathology and advanced certification in obesity and weight management, Alexandra brings an interdisciplinary perspective to care. She combines evidence-based nutrition with an understanding of human behavior to develop personalized, practical strategies that support lasting health and well-being.',
    ],
    tags: {
      title: 'Clinical background',
      items: [
        'Oncology',
        'Chronic disease management',
        'Metabolic health',
        'Behavioral nutrition',
        'Trauma-informed care',
      ],
    },
    expertiseTitle: 'A practical approach to lasting change',
    expertise: [
      {
        title: 'Evidence-Informed',
        description: 'Grounded in nutrition science and established behavior-change principles.',
      },
      {
        title: 'Individualized',
        description: 'Strategies built around your goals, circumstances, and needs.',
      },
      {
        title: 'Action-Oriented',
        description: 'Information turned into specific, realistic next steps.',
      },
      {
        title: 'Flexible',
        description: 'Plans are reviewed and adjusted when circumstances change.',
      },
    ],
    philosophy:
      'Knowing what to do is only part of the work. The goal is to build strategies people can actually follow through on.',
    philosophyAttribution: 'Alexandra Cerone, MS, RDN, CDN, CSOWM',
    // Rate supplied by the client ($250 / 60 min) is NOT published, per the
    // no-pricing rule.
    selectedServices: [{ title: 'Nutrition Consultations', note: 'One-on-one sessions, 60 minutes.' }],
    image: '/images/alexandra.jpg',
    // Her headshot is a vertical portrait, which crops badly in a wide hero.
    heroImage: '/images/28-placeholder-e.jpeg',
    heroImageAlt: 'A softly lit reception with a curved desk.',
    imageAlt: 'Alexandra Cerone in a teal dress, seated on a dock by a harbor at sunset',
    imagePosition: '50% 22%',
    booking: {
      platform: 'Alendryx Metabolic Health',
      url: '', // NEEDS CLIENT CONFIRMATION: Alexandra's booking link
      note: 'Nutrition consultations with Alexandra Cerone are one-on-one, 60-minute sessions.',
    },
    referenceUrl: 'https://alendryx.com',
  },
];

export function getProvider(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}
