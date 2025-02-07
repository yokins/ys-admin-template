import {RouterLink} from 'vue-router';
import {h} from 'vue';
import i18n from '@/i18n';

const routeType = {
    NODE: Symbol('节点'),
    PAGE: Symbol('页面')
};

/**
 * @description: 基础meta属性
 * @return {*}
 */
export const defaultMeta = {
    // 检查是否登录
    skipAuth: false,
    // 检查是否页面缓存
    keepAlive: false,
    // 页面的标题（可为空）
    title: '',
    // 页面的icon（可为空）
    icon: '',
    // 页面的母版
    layout: 'default',
    // 页面的类型
    routeType: 'PAGE',
    // 是否是主页
    isRoot: false,
    // 这两个参数为了生成菜单
    zIndex: 0,
    isMenu: false
};

export const basicRoutes = [
    {
        path: '/auth/login',
        name: 'auth_login',
        meta: {
            ...defaultMeta,
            layout: 'default',
            skipAuth: true
        },
        component: () => import('@/views/auth/Login.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'error',
        component: () => import('@/views/error/Index.vue'),
        meta: {
            ...defaultMeta,
            layout: 'default',
            skipAuth: true
        }
    }
];

/**
 * @description: 生成路由-拼接固定的路由以及动态添加的路由
 * @param {*} insertRoutes
 * @return {*}
 */
export const genRoutes = (insertRoutes = []) => {
    return [...insertRoutes, ...basicRoutes];
};

export const genMenu = (route) => {
    return {
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: route.name
                    }
                },
                {default: () => i18n.global.t(`menu.${route.name}`)}
            ),
        key: route.name
    };
};

/**
 * @description: 获取菜单路由
 * @param {*} routes
 * @return {*}
 */
export const getMenus = (routes = []) => {
    const list = routes.filter((route) => route.meta?.isMenu);
    list.sort((a, b) => {
        if (a.meta?.zIndex < b.meta?.zIndex) return 1;
        if (a.meta?.zIndex > b.meta?.zIndex) return -1;
        return 0;
    });
    const menus = list.map((route) => {
        const menu = genMenu(route);
        if (route.children?.length > 0) {
            menu.children = getMenuRoutes(route.children);
        }
        return menu;
    });
    return menus;
};
