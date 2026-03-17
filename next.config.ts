import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  // basePath is auto-injected by GitHub Actions (nextjs.yml → configure-pages)
  // basePath: '/rigayu-frontend',
  turbopack: {
    root: '..'
  }
};

export default nextConfig;
