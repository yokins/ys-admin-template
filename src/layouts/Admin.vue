<template>
    <AdminLayout>
        <template #header>
            <HeadBar></HeadBar>
        </template>
        <router-view></router-view>

        <template #footer>
            <n-text depth="3">
                {{ configStore.layout.footer.text }}
            </n-text>
        </template>
    </AdminLayout>
</template>

<script lang="jsx" setup>
import AdminLayout from "@/components/layouts/AdminLayout.vue";
import HeadBar from "@/layouts/components/HeadBar.vue";
import { useConfigStore } from "@/stores/config";

const configStore = useConfigStore();
</script>
