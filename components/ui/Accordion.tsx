'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';

type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-400 hover:text-gold-deep"
              >
                <span className="font-serif text-xl text-ink md:text-2xl">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'relative mt-1 h-3 w-3 flex-shrink-0 transition-transform duration-400 ease-editorial',
                    isOpen && 'rotate-45'
                  )}
                >
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold-deep" />
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gold-deep" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-7 pr-10"
            >
              <p className="max-w-prose font-sans leading-relaxed text-muted">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
