import type { Metadata } from 'next';
import { ProviderPage } from '@/components/sections/ProviderPage';
import { getProvider } from '@/content/providers';

const provider = getProvider('dr-evia-nano')!;

export const metadata: Metadata = {
  title: 'Dr. Evia Nano — Aesthetic & Wellness Medicine',
  description:
    'Medical aesthetics and wellness medicine within the 28 collective in Tribeca — aesthetic procedures, peptides, weight loss, regenerative wellness, and IV infusions. Not general medical care.',
  alternates: { canonical: '/collective/dr-evia-nano' },
};

// MedicalBusiness (medical aesthetics / wellness medicine) — deliberately NOT
// a general Physician entity, per the brief's medical-accuracy requirement.
//
// `medicalSpecialty` was previously 'Dermatology'. The client confirmed
// (2026-07-20) that Dr. Nano is NOT a dermatology provider, so the property is
// omitted rather than replaced: schema.org's MedicalSpecialty enumeration has
// no value for aesthetic or wellness medicine, and asserting an inaccurate
// specialty is worse than asserting none.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
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
