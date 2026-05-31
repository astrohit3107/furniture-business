/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'images.pixabay.com',
    ],
  },
};

module.exports = nextConfig;
