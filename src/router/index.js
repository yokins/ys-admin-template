import { createRouter, createWebHistory } from "vue-router";

const Admin = () => import("@/layouts/Admin.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "root",
            component: Admin,
            children: [
                {
                    path: "",
                    name: "home",
                    component: () => import("@/views/home/Index.vue")
                }
            ]
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("@/views/auth/Login.vue")
        }
    ]
});

export default router;
