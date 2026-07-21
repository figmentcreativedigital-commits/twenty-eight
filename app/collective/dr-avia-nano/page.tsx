import type { Metadata } from 'next';
import { ProviderPage } from '@/components/sections/ProviderPage';
import { getProvider } from '@/content/providers';

const provider = getProvider('dr-avia-nano')!;

export const metadata: Metadata = {
  title: 'Dr. Avia Nano — Advanced Skin Health',
  description:
    'Aesthetic medicine, dermatology, peptides, and longevity-focused care within the 28 collective in Tribeca. Advanced skin health — not general medical care.',
  alternates: { canonical: '/collective/dr-avia-nano' },
};

// MedicalBusiness (aesthetic medicine / dermatology) — deliberately NOT a
// general Physician entity, per the brief's medical-accuracy requirement.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: provider.name,
  description: provider.cardStatement,
  medicalSpecialty: 'Dermatology',
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
