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
  // Remove basePath for GitHub Pages
  // basePath: '/AIAutomationStudioLanding',
  // assetPrefix: '/AIAutomationStudioLanding',
}

module.exports = nextConfig
