/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

/* module.exports = {
  webpack: (config) => {
    config.entry = ["@babel/polyfill", "./src/index.js"];
    return config;
  },
};
 */
