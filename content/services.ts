/**
 * ────────────────────────────────────────────────────────────────
 * Service Menu — all three providers, organised by provider.
 * ────────────────────────────────────────────────────────────────
 * Client-confirmed (2026-07-20): the service menu lists individual
 * services with descriptions and NO PRICING. Yulia: "The prices will
 * not be there listed."
 *
 * Sources — each provider's own published menu:
 *   Yulia Gerchik Studio  → yuliagerchikstudio.com/pages/services
 *   Dr. Evia Nano         → eviaesthetics.com/services.html
 *   NYC Dental Smiles     → supplied by the practice
 *
 * Descriptions are condensed into 28's editorial voice. No treatment,
 * duration, or capability has been invented — anything not published by
 * the provider is absent rather than assumed.
 *
 * ⚠️ DO NOT ADD PRICING to this file. All three providers publish prices
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
  intro?: string;
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
};

export const serviceMenuIntro = {
  eyebrow: 'Service Menu',
  headline: 'Every service, across the collective.',
  lede:
    'The full range of treatments available at 28, organised by provider. Services can be booked individually, or combined into a coordinated experience across the collective.',
  pricingNote:
    'Pricing is discussed during consultation, where treatment is matched to your goals, skin, and timeline.',
};

export const serviceMenus: ProviderMenu[] = [
  /* ───────────────────────── Yulia Gerchik Studio ───────────────────────── */
  {
    slug: 'yulia-gerchik-studio',
    name: 'Yulia Gerchik Studio',
    shortName: 'Yulia',
    eyebrow: 'Beauty & Skin',
    intro:
      'Treatments are selected, customised, and adjusted to your particular skin and goals. The menu below is a reference for consultations and bookings, not a fixed prescription.',
    gapNote:
      'Body treatments are offered and will be listed here once the full menu is confirmed.', // NEEDS CLIENT CONFIRMATION — body treatment list outstanding
    groups: [
      {
        title: 'Signature Facials',
        items: [
          {
            name: 'Haute Couture Facial',
            description:
              'A fully bespoke treatment built around individual requirements. Double cleanse, steam, gentle extraction, natural microdermabrasion, then mask, LED light and oxygen therapy with facial toning and personalised products.',
            duration: '120 minutes',
          },
          {
            name: 'Bespoke Facial',
            description:
              'Customised to target individual concerns, drawing on lymphatic drainage massage, peel, extractions, Biologique Recherche booster application and remodelling face machine for facial toning.',
            duration: '90 minutes',
          },
          {
            name: 'Signature Facial',
            description:
              'A targeted treatment: double cleanse, lymphatic drainage massage, and a Biologique Recherche booster, finished with a hyper-customised mask and skincare.',
            duration: '75 minutes',
          },
          {
            name: 'European Facial',
            description:
              'Double cleansing and exfoliation with extractions, followed by a soothing, calming treatment and hyper-customised skincare.',
            duration: '50 minutes',
          },
          {
            name: 'Red Carpet Facial',
            description:
              'For an event or occasion. Lymphatic massage, mechanical microdermabrasion and oxygen infusion for a brighter complexion, finished with a medical-grade hyaluronic acid second-skin treatment and patches.',
            duration: '90–120 minutes',
          },
        ],
      },
      {
        title: 'Advanced & Technology-Led',
        items: [
          {
            name: 'JetPeel Facial',
            description:
              'Jet stream technology delivering micro droplets beneath the dermis in three steps — lymphatic drainage, exfoliation, and infusion of bio-active nutrients. Needle-free, and suitable for all skin types including rosacea.',
            duration: '60 minutes',
          },
          {
            name: 'JetPeel Hair & Scalp Treatment',
            description:
              'FDA-approved technology resurfacing the skin with a two-phase stream. Treatment is delivered into the scalp to stimulate new hair growth, without the discomfort of repeated needling.',
            duration: '45 minutes',
          },
          {
            name: 'REVERSO Deep Fractional RF',
            description:
              'Deep fractional radiofrequency for skin rejuvenation and remodelling — correcting texture and tone, addressing stretch marks, tightening loose skin, restoring firmness, and refining enlarged pores.',
            duration: '60 minutes',
          },
          {
            name: 'MBR Liquid Surgery Facial',
            description:
              'Non-invasive treatment that plumps and restores volume and elasticity, using MBR Liquid Surgery Serum with the remodelling face machine, micro-needling and LED light therapy.',
            duration: '90–120 minutes',
          },
          {
            name: 'Biolift Facial',
            description:
              'A non-surgical facelift treatment using the remodelling face machine, combining electrical and high-frequency currents with Biologique Recherche products.',
            duration: '45 minutes',
          },
          {
            name: 'Lift CVS Microdermabrasion Facial',
            description:
              'Micro-crystalline algae, silk extracts and natural amino acids combined with modulating techniques and massage to redefine contours and firm the oval of the face.',
            duration: '75 minutes',
          },
        ],
      },
      {
        title: 'Targeted & Corrective',
        items: [
          {
            name: 'Brightening Facial',
            description:
              'Designed to correct pigmentation and prevent the formation of age spots, using the Biologique Recherche PIGM 400 line.',
            duration: '60 minutes',
          },
          {
            name: 'Micro-Puncture Collagen Infusion Facial',
            description:
              'A face and neck treatment that boosts fibroblasts to produce collagen and elasticity, without numbing cream. Finished with a Biologique Recherche collagen mask for hydration.',
            duration: '90 minutes',
          },
          {
            name: 'Micro-Puncture Classic',
            description:
              'Micro-stimulations remodel the deeper dermal layer for regeneration, resurfacing and firmness, while increasing penetration of regenerating vitamin and growth factor serum.',
            duration: '60 minutes',
          },
          {
            name: 'Triple Lift Facial',
            description:
              'Lifting, firming and plumping, using two Biologique Recherche boosters — Lift CVS and Restructurant Soin Lissant — with the remodelling face machine for a third and final lift.',
            duration: '120 minutes',
          },
          {
            name: 'Re-Oxygenating Facial',
            description:
              'Biologique Recherche VIPO2 booster delivers oxygen through a unique application and targeted massage, helping asphyxiated skin restore a healthier, brighter complexion.',
            duration: '75 minutes',
          },
          {
            name: 'Seconde Peau Facial',
            description:
              'An electrospun mask strip of medical-origin hyaluronic acid for a regenerating action that stimulates collagen synthesis and reduces the depth of lines. Recommended alongside injectables or to support recovery after procedures.',
            duration: '60 minutes',
          },
          {
            name: 'Biovecteur Marin Facial',
            description:
              'Fine leaves of algae extract, custom-cut to the structure of the face and moistened with fluid and serums, finished with a cold mask to optimise the marine oligo-elements and minerals.',
            duration: '75 minutes',
          },
          {
            name: 'Soin Restructurant et Lissant Facial',
            description:
              'Hyaluronic acid with silk and royal jelly, applied with smoothing, sculpting and pulsing techniques to boost repair capacity for sensitive, stressed skin.',
            duration: '75 minutes',
          },
          {
            name: 'Toleskin Facial',
            description:
              'Developed for intolerant skin that no longer tolerates classic treatment. Calms reactivity and reduces sensitivity, itching and redness — ideal for intense sensitivity or post-procedure skin.',
            duration: '60 minutes',
          },
          {
            name: 'Dermaplaning Facial',
            description:
              'A medical-grade blade removes the outermost layer of skin along with unwanted hair for a smooth, radiant finish. Can be added to any facial.',
            duration: '60 minutes',
          },
        ],
      },
      {
        title: 'Enhancements',
        intro: 'Added to any facial, selected in consultation.',
        simpleItems: [
          'Collagen Mask',
          'Caviar Mask',
          'Brightening PIGM 400 Mask',
          'Anti-Crises Toleskin Mask',
          'Platysma Chin Mask',
          'Micro-needling',
          'Microcurrent',
          'Dermaplaning',
          'LED Light Therapy',
          'Oxygen Therapy',
          'Peel',
          'Eye Treatment',
          'Hand Treatment',
          'Leg Treatment',
          'Detox Body Wrap',
        ],
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
              'A skin-hydrating injectable rather than a traditional filler — deeply hydrates and improves firmness and elasticity for a healthier, more radiant complexion.',
          },
          {
            name: 'Radiesse',
            description:
              'A filler that also stimulates collagen, adding immediate lift while helping the body build new collagen for definition and firmness that improves over time.',
          },
          {
            name: 'Sculptra',
            description:
              'A collagen-stimulating injectable that gradually restores volume by encouraging the body to make its own collagen — subtle, natural fullness over months.',
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
              'Proactive, whole-mouth care — preventive hygiene and oral health maintenance, complete evaluations and treatment planning with digital imaging, and prompt emergency dentistry when it is needed.',
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
          'The equipment and in-house lab behind the clinical work — not separately bookable.',
        items: [
          {
            name: 'In-House Ceramic Lab',
            description:
              'An on-site milling centre powered by CAD/CAM and 3D printing, integrated with Exocad, CEREC and coDiagnostiX. Restorations from single crowns to full-mouth ceramics are often designed and fabricated in a single visit.',
          },
          {
            name: '3D Cone Beam CT',
            description:
              'High-resolution three-dimensional imaging of teeth, jaws, sinuses and surrounding structures, at lower radiation than traditional CT — allowing earlier detection and precise implant planning.',
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
];

export function getServiceMenu(slug: string): ProviderMenu | undefined {
  return serviceMenus.find((m) => m.slug === slug);
}
