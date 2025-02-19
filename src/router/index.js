import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import NormalMode from './modes/normal';
import {genRoutes} from './basic';
import guards from './guards';

const routes = genRoutes(NormalMode);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

Object.keys(guards.before).forEach((key) => {
    router.beforeEach(guards.before[key]);
});

Object.keys(guards.after).forEach((key) => {
    router.afterEach(guards.after[key]);
});

export default router;
