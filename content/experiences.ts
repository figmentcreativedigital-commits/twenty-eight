/**
 * Personalized Programs (route: /signature-experiences).
 * Coordinated, multidisciplinary programs. NOT fixed discount bundles.
 * No pricing, no promised outcomes. Mirrors the approved staging build.
 *
 * Slugs are kept from the original program names so existing anchor links
 * (/signature-experiences#wedding-edit, etc.) keep working.
 */

export type Experience = {
  slug: string;
  name: string;
  /** One-line summary used on the home page cards. */
  summary: string;
  /** Fuller description, one or more paragraphs. */
  description: string[];
  /** Who it is for. */
  forWhom: string;
  /** Label for the disciplines row. */
  areasLabel: string;
  /** Disciplines that may be involved (illustrative). */
  disciplines: string[];
  /** How the approach works. */
  approach: string;
  /** Optional sub-feature block (e.g. the 28 Wellness Score). */
  feature?: { title: string; body: string[] };
  ctaLabel: string;
  image: string;
};

export const experiencesIntro = {
  hero: {
    eyebrow: 'Personalized Programs',
    headline: 'Your Health. Your Goals. Your Journey',
    supporting:
      'At 28, we believe that achieving optimal health and well-being requires a personalized approach. Our programs bring together expertise in preventive medicine, nutrition, dentistry, skin health, and aesthetics to address your individual needs and aspirations.',
  },
  howItWorks: {
    eyebrow: 'How It Works',
    headline: 'One plan, coordinated across multiple disciplines.',
    body: 'Whether your goal is to improve your overall wellness, enhance your appearance, or invest in your long-term health, our specialists collaborate to create a coordinated experience designed around you.',
  },
  closing: {
    eyebrow: 'Begin Your Journey',
    headline: 'Your Journey Begins Here',
    body: 'Your Health. Your Goals. Your Future. Every journey toward better health begins with understanding your individual needs and aspirations. Whether you are interested in a specific service, a comprehensive wellness assessment, or a personalized program, our team will help you explore the possibilities and identify the approach that is right for you. At 28, your care is guided by expertise, connected through collaboration, and designed around what matters most - your long-term health and well-being.',
  },
};

export const experiences: Experience[] = [
  {
    slug: 'signature-28-experience',
    name: '28 Comprehensive Wellness Assessment',
    summary:
      'A comprehensive, multidisciplinary assessment that evaluates your individual needs and long-term wellness goals.',
    description: [
      'Your journey toward healthier living begins with a comprehensive understanding of you. 28 Comprehensive Wellness Assessment brings together expertise in preventive medicine, nutrition, oral health, skin health, and aesthetics to evaluate your individual needs, lifestyle, and long-term wellness goals.',
      'Through a personalized, multidisciplinary approach, our specialists help identify opportunities for prevention, optimization, and enhancement - creating a coordinated wellness roadmap designed to support your health, vitality, and quality of life.',
    ],
    forWhom:
      'Individuals seeking a deeper understanding of their overall health and well-being, whether they are beginning their wellness journey, addressing specific concerns, or taking a proactive approach to healthy aging and longevity.',
    areasLabel: 'Areas of Assessment',
    disciplines: [
      'Preventive Medicine',
      'Nutrition & Metabolic Health',
      'Oral Health & Dentistry',
      'Skin Health & Aesthetics',
    ],
    approach:
      'A personalized, multidisciplinary assessment designed to identify your priorities, establish meaningful wellness goals, and develop a coordinated plan for your long-term health. With dedicated concierge support, you receive a clear, actionable wellness roadmap that can be implemented at your own pace.',
    ctaLabel: 'Request Your Wellness Assessment',
    image: '/images/derm.png',
  },
  {
    slug: 'executive-refresh',
    name: 'The Executive Wellness Program',
    summary:
      'A personalized approach to health, vitality, and professional well-being for individuals with demanding schedules.',
    description: [
      'A personalized approach to health, vitality, and professional well-being, designed for individuals with demanding schedules. Combining preventive medicine, nutrition, oral health, skin health, and aesthetics, this program focuses on optimizing wellness, maintaining a confident appearance, and supporting long-term health - all with minimal disruption to your lifestyle.',
    ],
    forWhom:
      'Executives, entrepreneurs, and busy professionals who prioritize their health, value discretion and efficiency, and seek a proactive approach to wellness, healthy aging, and personal confidence.',
    areasLabel: 'Areas We May Explore',
    disciplines: [
      'Preventive Medicine',
      'Nutrition & Metabolic Health',
      'Oral Health & Dentistry',
      'Skin Health & Aesthetics',
    ],
    approach:
      'A focused, personalized plan developed around your individual health priorities, professional commitments, and long-term goals. Through coordinated appointments, interdisciplinary collaboration, and dedicated concierge support, we make it easier to integrate preventive care and wellness into even the most demanding schedules.',
    ctaLabel: 'Request an Executive Wellness Consultation',
    image: '/images/yulia.png',
  },
  {
    slug: 'wedding-edit',
    name: 'The Milestone Experience',
    summary:
      "Personalized care in dentistry, skin health, and aesthetics to help you prepare for weddings and life's milestone events.",
    description: [
      "Look your best, feel your best, and approach life's most meaningful moments with confidence. The Milestone Experience brings together personalized care in dentistry, skin health, aesthetics, and wellness to help you prepare for weddings, celebrations, and important life events.",
      'Through thoughtful planning and coordinated expertise, we create a personalized program that enhances your natural appearance, supports your well-being, and allows you to enjoy the journey leading up to your special occasion.',
    ],
    forWhom:
      'Individuals preparing for weddings, anniversaries, milestone celebrations, or important personal and professional events who want to look and feel their best without compromising their natural appearance.',
    areasLabel: 'Areas We May Explore',
    disciplines: [
      'Smile Aesthetics',
      'Skin Health',
      'Aesthetic Medicine',
      'Personalized Nutrition & Wellness',
    ],
    approach:
      'A carefully coordinated, timeline-based plan developed around your goals and the date of your event. Our specialists collaborate to recommend appropriate treatments, allow adequate time for recovery and results, and create a seamless experience supported by dedicated concierge coordination.',
    ctaLabel: 'Plan Your Milestone Experience',
    image: '/images/membership.png',
  },
  {
    slug: 'longevity-collection',
    name: 'The Healthy Longevity Program',
    summary:
      'A proactive, personalized approach to maintaining health, vitality, and quality of life, anchored by the 28 Wellness Score.',
    description: [
      'A proactive, personalized approach to maintaining health, vitality, and quality of life throughout every stage of life. The Healthy Longevity Program brings together preventive medicine, nutrition, oral health, skin health, and wellness to support healthy aging through science-driven care and ongoing assessment.',
      'Rather than focusing on isolated treatments or short-term improvements, this program emphasizes prevention, early identification of health risks, and sustainable lifestyle strategies - helping you invest in your long-term well-being.',
    ],
    forWhom:
      'Individuals committed to taking a proactive role in their health, maintaining physical and mental well-being, and adopting personalized strategies that support healthier aging and long-term quality of life.',
    areasLabel: 'Areas We May Explore',
    disciplines: [
      'Preventive Medicine',
      'Nutrition & Metabolic Health',
      'Oral Health & Dentistry',
      'Skin Health & Aesthetics',
      'Lifestyle & Physical Wellness',
    ],
    approach:
      'A comprehensive initial assessment followed by a personalized wellness plan, periodic reassessments, and ongoing collaboration among our specialists. With coordinated care and dedicated concierge support, your plan evolves alongside your health needs, priorities, and long-term goals.',
    feature: {
      title: '28 Wellness Score',
      body: [
        'At the heart of our Healthy Longevity Program is the 28 Wellness Score, a personalized wellness assessment framework that brings together four essential dimensions of well-being: medical health, nutrition, oral health, and skin health.',
        'By evaluating measurable indicators across these interconnected areas, we establish a baseline wellness profile, identify opportunities for improvement, and develop a personalized plan guided by your individual needs and goals.',
        'Through periodic reassessments, the 28 Wellness Score helps you and your care team monitor changes over time, celebrate measurable progress, and refine your wellness strategy as your needs evolve.',
        'Because better health begins with understanding where you are - and making informed decisions about where you want to go.',
      ],
    },
    ctaLabel: 'Begin Your Healthy Longevity Journey',
    image: '/images/28-placeholder-f.jpeg',
  },
  {
    slug: 'smile-skin-transformation',
    name: 'The Smile & Skin Harmony Program',
    summary:
      'A personalized approach to facial aesthetics that brings together oral health, smile enhancement, and advanced skin care.',
    description: [
      'A personalized approach to facial aesthetics that brings together oral health, smile enhancement, and advanced skin care. Recognizing that a healthy smile and healthy skin contribute to overall facial harmony, this program combines the expertise of dental and skin health professionals to achieve natural, balanced, and lasting aesthetic improvements.',
      'Rather than focusing on isolated treatments, our specialists collaborate to develop a coordinated plan that respects your individual features, biological health, and personal goals.',
    ],
    forWhom:
      'Individuals seeking to enhance their smile and skin health through a thoughtful, comprehensive approach that prioritizes natural aesthetics, confidence, and long-term well-being.',
    areasLabel: 'Areas We May Explore',
    disciplines: [
      'Oral Health & Smile Aesthetics',
      'Advanced Skin Health',
      'Aesthetic Medicine',
      'Personalized Skin Care',
    ],
    approach:
      'A collaborative assessment by dental and skin health specialists, followed by a personalized treatment plan designed around your goals. Treatments are carefully coordinated and sequenced to support comfort, appropriate healing, and harmonious aesthetic results.',
    ctaLabel: 'Explore Your Smile & Skin Program',
    image: '/images/dental.png',
  },
  {
    slug: 'custom-concierge-plan',
    name: '28 Bespoke Wellness Program',
    summary:
      'A fully personalized approach to health, wellness, and aesthetics, designed around your individual needs, lifestyle, and aspirations.',
    description: [
      'A fully personalized approach to health, wellness, and aesthetics, designed around your individual needs, lifestyle, and aspirations. 28 Bespoke Wellness Program brings together expertise across preventive medicine, nutrition, dentistry, skin health, and aesthetics to create a coordinated care experience that is uniquely yours.',
      'Whether your priorities involve preventive health, healthy aging, aesthetic enhancement, or a combination of these goals, our specialists collaborate to develop a flexible plan that evolves with you.',
    ],
    forWhom:
      'Individuals seeking a highly personalized approach to their health and well-being, particularly those with multiple priorities or goals that extend beyond a single treatment or established program.',
    areasLabel: 'Areas We May Explore',
    disciplines: [
      'Preventive Medicine',
      'Nutrition & Metabolic Health',
      'Oral Health & Dentistry',
      'Skin Health & Aesthetics',
      'Lifestyle & Wellness',
    ],
    approach:
      'Your journey begins with a conversation about your health, priorities, and personal goals. Based on your needs, our specialists develop a tailored plan that coordinates appropriate services across disciplines, with dedicated concierge support to simplify scheduling and continuity of care. As your needs and aspirations evolve, your plan can be reviewed and refined to reflect your changing priorities.',
    ctaLabel: 'Create Your Personalized Wellness Plan',
    image: '/images/28-placeholder-g.jpeg',
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
