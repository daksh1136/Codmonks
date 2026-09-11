import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ] }];
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/blogs', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.codmonks.com' }],
        destination: 'https://codmonks.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
