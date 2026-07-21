import type { Metadata } from 'next';
import { ProviderPage } from '@/components/sections/ProviderPage';
import { getProvider } from '@/content/providers';

const provider = getProvider('nyc-dental-smiles')!;

export const metadata: Metadata = {
  title: 'New York City Dental Smiles — Smile Aesthetics',
  description:
    'Cosmetic, restorative, and smile-focused dentistry within the 28 collective in Tribeca — where oral health, facial harmony, and confidence meet.',
  alternates: { canonical: '/collective/nyc-dental-smiles' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: provider.name,
  description: provider.cardStatement,
  parentOrganization: { '@type': 'Organization', name: '28 — Wellness & Aesthetics' },
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
