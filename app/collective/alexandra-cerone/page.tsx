import type { Metadata } from 'next';
import { ProviderPage } from '@/components/sections/ProviderPage';
import { getProvider } from '@/content/providers';

const provider = getProvider('alexandra-cerone')!;

export const metadata: Metadata = {
  title: 'Alexandra Cerone, MS, RDN, CDN, CSOWM - Nutrition & Metabolic Health',
  description:
    'Alexandra Cerone is a registered dietitian nutritionist and board-certified specialist in obesity and weight management at 28 in Tribeca, offering one-on-one nutrition consultations.',
  alternates: { canonical: '/collective/alexandra-cerone' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: provider.name,
  honorificSuffix: provider.credentials,
  jobTitle: 'Registered Dietitian Nutritionist',
  description: provider.cardStatement,
  worksFor: { '@type': 'Organization', name: '28 - Wellness & Aesthetics' },
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
