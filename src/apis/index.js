import request from "@/utils/request";

export default {
    auth: {
        // 登录
        login: (params) => request.base.post("/auth/login", params),
        // 登出
        logout: () => request.base.post("/auth/logout")
    }
};
