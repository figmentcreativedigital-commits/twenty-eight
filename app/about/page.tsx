import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { BeginSection } from '@/components/sections/BeginSection';
import { PrinciplesSection } from '@/components/sections/PrinciplesSection';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Photo } from '@/components/ui/Photo';
import { hero } from '@/content/home';

export const metadata: Metadata = {
  title: 'About 28',
  description:
    '28 brings together leaders in dentistry, preventive medicine, nutrition, aesthetics, and wellness in Tribeca to redefine how we approach health, beauty, and longevity.',
  alternates: { canonical: '/about' },
};

const difference = [
  'Traditionally, healthcare and wellness have operated in separate worlds. Medical care in one place, dentistry in another, nutrition somewhere else, and skin health and aesthetics often treated independently. Yet our bodies do not function in isolation, and neither should the care we receive.',
  '28 was created to bridge these gaps by bringing together expertise in preventive medicine, dentistry, nutrition, skin health, and aesthetics under one integrated philosophy.',
  'Through collaboration, science-driven care, and personalized wellness strategies, we look beyond individual treatments to understand the bigger picture - your health, your lifestyle, your confidence, and your long-term well-being.',
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About 28"
        headline={hero.headline}
        supporting={hero.supporting}
        primaryCta={{ label: 'Meet the Collective', href: '/collective' }}
        secondaryCta={{ label: 'Book a Consultation', href: '/consultation' }}
        imageAlt="A serene, architectural interior detail from 28's Tribeca destination."
        imageSrc="/images/28-placeholder-f.jpeg"
      />

      {/* Positioning */}
      <section className="shell py-section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Positioning</Eyebrow>
          <h3 className="text-balance font-serif text-display-sm leading-tight text-ink">
            28 brings together leaders in dentistry, preventive medicine, nutrition, aesthetics,
            and wellness to redefine how we approach health, beauty, and longevity - helping
            individuals live healthier, feel better, and age with vitality.
          </h3>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            While traditional healthcare often addresses individual needs in isolation, 28 embraces
            a more integrated philosophy: oral health, nutrition, skin health, metabolic health, and
            physical well-being are interconnected. By combining scientific expertise, personalized
            care, and a commitment to prevention, 28 creates a comprehensive approach to wellness -
            one that focuses not only on how we look today, but on how well we live tomorrow.
          </p>
        </Reveal>
      </section>

      {/* 28 Difference */}
      <section className="bg-sand/50">
        <div className="shell grid gap-12 py-section lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>28 Difference</Eyebrow>
            <h2 className="text-balance font-serif text-display-sm leading-tight text-ink">
              Healthcare Is Fragmented. Your Wellness Shouldn&rsquo;t Be.
            </h2>
            {difference.map((p) => (
              <p key={p} className="mt-6 max-w-prose font-sans leading-relaxed text-charcoal">
                {p}
              </p>
            ))}
            <p className="mt-6 max-w-prose font-serif text-xl leading-snug text-ink">
              Because living better isn&rsquo;t about treating one part of you. It&rsquo;s about
              caring for the whole of you.
            </p>
          </Reveal>
          <Photo src="/images/yulia.png" ratio="4/5" reveal="image" />
        </div>
      </section>

      {/* What Sets 28 Apart */}
      <PrinciplesSection />

      {/* North Star */}
      <section className="bg-ink text-ivory">
        <Reveal className="mx-auto max-w-4xl px-6 py-section text-center sm:px-8">
          <p className="mb-8 font-sans text-[0.72rem] uppercase tracking-eyebrow text-gold">
            Our North Star
          </p>
          <blockquote className="text-balance font-serif text-display-sm leading-tight text-ivory">
            &ldquo;To redefine the future of healthy living by bringing together science,
            prevention, and personalized care - empowering people not simply to live longer, but to
            live healthier, better, and with greater vitality.&rdquo;
          </blockquote>
        </Reveal>
      </section>

      <BeginSection
        headline="Discover a more considered approach."
        body="Meet the Collective, or begin with a consultation and a personalized roadmap."
        primaryCta={{ label: 'Request a Consultation', href: '/consultation' }}
        secondaryCta={{ label: 'Meet the Collective', href: '/collective' }}
      />
    </>
  );
}
