import i18n from "@/i18n";
import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
    state: () => {
        return {
            // 语言
            lang: "zh-CN",
            // 配色
            colors: [
                "#65647C",
                "#1890ff",
                "#FFCFEF",
                "#0A97B0",
                "#0A5EB0",
                "#D8C4B6",
                "#F6B17A",
                "#E16A54",
                "#987D9A",
                "#8ACDD7"
            ],
            // 布局
            layout: {
                header: {
                    height: 48
                },
                tabs: {
                    height: 40
                },
                sider: {
                    width: 250
                },
                footer: {
                    height: 30,
                    text: "© 2025 YokinsAdmin Template"
                },
                sizes: {
                    padding: 8,
                    margin: 8,
                    iconSize: 16
                }
            },
            // naive ui的主题覆盖
            themeOverride: {
                common: {
                    primaryColor: "#2d8cf0"
                }
            }
        };
    },
    getters: {},
    actions: {
        setLang(lang = "zh-CN") {
            this.lang = lang;
            i18n.global.locale = lang;
        }
    },
    persist: true
});
