import { ImageFrame } from '@/components/ui/ImageFrame';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

type EditorialSplitProps = {
  eyebrow?: string;
  title: string;
  body: string[];
  imageAlt: string;
  imageCaption?: string;
  imageSrc?: string;
  imageTone?: 'stone' | 'sand' | 'mushroom' | 'taupe';
  imageRatio?: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
  className?: string;
};

export function EditorialSplit({
  eyebrow,
  title,
  body,
  imageAlt,
  imageCaption,
  imageSrc,
  imageTone = 'stone',
  imageRatio = '4/5',
  reverse = false,
  cta,
  className,
}: EditorialSplitProps) {
  return (
    <section className={cn('py-section', className)}>
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={cn(reverse && 'lg:order-2')}>
          <ImageFrame
            alt={imageAlt}
            caption={imageCaption}
            src={imageSrc}
            tone={imageTone}
            ratio={imageRatio}
          />
        </Reveal>

        <Reveal delay={120} className={cn(reverse && 'lg:order-1')}>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <div className="mt-7 space-y-5">
            {body.map((p, i) => (
              <p key={i} className="max-w-prose font-sans leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          {cta ? (
            <div className="mt-9">
              <Button href={cta.href} variant="quiet" trackEvent="cta_click" trackParams={{ label: cta.label }}>
                {cta.label} →
              </Button>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
