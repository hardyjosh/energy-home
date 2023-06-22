/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['@public-assembly/builder-utils'],
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.zora.co',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
