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
    }
];
