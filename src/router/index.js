import { createRouter, createWebHistory } from "vue-router";
import guards from "./guards";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL || "/"),
    routes: [
        {
            path: "/",
            name: "root",
            component: () => import("@/views/home/HomeIndex.vue")
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
