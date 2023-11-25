/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["bouxmkobrutiiuviykov.supabase.co"],
    },
};

module.exports = nextConfig;
