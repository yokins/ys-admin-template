import { createRouter, createWebHistory } from "vue-router";
import NormalMode from "./modes/normal";
import { genRoutes } from "./basic";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: genRoutes(NormalMode)
});

export default router;
