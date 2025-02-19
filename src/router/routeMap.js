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
    },
    categories: {
        component: () => import('@/views/categories/Index.vue')
    },
    categories_form: {
        component: () => import('@/views/categories/Form.vue')
    },
    articles: {
        component: () => import('@/views/articles/Index.vue')
    },
    articles_form: {
        component: () => import('@/views/articles/Form.vue')
    }
};
