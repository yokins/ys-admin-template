const routeType = {
    NODE: Symbol("节点"),
    PAGE: Symbol("页面")
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
    title: "",
    // 页面的icon（可为空）
    icon: "",
    // 页面的母版
    layout: "default",
    // 页面的类型
    routeType: "PAGE",
    // 是否是主页
    isRoot: false
};

export const basicRoutes = [
    {
        path: "/auth/login",
        name: "auth_login",
        meta: {
            ...defaultMeta,
            layout: "default",
            skipAuth: true
        },
        component: () => import("@/views/auth/Login.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "error",
        component: () => import("@/views/error/Index.vue"),
        meta: {
            ...defaultMeta,
            layout: "default",
            skipAuth: true
        }
    }
];

export const genRoutes = (insertRoutes = []) => {
    return [...insertRoutes, ...basicRoutes];
};
