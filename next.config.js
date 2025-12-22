/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'export' only for production builds
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true }
}

module.exports = nextConfig
