import { Reveal } from '@/components/ui/Reveal';
import { principles } from '@/content/home';

/** "What Sets 28 Apart" — four principles. Shared by Home and About. */
export function PrinciplesSection() {
  return (
    <section className="shell py-section">
      <p className="eyebrow mb-4">{principles.eyebrow}</p>
      <h2 className="mb-14 max-w-xl font-serif text-display-sm text-ink">
        {principles.headline}
      </h2>
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {principles.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 90}>
            <span className="hairline-gold mb-6 block" aria-hidden="true" />
            <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
