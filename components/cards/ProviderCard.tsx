'use client';

import Link from 'next/link';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { track } from '@/lib/analytics';
import type { Provider } from '@/content/providers';

const tones = ['sand', 'stone', 'mushroom'] as const;

export function ProviderCard({
  provider,
  index = 0,
}: {
  provider: Provider;
  index?: number;
}) {
  const href = `/collective/${provider.slug}`;
  const tone = tones[index % tones.length];

  return (
    <Link
      href={href}
      onClick={() =>
        track('provider_card_click', { provider: provider.name, slug: provider.slug })
      }
      className="group flex h-full flex-col focus-visible:outline-gold-deep"
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-900 ease-editorial group-hover:scale-[1.03]">
          <ImageFrame
            alt={`${provider.name} — ${provider.discipline}`}
            caption={provider.heroImageNote}
            src={provider.image}
            tone={tone}
            ratio="3/4"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <p className="eyebrow mb-3">{provider.specialtyLabel}</p>
        <h3 className="font-serif text-2xl text-ink transition-colors duration-400 group-hover:text-gold-deep md:text-[1.7rem]">
          {provider.name}
        </h3>
        <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-muted">
          {provider.cardStatement}
        </p>
        <span className="link-underline mt-6 self-start">
          Visit {provider.shortName}
        </span>
      </div>
    </Link>
  );
}
