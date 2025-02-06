export default [
    {
        url: "/api/v1/auth/logout",
        method: "post",
        response: () => {
            return {
                code: 200,
                data: null,
                message: "登出成功"
            };
        }
    },
    {
        url: "/api/v1/auth/login",
        method: "post",
        response: ({ body }) => {
            const { username, password } = body;

            // 模拟用户验证
            if (username === "admin" && password === "123456") {
                return {
                    code: 200,
                    data: {
                        token: "mock-token-" + Date.now(),
                        id: 1,
                        username: "admin",
                        nickname: "管理员",
                        avatar: "https://avatars.githubusercontent.com/u/1",
                        roles: ["admin"],
                        permissions: ["*"]
                    },
                    message: "登录成功"
                };
            }

            // 用户名或密码错误
            return {
                code: 401,
                data: null,
                message: "用户名或密码错误"
            };
        }
    }
];
