/** @type {import('next').NextConfig} */

module.exports = {
  webpack(config) {
    // Configure o uso do '@svgr/webpack' loader para arquivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};