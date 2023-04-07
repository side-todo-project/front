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
        destination: `${process.env.SERVER_PROXY_API}/:path*`,
      },
      {
        source: '/auth/:path*',
        destination: `${process.env.SERVER_PROXY_AUTH}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
