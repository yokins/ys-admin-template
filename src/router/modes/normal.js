import { defaultMeta } from "../basic";
import routeMap from "../routeMap";
import layouts from "@/layouts";

export default [
    {
        path: "/",
        name: "root",
        ...routeMap.home,
        meta: {
            ...defaultMeta,
            layout: "AdminLayout"
        }
    },
    {
        path: "/users",
        ...routeMap.users,
        meta: {
            ...defaultMeta,
            layout: "AdminLayout"
        }
    },
    {
        path: "/users/:id",
        ...routeMap.users_detail,
        meta: {
            ...defaultMeta,
            layout: "AdminLayout"
        }
    },
    {
        path: "/roles",
        name: "roles",
        ...routeMap.home,
        meta: {
            ...defaultMeta,
            layout: "AdminLayout"
        }
    }
];
