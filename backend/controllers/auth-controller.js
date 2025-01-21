const auth = {
    login: async (ctx) => {
        const { account, password } = ctx.request.body;
        if (account === "admin" && password === "admin") {
            ctx.session.user = { account, password };
            ctx.body = { success: true };
        } else {
            ctx.body = { success: false };
        }
    }
};

export default auth;
