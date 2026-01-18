/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    reactCompiler: false,
  },
}

module.exports = nextConfig
