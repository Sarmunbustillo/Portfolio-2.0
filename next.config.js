/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // 'www.datocms-assets.com'
                protocol: 'https',
                hostname: 'www.datocms-assets.com',
                port: '',
            },
        ],
    },
    experimental: {
        appDir: true,
    },

    reactStrictMode: true,
};

module.exports = nextConfig;
