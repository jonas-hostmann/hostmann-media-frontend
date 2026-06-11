/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.hostmann-media.de',
      },
    ],
  },
};

module.exports = nextConfig;
