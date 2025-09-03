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
  // Add transpilation for Sanity modules
  transpilePackages: ['@sanity/client', 'sanity'],

  // Webpack configuration with proper typing
  webpack: (config, { isServer }) => {
    // Client-side fallbacks
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      }
    }

    return config
  },
}

export default nextConfig
