import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  basePath: process.env.SITE_BASE_PATH || '',
  images: { unoptimized: true },
};
export default nextConfig;
