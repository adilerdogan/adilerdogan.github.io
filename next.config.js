/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig; 