/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
      {
        source: '/auth/:path*',
        destination: 'http://localhost:3000/auth/:path*',
      }
    ]
  }
}

module.exports = nextConfig
