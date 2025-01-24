import { defaultMeta } from "../basic";
import routeMap from "../routeMap";

export default [
    {
        path: "/",
        name: "Home",
        ...routeMap.home,
        meta: {
            ...defaultMeta,
            layout: "AdminLayout"
        }
    }
];
