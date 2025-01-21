import Koa from "koa";
import os from "os";

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "Hello World";
});

const DEFAULT_PORT = 3000;
let port = process.env.PORT || DEFAULT_PORT;

const server = app.listen(port, () => {
    const interfaces = os.networkInterfaces();
    let ip = "localhost";
    for (const interfaceName in interfaces) {
        for (const net of interfaces[interfaceName]) {
            if (net.family === 'IPv4' && !net.internal) {
                ip = net.address;
            }
        }
    }
    console.log(`服务启动在 \x1b[4m\x1b[34mhttp://${ip}:${port}\x1b[0m`);
    console.log(`服务启动在 \x1b[4m\x1b[34mhttp://localhost:${port}\x1b[0m`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        port++;
        console.log(`端口 ${port - 1} 被占用，尝试使用 ${port}...`);
        server.close();
        server.listen(port);
    }
});
