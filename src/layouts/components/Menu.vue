<template>
    <n-menu
        :options="menus"
        :value="route.name"
    />
</template>

<script lang="jsx" setup>
import {RouterLink} from 'vue-router';
// import {getMenus} from '@/router/basic';
const router = useRouter();
// const menus = getMenus(router.getRoutes());
const route = useRoute();

const menus = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'root'
                    }
                },
                {default: () => '首页'}
            ),
        key: 'root'
    },
    {
        label: '内容管理',
        key: 'content-management',
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                name: 'articles'
                            }
                        },
                        {default: () => '草稿箱'}
                    ),
                key: 'articles'
            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                name: 'materials'
                            }
                        },
                        {default: () => '素材库'}
                    ),
                key: 'materials'
            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                name: 'records'
                            }
                        },
                        {default: () => '发布记录'}
                    ),
                key: 'records'
            }
        ]
    },
    {
        label: '互动管理',
        key: 'interaction-management',
        children: [
            {
                label: () => '留言',
                key: 'comments'
            }
        ]
    }
];
</script>
