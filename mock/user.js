export default [
    {
        url: "/api/v1/user/list",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "ok",
                data: [
                    {
                        id: 1,
                        name: "张三",
                        age: 18,
                        email: "zhangsan@example.com"
                    },
                    {
                        id: 2,
                        name: "李四",
                        age: 24,
                        email: "lisi@example.com"
                    }
                ]
            };
        }
    },
    {
        url: "/api/v1/user/info",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "ok",
                data: {
                    id: 1,
                    name: "张三",
                    age: 18,
                    email: "zhangsan@example.com",
                    role: "admin"
                }
            };
        }
    }
];
