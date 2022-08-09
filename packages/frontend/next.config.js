/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_HOST: process.env.STRAPI_HOST,
  },
};

module.exports = nextConfig;
