<template>
    <AdminTemplate>
        <template #header>
            <HeadBar></HeadBar>
        </template>

        <template #sider>
            <Menu></Menu>
        </template>

        <template #tabs>
            <Tabs></Tabs>
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
import AdminTemplate from '@/layouts/components/Admin.vue';
import HeadBar from '@/layouts/components/HeadBar.vue';
import Menu from '@/layouts/components/Menu.vue';
import Tabs from '@/layouts/components/Tabs.vue';
import {useConfigStore} from '@/stores/config';

const configStore = useConfigStore();
</script>
