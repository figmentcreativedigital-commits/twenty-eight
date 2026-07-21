import type { Metadata } from 'next';
import { ProviderPage } from '@/components/sections/ProviderPage';
import { getProvider } from '@/content/providers';

const provider = getProvider('yulia-gerchik-studio')!;

export const metadata: Metadata = {
  title: 'Yulia Gerchik Studio — Beauty & Skin',
  description:
    'Refined beauty, brows, and skin artistry within the 28 collective in Tribeca. Natural enhancement delivered with precision and an artist’s eye.',
  alternates: { canonical: '/collective/yulia-gerchik-studio' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
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
