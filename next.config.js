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
        destination: 'http://3.34.73.43:3000/api/:path*',
      },
      {
        source: '/auth/:path*',
        destination: 'http://3.34.73.43:3000/auth/:path*',
      }
    ]
  }
}

module.exports = nextConfig
