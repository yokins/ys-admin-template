<template>
    <AdminTemplate>
        <template #header>
            <HeadBar></HeadBar>
        </template>
        <slot></slot>
        <template #footer>
            <n-text depth="3">
                {{ configStore.layout.footer.text }}
            </n-text>
        </template>
    </AdminTemplate>
</template>

<script lang="jsx" setup>
import AdminTemplate from "@/layouts/components/Admin.vue";
import HeadBar from "@/layouts/components/HeadBar.vue";
import { useConfigStore } from "@/stores/config";

const configStore = useConfigStore();
</script>
