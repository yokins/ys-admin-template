import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useTabsStore = defineStore("tabs", {
    state: () => ({
        router: null,
        tabs: [],
        currentTab: ""
    }),
    getters: {},
    actions: {
        init() {
            this.router = useRouter();
        },
        addTab(tab) {
            const { name, fullPath, path, query, params, meta } = tab;
            const index = this.tabs.findIndex((item) => item.name === name);
            if (index === -1) {
                this.tabs.push({
                    name,
                    fullPath,
                    path,
                    query,
                    params,
                    meta
                });
            }
            this.currentTab = name;
        },
        deleteTab(tab) {
            const { name } = tab;
            const index = this.tabs.findIndex((item) => item.name === name);
            const prevTab = this.tabs[index - 1];
            const nextTab = this.tabs[index + 1];
            if (prevTab) {
                this.router.push({ name: prevTab.name });
            } else if (nextTab) {
                this.router.push({ name: nextTab.name });
            }
            if (index !== -1) {
                this.tabs.splice(index, 1);
            }
        },
        deleteAllTabs() {
            this.tabs = [];
        }
    },
    persist: true
});
