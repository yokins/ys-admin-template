<template>
    <n-tabs
        type="card"
        closable
        :value="tabsStore.currentTab"
        @close="(name) => tabsStore.deleteTab({ name })"
    >
        <template #prefix>
            <n-button text>
                <template #icon>
                    <GoStart theme="outline" />
                </template>
            </n-button>
        </template>
        <template
            v-for="(item, index) in tabsStore.tabs || []"
            :key="index"
        >
            <n-tab
                :name="item.name"
                @contextmenu.prevent="handleContextMenu($event, tab)"
            ></n-tab>
        </template>
        <template #suffix>
            <n-flex align="center">
                <n-button text>
                    <template #icon>
                        <GoEnd theme="outline" />
                    </template>
                </n-button>
                <n-dropdown
                    trigger="click"
                    :options="options"
                    @select="handleSelect"
                >
                    <n-button text>
                        <template #icon>
                            <ApplicationMenu theme="outline" />
                        </template>
                    </n-button>
                </n-dropdown>
            </n-flex>
        </template>
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
</template>

<script lang="jsx" setup>
import { useTabsStore } from "@/stores/tabs";
import { GoStart, GoEnd, ApplicationMenu, Clear } from "@icon-park/vue-next";

const tabsStore = useTabsStore();

tabsStore.init();

const options = [
    {
        label: "关闭全部",
        key: "delete_all",
        icon: () => {
            return (
                <NIcon>
                    <Clear theme="outline" />
                </NIcon>
            );
        }
    }
];
const handleSelect = (key) => {
    if (key === "delete_all") {
        tabsStore.deleteAllTabs();
    }
};

// 右键菜单相关
const showDropdown = ref(false);
const dropdownX = ref(0);
const dropdownY = ref(0);
const currentTab = ref(null);

const dropdownOptions = [
    {
        label: "刷新",
        key: "refresh"
    },
    {
        label: "关闭其他",
        key: "closeOthers"
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
        case "refresh":
            break;
        case "closeOthers":
            break;
    }
    showDropdown.value = false;
};
</script>

<style lang="scss" scoped></style>
