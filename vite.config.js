import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import AutoImport from "unplugin-auto-import/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
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
        })
    ]
});
