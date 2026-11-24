import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ConsultationForm } from './ConsultationForm';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Request a consultation at 28. Every plan starts with understanding your goals. Tell us a little about yourself and a member of our team will follow up.',
  alternates: { canonical: '/consultation' },
  robots: { index: true, follow: true },
};

export default function ConsultationPage() {
  return (
    <section className="shell py-section">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <Eyebrow>Begin Your Journey</Eyebrow>
        <h1 className="text-balance font-serif text-display-lg leading-tight text-ink">
          Book a Consultation
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted">
          Every plan starts with understanding your goals. Tell us a little about yourself and a
          member of our team will follow up.
        </p>
      </Reveal>
      <ConsultationForm />
    </section>
  );
}
