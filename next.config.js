/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    compiler: {
        removeConsole: {
            exclude: ['error', 'info', 'warn'],
        },
    },
    experimental: {
        serverComponentsExternalPackages: ['@elastic/ecs-winston-format'],
    }
}

module.exports = nextConfig
