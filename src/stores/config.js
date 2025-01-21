import i18n from "@/i18n";
import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
    state: () => {
        return {
            lang: "zh-CN",
            goldenRatio: 1.618,
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
            theme: {
                colors: {
                    primary: "#65647C"
                }
            },
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
                    text: "© 2025 YS Admin Template"
                },
                padding: 16,
                margin: 16,
                iconSize: 16
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
