/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' here
  },
  env: {
    SHIPENGINE_API_KEY: process.env.SHIPENGINE_API_KEY,
  },
};

module.exports = nextConfig;