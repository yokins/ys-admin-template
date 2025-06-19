import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import autoImportConfig from "./.eslintrc-auto-import.js";
import * as vueParser from "vue-eslint-parser";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,jsx,vue}"],
        plugins: { js },
        extends: ["js/recommended"]
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx,vue}"],
        languageOptions: {
            globals: { ...globals.browser, ...autoImportConfig.globals },
            parser: vueParser,
            parserOptions: {
                parser: babelParser,
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-env"],
                    plugins: ["@babel/plugin-syntax-jsx"]
                },
                ecmaVersion: 2020,
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            }
        }
    },
    pluginVue.configs["flat/essential"],
    eslintPluginPrettierRecommended,
    {
        files: ["**/*.json"],
        plugins: { json },
        language: "json/json",
        extends: ["json/recommended"]
    },
    {
        files: ["**/*.jsonc"],
        plugins: { json },
        language: "json/jsonc",
        extends: ["json/recommended"]
    },
    {
        files: ["**/*.json5"],
        plugins: { json },
        language: "json/json5",
        extends: ["json/recommended"]
    },
    {
        files: ["**/*.md"],
        plugins: { markdown },
        language: "markdown/commonmark",
        extends: ["markdown/recommended"]
    },
    {
        files: ["**/*.css"],
        plugins: { css },
        language: "css/css",
        extends: ["css/recommended"]
    }
]);
