const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@lib'] = path.join(__dirname, './lib/');
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
