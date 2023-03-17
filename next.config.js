/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://3.34.73.43:3000/api/:path*',
      }
    ]
  }
}

module.exports = nextConfig
