export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

/** Primary navigation — calm, six items max. */
export const primaryNav: NavLink[] = [
  { label: 'About 28', href: '/about' },
  { label: 'The Collective', href: '/collective' },
  { label: 'Signature Experiences', href: '/signature-experiences' },
  { label: 'Membership', href: '/membership' },
  { label: 'The Space', href: '/the-space' },
];

/** Provider quick-links surfaced in the mobile menu and footer. */
export const providerNav: NavLink[] = [
  { label: 'Yulia Gerchik Studio', href: '/collective/yulia-gerchik-studio' },
  { label: 'NYC Dental Smiles', href: '/collective/nyc-dental-smiles' },
  { label: 'Dr. Evia Nano', href: '/collective/dr-evia-nano' },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Explore',
    links: [
      { label: 'About 28', href: '/about' },
      { label: 'The Collective', href: '/collective' },
      { label: 'Signature Experiences', href: '/signature-experiences' },
      { label: 'Membership', href: '/membership' },
      { label: 'The Space', href: '/the-space' },
    ],
  },
  {
    heading: 'The Collective',
    links: providerNav,
  },
  {
    heading: 'Visit',
    links: [
      { label: 'Book a Consultation', href: '/consultation' },
      { label: 'Plan Your Visit', href: '/the-space' },
    ],
  },
];
