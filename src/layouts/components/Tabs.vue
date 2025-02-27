<template>
    <div class="tabs-wrapper">
        <n-tabs
            type="card"
            :value="tabStore.activeTab"
            @update:value="handleTabChange"
        >
            <n-tab
                v-for="tab in tabStore.tabs"
                :key="tab.name"
                :name="tab.name"
                @contextmenu.prevent="handleContextMenu($event, tab)"
            >
                <div class="tab-content">
                    <span>{{ t(`menu.${tab.name}`) }}</span>
                    <n-button
                        v-if="tabStore.tabs.length > 1"
                        size="tiny"
                        quaternary
                        circle
                        class="close-button"
                        @click.stop="handleClose(tab)"
                    >
                        <template #icon>
                            <n-icon><close /></n-icon>
                        </template>
                    </n-button>
                </div>
            </n-tab>
        </n-tabs>

        <n-dropdown
            :show="showDropdown"
            :options="dropdownOptions"
            :x="dropdownX"
            :y="dropdownY"
            placement="bottom-start"
            @clickoutside="showDropdown = false"
            @select="handleDropdownSelect"
        />
    </div>
</template>

<script lang="jsx" setup>
import {ref} from 'vue';
import {useTabsStore} from '@/stores/tabs';
import {useRoute, useRouter} from 'vue-router';
import {useI18n} from 'vue-i18n';
import {Close} from '@vicons/ionicons5';

const {t} = useI18n();
const route = useRoute();
const router = useRouter();
const tabStore = useTabsStore();

// 初始化tabStore的router
tabStore.init();

// 初始化当前路由对应的标签
if (route.name && route.meta?.layout === 'AdminLayout') {
    tabStore.addTab(route);
}

// 右键菜单相关
const showDropdown = ref(false);
const dropdownX = ref(0);
const dropdownY = ref(0);
const currentTab = ref(null);

const dropdownOptions = [
    {
        label: '刷新',
        key: 'refresh'
    },
    {
        label: '关闭',
        key: 'close'
    },
    {
        label: '关闭其他',
        key: 'closeOthers'
    }
];

const handleContextMenu = (e, tab) => {
    e.preventDefault();
    showDropdown.value = true;
    dropdownX.value = e.clientX;
    dropdownY.value = e.clientY;
    currentTab.value = tab;
};

const handleDropdownSelect = (key) => {
    if (!currentTab.value) return;

    switch (key) {
        case 'refresh':
            tabStore.refreshTab(currentTab.value.name, route);
            break;
        case 'close':
            tabStore.removeTab(currentTab.value.name);
            break;
        case 'closeOthers':
            tabStore.removeOtherTabs(currentTab.value.name);
            break;
    }

    showDropdown.value = false;
};

const handleTabChange = (name) => {
    router.push({name});
};

const handleClose = (tab) => {
    tabStore.removeTab(tab.name);
};
</script>

<style scoped>
.tabs-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    box-sizing: border-box;
}

.tab-content {
    display: flex;
    align-items: center;
    gap: 4px;
}

.close-button {
    opacity: 0.6;
    transition: opacity 0.3s;
}

.close-button:hover {
    opacity: 1;
}
</style>
