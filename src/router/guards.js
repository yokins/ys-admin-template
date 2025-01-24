import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useGlobalStore } from "@/stores/global";

NProgress.configure({ showSpinner: false });

// 按照想要加载的顺序来，从开始到结束
export default {
    before: {
        /**
         * @description: 开始加载进度条
         * @return {*}
         */
        nProgressStart() {
            NProgress.start();
        },
        /**
         * @description: 检查是否需要登录, 登录页固定，首页再议
         * @return {*}
         */
        checkLogin(to, from, next) {
            const globalStore = useGlobalStore();

            if (globalStore.currentUser) {
                if (to.name == "root" || to.name == "auth_login") {
                    next({ name: "root" });
                } else {
                    next();
                }
            } else {
                if (to.meta?.skipAuth) {
                    next();
                } else {
                    next({ name: "auth_login" });
                }
            }
        }
    },
    after: {
        /**
         * @description: 结束进度条
         * @return {*}
         */
        nProgressEnd() {
            NProgress.done();
        }
    }
};
