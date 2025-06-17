import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import AutoImport from "unplugin-auto-import/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import Components from "unplugin-vue-components/vite";
import legacy from "@vitejs/plugin-legacy";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueDevTools(),
        eslintPlugin({
            fix: true,
            exclude: [/virtual:/, /node_modules/]
        }),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "vue-i18n",
                {
                    "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
                }
            ],
            eslintrc: {
                enabled: true,
                filepath: "./.eslintrc-auto-import.js",
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
            include: ["naive-ui"],
            exclude: []
        },
        build: {
            chunkSizeWarningLimit: 4000,
            sourcemap: false
        }
    }
});
