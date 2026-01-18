/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    reactCompiler: false,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/AIAutomationStudioLanding',
  basePath: '/AIAutomationStudioLanding',
}

module.exports = nextConfig
