import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import legacy from "@vitejs/plugin-legacy";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";

// https://vite.dev/config/
export default defineConfig({
    define: {
        "process.env": process.env
    },
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        viteMockServe({
            mockPath: "mock",
            localEnabled: true,
            prodEnabled: false,
            injectCode: true,
            logger: true
        }),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                {
                    "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
                }
            ],
            eslintrc: {
                enabled: true,
                filepath: "./.eslintrc-auto-import.json",
                globalsPropValue: true
            }
        }),
        Components({
            resolvers: [NaiveUiResolver()]
        }),
        legacy({
            targets: ["defaults", "ie >= 11", "chrome 52", "android >= 7"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
            renderLegacyChunks: false,
            polyfills: true,
            modernPolyfills: true
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler" // or 'modern'
            }
        }
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        },
        optimizeDeps: {
            include: ["@vicons/carbon", "naive-ui"],
            exclude: []
        },
        build: {
            chunkSizeWarningLimit: 4000,
            sourcemap: false,
            rollupOptions: {
                output: {
                    entryFileNames: `assets/[name].[hash].${new Date().getTime()}.js`,
                    chunkFileNames: `assets/[name].[hash].${new Date().getTime()}.js`,
                    assetFileNames: `assets/[name].[hash].${new Date().getTime()}.[ext]`
                }
            }
        }
    }
});
