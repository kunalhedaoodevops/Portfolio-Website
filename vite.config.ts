import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        visualizer({ open: true }),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "robots.txt", "sitemap.xml"],
            manifest: {
                name: "Kunal Hedaoo - Portfolio",
                short_name: "Kunal Portfolio",
                description: "Full-stack developer portfolio with 3D interactive elements",
                theme_color: "#000000",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icons: [
                    {
                        src: "/logo/logo-192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any"
                    },
                    {
                        src: "/logo/logo-512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any"
                    },
                    {
                        src: "/logo/logo-maskable-192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "maskable"
                    },
                    {
                        src: "/logo/logo-maskable-512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable"
                    }
                ],
                categories: ["business", "portfolio"],
                screenshots: [
                    {
                        src: "/images/screenshot-1.png",
                        sizes: "540x720",
                        type: "image/png",
                        form_factor: "narrow"
                    },
                    {
                        src: "/images/screenshot-2.png",
                        sizes: "1280x720",
                        type: "image/png",
                        form_factor: "wide"
                    }
                ]
            },
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
                maximumFileSizeToCacheInBytes: 5000000, // 5MB
                cleanupOutdatedCaches: true,
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "google-fonts-cache",
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                            }
                        }
                    },
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|hdr|enc)$/,
                        handler: "CacheFirst",
                        options: {
                            cacheName: "image-cache",
                            expiration: {
                                maxEntries: 100,
                                maxAgeSeconds: 60 * 60 * 24 * 60 // 60 days
                            }
                        }
                    }
                ]
            },
            devOptions: {
                enabled: false,
                navigateFallback: "index.html"
            }
        })
    ],
    build: {
        target: "esnext", // modern browsers → smaller bundle
        minify: "terser", // better than esbuild for production
        terserOptions: {
            compress: {
                drop_console: true, // remove console.log
                drop_debugger: true
            }
        },
        chunkSizeWarningLimit: 2500,

        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom"],
                    gsap: ["gsap"], // 🔥 separate GSAP (important)
                    three: ["three"],
                    rapier: ["@react-three/rapier"],
                    fiber: ["@react-three/fiber"],
                    drei: ["@react-three/drei"],
                    postprocessing: ["@react-three/postprocessing"]
                }
            }
        }
    },

    optimizeDeps: {
        include: ["react", "react-dom", "gsap"]
    },

    server: {
        host: true, // allow external access
        allowedHosts: [
            "kunaltechsolutions.indevs.in",
            "local.kunaltechsolutions.indevs.in"
        ]
    }
});