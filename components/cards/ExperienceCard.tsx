'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';
import type { Experience } from '@/content/experiences';

export function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/consultation?interest=${encodeURIComponent(experience.name)}`}
      onClick={() =>
        track('experience_click', { experience: experience.name, slug: experience.slug })
      }
      className="group block border-t border-line py-9 transition-colors duration-400 focus-visible:outline-gold-deep"
    >
      <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10">
        <span className="font-serif text-2xl text-gold">{num}</span>

        <div>
          <h3 className="font-serif text-2xl text-ink transition-colors duration-400 group-hover:text-gold-deep md:text-3xl">
            {experience.name}
          </h3>
          <p className="mt-3 max-w-2xl font-sans leading-relaxed text-muted">
            {experience.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {experience.disciplines.map((d) => (
              <li
                key={d}
                className="border border-line px-3 py-1 font-sans text-[0.68rem] uppercase tracking-wide text-muted"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        <span className="link-underline hidden md:inline-flex md:self-center">
          Request
        </span>
      </div>
    </Link>
  );
}
