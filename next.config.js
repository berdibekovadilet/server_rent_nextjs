/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  env: {
    GOOGLE_ANALYTICS_ID: "G-8BHR6064F5",
  },
};

module.exports = nextConfig;
