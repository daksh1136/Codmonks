import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  swcMinify: true,
  async redirects() {
    return [
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
