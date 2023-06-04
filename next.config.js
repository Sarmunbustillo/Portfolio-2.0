/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: ['www.datocms-assets.com'],
    },
    experimental: {
        appDir: true,
    },

    reactStrictMode: true,
};

module.exports = nextConfig;
