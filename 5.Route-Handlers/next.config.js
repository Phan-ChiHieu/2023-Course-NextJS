/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATA_API_KEY: process.env.DATA_API_KEY,
  },
};

module.exports = nextConfig;
