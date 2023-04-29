/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://team6.onrender.com/api/:path*',
      },
    ]
  },
}