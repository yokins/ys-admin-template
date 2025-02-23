import {defaultMeta} from '../basic';
import routeMap from '../routeMap';
import layouts from '@/layouts';

export default [
    {
        path: '/',
        name: 'root',
        ...routeMap.home,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout',
            isMenu: true,
            zIndex: 1000000,
            title: '主页'
        }
    },
    {
        path: '/users',
        name: 'users',
        ...routeMap.users,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout',
            isMenu: true,
            zIndex: 900000,
            title: '用户管理'
        }
    },
    {
        path: '/users/new',
        name: 'users_new',
        ...routeMap.users_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },
    {
        path: '/users/:id/edit',
        name: 'users_edit',
        ...routeMap.users_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },
    {
        path: '/roles',
        name: 'roles',
        ...routeMap.roles,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout',
            isMenu: true,
            zIndex: 700000,
            title: '角色管理'
        }
    },
    {
        path: '/categories',
        name: 'categories',
        ...routeMap.categories,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout',
            isMenu: true,
            zIndex: 600000,
            title: '栏目管理'
        }
    },
    {
        path: '/categories/new',
        name: 'categories_new',
        ...routeMap.categories_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },
    {
        path: '/categories/:id/edit',
        name: 'categories_edit',
        ...routeMap.categories_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },
    {
        path: '/articles',
        name: 'articles',
        ...routeMap.articles,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout',
            isMenu: true,
            zIndex: 500000,
            title: '文章管理'
        }
    },
    {
        path: '/articles/new',
        name: 'articles_new',
        ...routeMap.articles_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },
    {
        path: '/articles/:id/edit',
        name: 'articles_edit',
        ...routeMap.articles_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },
    {
        path: '/materials',
        name: 'materials',
        ...routeMap.materials,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout',
            isMenu: true,
            zIndex: 500000,
            title: '素材管理'
        }
    },
    {
        path: '/materials/new',
        name: 'materials_new',
        ...routeMap.materials_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },
    {
        path: '/materials/:id/edit',
        name: 'materials_edit',
        ...routeMap.materials_form,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout'
        }
    },

    {
        path: '/records',
        name: 'records',
        ...routeMap.records,
        meta: {
            ...defaultMeta,
            layout: 'AdminLayout',
            isMenu: true,
            zIndex: 500000,
            title: '发布记录'
        }
    }
];
