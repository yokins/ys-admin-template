import {defineStore} from 'pinia';
import {useRoute, useRouter} from 'vue-router';

export const useTabsStore = defineStore('tabs', {
    state: () => ({
        router: null,
        tabs: [],
        activeTab: null,
        cachedViews: []
    }),
    getters: {
        getTabList: (state) => state.tabs,
        getActiveTab: (state) => state.activeTab,
        getCachedViews: (state) => state.cachedViews
    },
    actions: {
        init() {
            this.router = useRouter();
        },
        addTab(route) {
            const {name, path, meta = {}} = route;
            const {title = '未命名页面', keepAlive = false} = meta;

            // 如果标签已存在，则不重复添加
            if (this.tabs.some((tab) => tab.name === name)) {
                this.activeTab = name;
                return;
            }

            this.tabs.push({
                title,
                name,
                path
            });

            this.activeTab = name;

            // 处理页面缓存
            if (keepAlive && !this.cachedViews.includes(name)) {
                this.cachedViews.push(name);
            }
        },
        removeTab(name) {
            const index = this.tabs.findIndex((tab) => tab.name === name);
            if (index === -1) return;

            // 如果关闭的是当前激活的标签，需要激活其他标签
            if (this.activeTab === name) {
                const nextTab = this.tabs[index + 1] || this.tabs[index - 1];
                if (nextTab) {
                    this.activeTab = nextTab.name;
                    if (!this.router) this.init();
                    this.router.push({name: nextTab.name});
                }
            }

            this.tabs.splice(index, 1);
            this.removeCachedView(name);
        },
        removeOtherTabs(name) {
            this.tabs = this.tabs.filter((tab) => tab.name === name);
            this.activeTab = name;
            this.cachedViews = this.cachedViews.filter((n) => n === name);
        },
        removeCachedView(name) {
            const index = this.cachedViews.indexOf(name);
            if (index > -1) {
                this.cachedViews.splice(index, 1);
            }
        },
        refreshTab(name, route) {
            console.log('🚀 ~ refreshTab ~ name:', name, route);
            this.removeCachedView(name);

            // 通过移除缓存并重新添加来实现刷新
            nextTick(() => {
                console.log('🚀 ~ nextTick ~ route:', route);
                if (route.meta.keepAlive) {
                    this.cachedViews.push(name);
                }
            });
        },
        clearAllTabs() {
            this.tabs = [];
            this.activeTab = null;
            this.cachedViews = [];
        }
    },
    persist: true
});
