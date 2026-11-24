import type { Metadata } from 'next';
import { ProviderPage } from '@/components/sections/ProviderPage';
import { getProvider } from '@/content/providers';

const provider = getProvider('yulia-gerchik-studio')!;

export const metadata: Metadata = {
  title: 'Yulia Gerchik Studio - Skin Health & Beauty',
  description:
    'Where skin science meets health and beauty. Personalized facials, body treatments, and laser at 28 in Tribeca, guided by an assessment of your skin at every visit.',
  alternates: { canonical: '/collective/yulia-gerchik-studio' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
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
