export default {
    error: {
        component: () => import('@/views/error/Index.vue')
    },
    home: {
        component: () => import('@/views/home/Index.vue')
    },
    roles: {
        component: () => import('@/views/roles/Index.vue')
    },
    users: {
        component: () => import('@/views/users/Index.vue')
    },
    users_form: {
        component: () => import('@/views/users/Form.vue')
    }
};
