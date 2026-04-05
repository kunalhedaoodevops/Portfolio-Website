/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    webpack: (config, { isServer }) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            path: false,
            crypto: false,
        };

        config.experiments = {
            ...config.experiments,
            asyncWebAssembly: true,
            layers: true,
        };

        config.module.rules.push({
            test: /\.wasm$/,
            type: 'webassembly/async',
        });

        return config;
    },
};

export default nextConfig;
