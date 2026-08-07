import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { site } from '@/content/site';
import { GA_ID } from '@/lib/analytics';
import './globals.css';

/**
 * Fonts are self-hosted (files in /public/fonts) rather than fetched from
 * Google Fonts at build time. This keeps builds reproducible and offline-safe
 * and removes a third-party runtime dependency. Both are variable fonts.
 */
const serif = localFont({
  src: '../public/fonts/CormorantGaramond-Variable.ttf',
  variable: '--font-serif',
  display: 'swap',
  weight: '300 700',
});

const sans = localFont({
  src: '../public/fonts/Inter-Variable.ttf',
  variable: '--font-sans',
  display: 'swap',
  weight: '100 900',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://28tribeca.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Wellness & Aesthetics | Tribeca, New York`,
    template: `%s · ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.fullName,
  keywords: [
    'Tribeca wellness',
    'luxury aesthetics',
    'cosmetic dentistry Tribeca',
    'medical aesthetics New York',
    'skin health',
    'beauty studio Tribeca',
  ],
  authors: [{ name: site.fullName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.fullName,
    title: `${site.name} — Wellness & Aesthetics`,
    description: site.metaDescription,
    url: siteUrl,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Wellness & Aesthetics`,
    description: site.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/favicon.svg' },
};

/** Organization-level structured data for the collective as a whole. */
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: site.fullName,
  description: site.metaDescription,
  slogan: site.tagline,
  url: siteUrl,
  areaServed: 'New York, NY',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
    // NEEDS CLIENT CONFIRMATION — streetAddress + postalCode
  },
  // Providers are represented as distinct departments so they are never
  // inaccurately merged into a single medical entity.
  department: [
    { '@type': 'HealthAndBeautyBusiness', name: 'Yulia Gerchik Studio' },
    { '@type': 'Dentist', name: 'New York City Dental Smiles' },
    { '@type': 'MedicalBusiness', name: 'Dr. Evia Nano' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        {/* Guarantee reveal-content is visible when JavaScript is unavailable. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:uppercase focus:tracking-wide focus:text-ivory"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />

        {/* GA4 — only loaded when an ID is configured. No hard-coded IDs. */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
