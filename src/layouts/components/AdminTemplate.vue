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
                :style="containerStyle"
            >
                <n-layout-header
                    :style="tabsStyle"
                    bordered
                >
                    <slot name="tabs"></slot>
                </n-layout-header>

                <n-layout-content
                    embedded
                    position="absolute"
                    :style="containerContentStyle"
                    :content-style="containerContentContentStyle"
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
import { useAdminStyles } from "../useData";

const configStore = useConfigStore();

const {
    headerStyle,
    siderStyle,
    tabsStyle,
    footerStyle,

    layoutStyle,
    containerStyle,
    containerContentStyle,
    containerContentContentStyle
} = useAdminStyles();

defineOptions({
    name: "AdminLayout"
});
</script>
