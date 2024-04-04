/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  googleAnalytics: {
    id: "G-T6HY1842QY", // Replace with your Measurement ID
  },
});
