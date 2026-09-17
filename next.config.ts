import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',           // Full static export
  trailingSlash: true,        // /projects/ not /projects
  images: { unoptimized: true }, // We handle images manually via <picture>
};

export default nextConfig;
