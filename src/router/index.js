import { createRouter, createWebHistory } from "vue-router";
import guards from "./guards";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL || "/"),
    routes: [
        {
            path: "/",
            name: "HomeIndex",
            component: () => import("@/views/home/HomeIndex.vue")
        },
        {
            path: "/users",
            name: "UsersIndex",
            component: () => import("@/views/users/UsersIndex.vue")
        },
        {
            path: "/departments",
            name: "DepartmentsIndex",
            component: () => import("@/views/departments/DepartmentsIndex.vue")
        }
    ]
});

Object.keys(guards.before).forEach((key) => {
    router.beforeEach(guards.before[key]);
});

Object.keys(guards.after).forEach((key) => {
    router.afterEach(guards.after[key]);
});

export default router;
