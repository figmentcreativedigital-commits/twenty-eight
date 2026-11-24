import type { Metadata } from 'next';
import { ProviderPage } from '@/components/sections/ProviderPage';
import { getProvider } from '@/content/providers';

const provider = getProvider('nyc-dental-smiles')!;

export const metadata: Metadata = {
  title: 'New York City Dental Smiles - Dentistry & Smile Aesthetics',
  description:
    'New York City Dental Smiles by Dr. Edgard El Chaar at 28 in Tribeca. Cosmetic, restorative, implant, and preventive dentistry, built on the belief that oral health is inseparable from overall health.',
  alternates: { canonical: '/collective/nyc-dental-smiles' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: provider.name,
  description: provider.cardStatement,
  parentOrganization: { '@type': 'Organization', name: '28 - Wellness & Aesthetics' },
  areaServed: 'New York, NY',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProviderPage provider={provider} />
    </>
  );
}
