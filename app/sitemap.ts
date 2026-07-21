import type { MetadataRoute } from 'next';
import { providers } from '@/content/providers';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://28tribeca.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${siteUrl}/collective`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/signature-experiences`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/membership`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/the-space`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/consultation`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];

  const providerRoutes: MetadataRoute.Sitemap = providers.map((p) => ({
    url: `${siteUrl}/collective/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...providerRoutes];
}
