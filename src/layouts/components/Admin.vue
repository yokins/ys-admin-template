<template>
    <n-layout style="height: 100vh">
        <n-layout-header
            :style="headerStyle"
            bordered
        >
            <slot name="header"></slot>
        </n-layout-header>

        <n-layout
            position="absolute"
            :style="layoutStyle"
            has-sider
        >
            <n-layout-sider
                :width="configStore.layout.sider.width"
                :content-style="siderStyle"
                :native-scrollbar="false"
                bordered
            >
                <slot name="sider"></slot>
            </n-layout-sider>

            <n-layout
                position="absolute"
                :style="layoutStyle2"
            >
                <n-layout-header
                    :style="tabStyle"
                    bordered
                >
                    <slot name="tabs"></slot>
                </n-layout-header>

                <n-layout-content
                    embedded
                    position="absolute"
                    :style="layoutContentStyle"
                    :content-style="layoutContentContentStyle"
                    :native-scrollbar="false"
                >
                    <slot></slot>
                </n-layout-content>
            </n-layout>
        </n-layout>

        <n-layout-footer
            position="absolute"
            :style="footerStyle"
            bordered
        >
            <slot name="footer"></slot>
        </n-layout-footer>
    </n-layout>
</template>

<script setup>
import { useConfigStore } from "@/stores/config";

const configStore = useConfigStore();

const layoutStyle = computed(() => {
    return {
        top: `${configStore.layout.header.height}px`,
        bottom: `${configStore.layout.footer.height}px`
    };
});

const headerStyle = computed(() => {
    return {
        height: `${configStore.layout.header.height}px`,
        position: "relative"
    };
});

const siderStyle = computed(() => {
    return {
        position: "relative"
    };
});

const layoutStyle2 = computed(() => {
    return {
        left: `${configStore.layout.sider.width}px`
    };
});

const tabStyle = computed(() => {
    return {
        height: `${configStore.layout.tabs.height}px`,
        position: "relative"
    };
});

const layoutContentStyle = computed(() => {
    return {
        top: `${configStore.layout.tabs.height}px`
    };
});

const layoutContentContentStyle = computed(() => {
    return {
        padding: `${configStore.layout.padding}px`
    };
});

const footerStyle = computed(() => {
    return {
        height: `${configStore.layout.footer.height}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px"
    };
});

defineOptions({
    name: "AdminLayout"
});
</script>
