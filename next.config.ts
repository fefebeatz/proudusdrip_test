import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**', // toutes les images venant de Sanity
      },
    ],
  },
  experimental: {
    taint: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sanity/client': require.resolve('@sanity/client'),
    }
    return config
  },
  transpilePackages: ['@sanity/client', 'sanity'],
}

export default nextConfig
