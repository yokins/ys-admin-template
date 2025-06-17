<template>
    <AdminTemplate>
        <template #header> </template>

        <template #sider> </template>

        <template #tabs> </template>

        <slot></slot>

        <template #footer>
            <n-text depth="3">
                {{ configStore.layout.footer.text }}
            </n-text>
        </template>
    </AdminTemplate>
</template>

<script lang="jsx" setup>
import { useConfigStore } from "@/stores/config";
import AdminTemplate from "@/layouts/components/AdminTemplate.vue";

const configStore = useConfigStore();
</script>
