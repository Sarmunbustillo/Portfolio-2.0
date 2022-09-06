module.exports = {
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    images: {
        domains: ['www.datocms-assets.com'],
    },
    experimental: {
        images: {
            unoptimized: true,
        },
    },

    reactStrictMode: true,
};
