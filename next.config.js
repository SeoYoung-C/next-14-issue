/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverComponentsExternalPackages: ['@elastic/ecs-winston-format'],
    }
}

module.exports = nextConfig
