/**
 * ────────────────────────────────────────────────────────────────
 * Our Expertise (route: /service-menu): every provider, organized by provider.
 * ────────────────────────────────────────────────────────────────
 * Client-confirmed (2026-07-20): the service menu lists individual
 * services with descriptions and NO PRICING. Yulia: "The prices will
 * not be there listed."
 *
 * Sources - each provider's own published menu:
 *   Yulia Gerchik Studio  → yuliagerchikstudio.com/pages/services
 *   Dr. Evia Nano         → eviaesthetics.com/services.html
 *   NYC Dental Smiles     → supplied by the practice
 *
 * Descriptions are condensed into 28's editorial voice. No treatment,
 * duration, or capability has been invented - anything not published by
 * the provider is absent rather than assumed.
 *
 * ⚠️ DO NOT ADD PRICING to this file. The providers publish prices
 * on their own sites; 28 deliberately does not.
 */

export type ServiceItem = {
  name: string;
  description: string;
  /** Published treatment time, where the provider states one. */
  duration?: string;
};

export type ServiceGroup = {
  title: string;
  /** Short line under the title, e.g. "Lift. Tone. Redefine." */
  tagline?: string;
  intro?: string;
  /** Named sub-lists, e.g. Enhancements: Specialty Masks, Technology... */
  lists?: { title: string; items: string[] }[];
  /** Italic note under the group. */
  note?: string;
  /** Full entries with descriptions. */
  items?: ServiceItem[];
  /** Short add-on lists that don't warrant a description each. */
  simpleItems?: string[];
};

export type ProviderMenu = {
  /** Matches the provider slug in content/providers.ts. */
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  intro: string;
  groups: ServiceGroup[];
  /** Rendered as a quiet note when a provider's menu is incomplete. */
  gapNote?: string;
  /** Menu tagline shown under the provider name. */
  tagline?: string;
  /** Closing line under the menu. */
  closing?: string;
  /** Render the full grouped menu on Our Expertise (otherwise the provider's selected services). */
  showFullMenu?: boolean;
};

export const serviceMenuIntro = {
  eyebrow: 'Our Expertise',
  headline: 'Specialized Expertise. Connected Care.',
  lede: [
    'At 28, we bring together expertise in dentistry, preventive medicine, nutrition, skin health, and aesthetics to offer a comprehensive approach to health and well-being.',
    'Whether you seek an individual treatment or a personalized plan that integrates multiple disciplines, our specialists work collaboratively to deliver care tailored to your needs, goals, and long-term wellness.',
  ],
  pricingNote:
    'Pricing is discussed during consultation, where treatment is matched to your goals, skin, and timeline.',
};

export const serviceMenus: ProviderMenu[] = [
  /* ───────────────────────── Yulia Gerchik Studio ───────────────────────── */
  // Source: "Skin Atelier at THE 28 by Yulia Gerchik" treatment menu, Nov 2026.
  // Copy verbatim except "THE 28" -> "28". Durations only: NO PRICING.
  {
    slug: 'yulia-gerchik-studio',
    name: 'Yulia Gerchik Studio',
    shortName: 'Yulia',
    eyebrow: 'Skin Health & Beauty',
    tagline: 'Skin Atelier at 28 by Yulia Gerchik. The Art of Skin. The Science of Beauty.',
    intro:
      'At Skin Atelier at 28, skincare is an art form. Each treatment is thoughtfully designed to celebrate the individuality of your skin, combining expert touch, advanced technology, and exceptional formulations to deliver visible, lasting results.',
    closing: 'Personalized Skincare. Advanced Aesthetics. Timeless Results.',
    showFullMenu: true,
    groups: [
      {
        title: 'The Atelier Signatures',
        tagline: 'Iconic facials. Individual results.',
        items: [
          {
            name: 'Haute Couture',
            duration: '120 min',
            description:
              'The ultimate bespoke facial. A comprehensive experience combining deep cleansing, extractions, microdermabrasion, sculpting, LED therapy, oxygen infusion and advanced toning for complete rejuvenation.',
          },
          {
            name: 'The Bespoke',
            duration: '90 min',
            description:
              'A customized treatment featuring targeted Biologique Recherche boosters, lymphatic drainage, exfoliation and advanced technology for your skin’s unique needs.',
          },
          {
            name: 'The Signature',
            duration: '75 min',
            description:
              'The essence of Skin Atelier. Double cleansing, lymphatic drainage, personalized booster and customized mask to reveal healthy, radiant skin.',
          },
          {
            name: 'The Essential',
            duration: '50 min',
            description:
              'A classic European-inspired facial with deep cleansing, gentle exfoliation, meticulous extractions and soothing hydration.',
          },
        ],
      },
      {
        title: 'The Sculpting Collection',
        tagline: 'Lift. Tone. Redefine.',
        items: [
          {
            name: 'The Triple Lift',
            duration: '120 min',
            description:
              'Combines Lift CVS, Soin Restructurant et Lissant and the Remodeling Face Machine to visibly sculpt facial contours, improve firmness and elasticity.',
          },
          {
            name: 'The Contour',
            duration: '45 min',
            description:
              'Advanced facial toning using the Remodeling Face Machine to enhance firmness, definition and facial contours.',
          },
          {
            name: 'The Lift',
            duration: '75 min',
            description:
              'Resurfacing and sculpting with Lift CVS for smoother texture, firmer appearance and enhanced luminosity.',
          },
          {
            name: 'The Silk Sculpt',
            duration: '75 min',
            description:
              'Hydrating and restorative treatment with Soin Restructurant et Lissant to replenish moisture and improve suppleness.',
          },
        ],
      },
      {
        title: 'The Radiance Collection',
        tagline: 'Renew. Brighten. Glow.',
        items: [
          {
            name: 'The Luminosity',
            duration: '60 min',
            description:
              'Targeted brightening treatment with PIGM 400 to address uneven tone, pigmentation and dullness.',
          },
          {
            name: 'The Oxygen Ritual',
            duration: '75 min',
            description:
              'A revitalizing facial with VIP O2 to refresh fatigued, environmentally stressed skin.',
          },
          {
            name: 'The Polish',
            duration: '60 min',
            description:
              'Dermaplaning for instant smoothness and glow. Removes dead skin cells and fine facial hair.',
          },
          {
            name: 'The Red Carpet',
            duration: '90–120 min',
            description:
              'Pre-event treatment for luminous, camera-ready skin with microdermabrasion, oxygen infusion and intensive hyaluronic acid therapy.',
          },
        ],
      },
      {
        title: 'The Renewal Collection',
        tagline: 'Regenerate. Restore. Transform.',
        items: [
          {
            name: 'The Collagen Infusion',
            duration: '90 min',
            description:
              'Advanced micro-puncture treatment with regenerative serums and Féerie Visage collagen mask.',
          },
          {
            name: 'The Skin Renewal',
            duration: '60 min',
            description:
              'Precision micro-stimulation with Cocktail d’Actifs Régénérants to support natural collagen renewal.',
          },
          {
            name: 'The Second Skin',
            duration: '60 min',
            description:
              'Intensive hyaluronic acid treatment with Seconde Peau for visible plumping and firming.',
          },
          {
            name: 'The Liquid Rejuvenation',
            duration: '90–120 min',
            description:
              'High-performance age-defying treatment with MBR Liquid Surgery Serum, facial toning, microneedling and LED (as appropriate).',
          },
        ],
      },
      {
        title: 'The Restoration Collection',
        tagline: 'Soothe. Strengthen. Revitalize.',
        items: [
          {
            name: 'The Calm',
            duration: '60 min',
            description:
              'A sanctuary for sensitive skin with Toleskin to reduce the appearance of redness and irritation.',
          },
          {
            name: 'The Marine Ritual',
            duration: '75 min',
            description:
              'Mineral-rich algae sheets and cooling mask to replenish hydration and revitalize tired, lackluster skin.',
          },
        ],
      },
      {
        title: 'Body Treatments',
        tagline: 'Sculpt. Drain. Detox. Renew.',
        items: [
          {
            name: 'Endosphere Therapy',
            duration: '60 min',
            description:
              'Advanced compression microvibration therapy to reduce cellulite, improve circulation, drain lymphatic system and contour the body.',
          },
          {
            name: 'Sculpt & Tone',
            duration: '60 min',
            description:
              'Targets stubborn areas, improves skin tightness and enhances body definition.',
          },
          {
            name: 'Detox Body Wrap',
            duration: '60 min',
            description:
              'A detoxifying and revitalizing treatment to eliminate toxins, reduce water retention and improve skin texture.',
          },
          {
            name: 'Firming Body Treatment',
            duration: '60 min',
            description:
              'A restorative treatment to enhance skin elasticity, tone and hydration.',
          },
          {
            name: 'Custom Body Program',
            duration: 'Consultation',
            description:
              'A personalized plan combining Endosphere, body wraps and targeted treatments for your goals.',
          },
        ],
      },
      {
        title: 'Laser Hair Removal',
        tagline: 'Smooth. Confident. Effortless.',
        intro:
          'Advanced laser technology for safe, effective and long-lasting hair reduction. Suitable for all skin types.',
        simpleItems: [
          'Full Face',
          'Upper Lip',
          'Chin',
          'Underarms',
          'Half Arms',
          'Full Arms',
          'Bikini',
          'Brazilian',
          'Half Legs',
          'Full Legs',
          'Back',
          'Chest',
          'Stomach',
          'Custom Areas (by consultation)',
        ],
        note: 'A personalized treatment plan is created based on your skin type, hair type and goals.',
      },
      {
        title: 'Enhancements',
        tagline: 'Customize your treatment.',
        lists: [
          {
            title: 'Specialty Masks',
            items: [
              'Collagen Veil',
              'Caviar Infusion',
              'PIGM 400 Brightening Veil',
              'Toleskin Recovery Mask',
              'Chin & Neck Sculpting Mask',
            ],
          },
          {
            title: 'Technology Enhancements',
            items: [
              'Microneedling',
              'Microcurrent Sculpting',
              'LED Light Therapy',
              'Oxygen Infusion',
              'Dermaplaning',
            ],
          },
          {
            title: 'Targeted Treatments',
            items: [
              'Customized Chemical Peel',
              'Eye Renewal Treatment',
              'Hand Rejuvenation Treatment',
              'Leg Revitalization Treatment',
              'Detoxifying Body Wrap',
            ],
          },
        ],
        note: 'Enhancements are offered according to treatment compatibility and skin suitability. Some services require a separate appointment.',
      },
    ],
  },

  /* ───────────────────────── Dr. Evia Nano ───────────────────────── */
  {
    slug: 'dr-evia-nano',
    name: 'Dr. Evia Nano',
    shortName: 'Dr. Nano',
    eyebrow: 'Aesthetic & Wellness Medicine',
    intro:
      'Each protocol is performed personally by Dr. Nano, a board-certified physician, and planned around a single face rather than a template.',
    groups: [
      {
        title: 'Injectables',
        items: [
          {
            name: 'Neurotoxin Injectables (Daxxify)',
            description:
              'FDA-approved neurotoxin for smoothing wrinkles, crow’s feet, forehead lines and frown lines, with longer-lasting results than traditional options.',
            duration: '30 minutes',
          },
          {
            name: 'Dermal Fillers',
            description:
              'Premium hyaluronic acid fillers, including Juvederm and Restylane, to restore facial volume, enhance lips, define cheeks, smooth nasolabial folds and contour jawlines.',
            duration: '45 minutes',
          },
          {
            name: 'Hyperhidrosis Treatment',
            description:
              'Medical-grade treatment for excessive sweating in the underarms, hands and scalp, using neurotoxin injections to block the nerve signals that trigger it.',
            duration: '30–60 minutes',
          },
        ],
      },
      {
        title: 'Skin Boosters',
        intro: 'A curated collection for quality, collagen, and luminosity.',
        items: [
          {
            name: 'Profhilo',
            description:
              'A skin-hydrating injectable rather than a traditional filler - deeply hydrates and improves firmness and elasticity for a healthier, more radiant complexion.',
          },
          {
            name: 'Radiesse',
            description:
              'A filler that also stimulates collagen, adding immediate lift while helping the body build new collagen for definition and firmness that improves over time.',
          },
          {
            name: 'Sculptra',
            description:
              'A collagen-stimulating injectable that gradually restores volume by encouraging the body to make its own collagen - subtle, natural fullness over months.',
          },
          {
            name: 'Skinvive',
            description:
              'A hyaluronic acid skin booster that improves smoothness, hydration and glow, without adding volume.',
          },
          {
            name: 'Mesotherapy',
            description:
              'Targeted micro-injection therapy delivering vitamins, enzymes and plant extracts directly into the skin for rejuvenation, hydration and tightening.',
            duration: '45 minutes',
          },
        ],
      },
      {
        title: 'Skin Rejuvenation',
        items: [
          {
            name: 'Microneedling with SkinPen',
            description:
              'FDA-approved collagen induction therapy for wrinkles, acne scars, pores and texture, stimulating natural collagen and elastin production.',
            duration: '60–90 minutes',
          },
          {
            name: 'Microneedling with Exosomes',
            description:
              'SkinPen microneedling enhanced with exosome therapy for cellular regeneration and amplified rejuvenation.',
          },
          {
            name: 'Microneedling with Salmon DNA',
            description:
              'SkinPen microneedling combined with salmon-derived PDRN polynucleotide therapy for cellular repair, regeneration and improved skin texture.',
          },
          {
            name: 'PRP Therapy',
            description:
              'Platelet-rich plasma drawn from your own blood and reinjected to stimulate collagen production, tissue repair and rejuvenation. Treats fine lines, acne scars and skin laxity.',
            duration: '90 minutes',
          },
          {
            name: 'Chemical Peels',
            description:
              'Professional-grade resurfacing that removes dead cells, improves texture, reduces hyperpigmentation and reveals a brighter, more even complexion.',
            duration: '60 minutes',
          },
        ],
      },
      {
        title: 'Wellness Medicine',
        items: [
          {
            name: 'Medical Weight Management',
            description:
              'A personalised, medically supervised programme including medical evaluation, nutrition planning, exercise guidance, regular monitoring and ongoing support, with semaglutide and tirzepatide options.',
          },
          {
            name: 'IV Drip Therapy',
            description:
              'Custom vitamin and mineral infusions delivered directly into the bloodstream. Options include hydration, energy, immunity, detox and beauty formulas.',
            duration: '45–60 minutes',
          },
          {
            name: 'NAD+ Therapy',
            description:
              'NAD+ infusions for cellular vitality and regeneration, in custom protocols designed around energy and renewal.',
          },
          {
            name: 'Vitamin Injections',
            description:
              'Targeted vitamin supplementation including B12, vitamin D, biotin and custom blends for energy, immunity and wellness support.',
            duration: '15 minutes',
          },
        ],
      },
    ],
  },

  /* ───────────────────── New York City Dental Smiles ───────────────────── */
  {
    slug: 'nyc-dental-smiles',
    name: 'New York City Dental Smiles',
    shortName: 'NYC Dental Smiles',
    eyebrow: 'Smile Aesthetics',
    intro:
      'Dentistry planned in the context of the whole face, supported by an in-house ceramic lab and a fully digital workflow.',
    groups: [
      {
        title: 'Clinical Services',
        items: [
          {
            name: 'Comprehensive Care',
            description:
              'Proactive, whole-mouth care - preventive hygiene and oral health maintenance, complete evaluations and treatment planning with digital imaging, and prompt emergency dentistry when it is needed.',
          },
          {
            name: 'Cosmetic Dentistry',
            description:
              'Smile design mapped with digital previews and trial smiles, porcelain veneers refining shape, colour and symmetry, and professional whitening in-office or as custom take-home treatment.',
          },
          {
            name: 'Prosthodontics',
            description:
              'Restorations designed with digital planning, 3D imaging and meticulous shade-matching. Includes full-mouth rehabilitation correcting bite issues from wear, fractures or past dentistry.',
          },
          {
            name: 'Restorative Dentistry',
            description:
              'Conservative repairs with tooth-coloured fillings, and durable rebuilds with inlays, onlays and crowns. Missing teeth replaced with bridges, implant restorations, dentures and partials.',
          },
          {
            name: 'Orthodontics',
            description:
              'Invisalign® and clear aligners planned from 3D digital scans, staging each tooth’s path. Addresses crowding, spacing, relapse after braces, and pre-restorative alignment, with custom retainers to hold the result.',
          },
          {
            name: 'Implant Dentistry',
            description:
              'Surgical placement performed in a dedicated sterile surgical suite by specialists, coordinated with restorative care under one team.',
          },
        ],
      },
      {
        title: 'Technology & In-House Capability',
        intro:
          'The equipment and in-house lab behind the clinical work - not separately bookable.',
        items: [
          {
            name: 'In-House Ceramic Lab',
            description:
              'An on-site milling centre powered by CAD/CAM and 3D printing, integrated with Exocad, CEREC and coDiagnostiX. Restorations from single crowns to full-mouth ceramics are often designed and fabricated in a single visit.',
          },
          {
            name: '3D Cone Beam CT',
            description:
              'High-resolution three-dimensional imaging of teeth, jaws, sinuses and surrounding structures, at lower radiation than traditional CT - allowing earlier detection and precise implant planning.',
          },
          {
            name: 'Intraoral Scanner',
            description:
              'A quick, comfortable digital scan captures the teeth in 3D, replacing impression trays and producing accurate impressions for crowns, bridges, implants and aligners.',
          },
          {
            name: 'Digital X-Rays',
            description:
              'Instant, high-resolution images with up to 90% less radiation than conventional X-rays, identifying decay, abscesses and bone loss earlier.',
          },
          {
            name: '3D Printing',
            description:
              'Exact printed models of the mouth for planning complex treatment with greater accuracy and predictability.',
          },
          {
            name: 'Intraoral Photography',
            description:
              'Detailed chairside images of teeth and gums displayed on a monitor, so findings can be seen and discussed directly.',
          },
          {
            name: 'AI-Assisted Diagnostics',
            description:
              'VideaAI supports radiographic review with FDA-cleared detections across major oral conditions, helping identify decay between teeth that is difficult to see.',
          },
          {
            name: 'Waterlase® Dental Laser',
            description:
              'A laser that works with water to gently and precisely remove damaged tissue, often with less drilling and reduced need for anaesthesia.',
          },
        ],
      },
    ],
  },
  /* ───────────────────────── Alexandra Cerone ───────────────────────── */
  {
    slug: 'alexandra-cerone',
    name: 'Alexandra Cerone',
    shortName: 'Alexandra',
    eyebrow: 'Nutrition & Metabolic Health',
    intro:
      'One-on-one nutrition consultations with a registered dietitian nutritionist and board-certified specialist in obesity and weight management, built around your goals, circumstances, and needs.',
    groups: [],
  },
];

export function getServiceMenu(slug: string): ProviderMenu | undefined {
  return serviceMenus.find((m) => m.slug === slug);
}
