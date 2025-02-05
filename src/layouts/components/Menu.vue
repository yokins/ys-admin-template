<template>
    <n-menu
        :options="menus"
        :value="route.name"
    />
</template>

<script lang="jsx" setup>
import { getMenus } from "@/router/basic";

const router = useRouter();
const menus = getMenus(router.getRoutes());

const route = useRoute();
</script>
