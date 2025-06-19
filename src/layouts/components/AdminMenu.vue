<template>
    <n-menu
        v-model:value="activeKey"
        :options="menuOptions"
        responsive
    />
</template>

<script lang="jsx" setup>
import { RouterLink } from "vue-router";

const activeKey = ref("home");
const menuOptions = ref([
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: "HomeIndex"
                    }
                },
                { default: () => "首页" }
            ),
        key: "HomeIndex"
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: "UsersIndex"
                    }
                },
                { default: () => "用户" }
            ),
        key: "UsersIndex"
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: "DepartmentsIndex"
                    }
                },
                { default: () => "部门" }
            ),
        key: "DepartmentsIndex"
    }
]);
</script>
