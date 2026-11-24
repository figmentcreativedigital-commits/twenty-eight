type AccordionItem = { q: string; a: string };

/**
 * FAQ list built on native <details>/<summary>: keyboard and screen-reader
 * support for free, no client JavaScript. The first item starts open.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <details key={item.q} className="group" open={i === 0}>
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-6 py-6 text-left transition-colors duration-400 hover:text-gold-deep [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-xl text-ink md:text-2xl">{item.q}</span>
            <span
              aria-hidden="true"
              className="relative mt-1 h-3 w-3 flex-shrink-0 transition-transform duration-400 ease-editorial group-open:rotate-45"
            >
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold-deep" />
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gold-deep" />
            </span>
          </summary>
          <div className="pb-7 pr-10">
            <p className="max-w-prose font-sans leading-relaxed text-muted">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
