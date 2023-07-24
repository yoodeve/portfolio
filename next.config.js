/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/gh-pages-test",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
