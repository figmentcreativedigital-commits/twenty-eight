/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Provider first name corrected Avia -> Evia (client-confirmed 2026-07-20).
      {
        source: '/collective/dr-avia-nano',
        destination: '/collective/dr-evia-nano',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
