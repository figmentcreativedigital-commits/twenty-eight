export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

/** Primary navigation — calm, six items max. */
export const primaryNav: NavLink[] = [
  { label: 'About 28', href: '/about' },
  { label: 'The Collective', href: '/collective' },
  { label: 'Our Expertise', href: '/service-menu' },
  { label: 'Personalized Programs', href: '/signature-experiences' },
  { label: 'Membership', href: '/membership' },
  { label: 'The Experience', href: '/the-space' },
];

/** Provider quick-links in the footer (full names). */
export const providerNav: NavLink[] = [
  { label: 'Yulia Gerchik Studio', href: '/collective/yulia-gerchik-studio' },
  { label: 'New York City Dental Smiles', href: '/collective/nyc-dental-smiles' },
  { label: 'Dr. Evia Nano', href: '/collective/dr-evia-nano' },
  { label: 'Alexandra Cerone', href: '/collective/alexandra-cerone' },
];

/** Provider quick-links in the mobile menu (short names). */
export const providerNavShort: NavLink[] = [
  { label: 'Yulia', href: '/collective/yulia-gerchik-studio' },
  { label: 'New York City Dental Smiles', href: '/collective/nyc-dental-smiles' },
  { label: 'Dr. Nano', href: '/collective/dr-evia-nano' },
  { label: 'Alexandra', href: '/collective/alexandra-cerone' },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Explore',
    links: [
      { label: 'About 28', href: '/about' },
      { label: 'The Collective', href: '/collective' },
      { label: 'Our Expertise', href: '/service-menu' },
      { label: 'Personalized Programs', href: '/signature-experiences' },
      { label: 'Membership', href: '/membership' },
      { label: 'The Experience', href: '/the-space' },
    ],
  },
  {
    heading: 'The Collective',
    links: providerNav,
  },
  {
    heading: 'Visit',
    links: [
      { label: 'Book an Appointment', href: '/booking' },
      { label: 'Book a Consultation', href: '/consultation' },
      { label: 'Plan Your Visit', href: '/the-space' },
    ],
  },
];
