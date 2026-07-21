import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-ivory pt-40">
      <Container size="narrow" className="text-center">
        <p className="eyebrow justify-center">Page not found</p>
        <h1 className="mt-6 font-serif text-display-lg text-ink">28</h1>
        <p className="mx-auto mt-6 max-w-md font-sans leading-relaxed text-muted">
          The page you&rsquo;re looking for isn&rsquo;t here. It may have moved, or the link may be
          incomplete.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-ink px-8 py-4 font-sans text-[0.8rem] uppercase tracking-wide text-ivory transition-colors duration-400 hover:bg-charcoal"
          >
            Return Home
          </Link>
          <Link href="/collective" className="link-underline">
            Explore the Collective
          </Link>
        </div>
      </Container>
    </section>
  );
}
