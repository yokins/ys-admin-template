import Router from "koa-router";
import AuthController from "../controllers/auth-controller.js";

const router = new Router();

router.post("/login", AuthController.login);

export default router;
