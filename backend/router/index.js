import Router from 'koa-router';
import AuthRouter from './auth-router.js';

const router = new Router({
  prefix: '/api'
});
router.use('/auth', AuthRouter.routes(), AuthRouter.allowedMethods());

export default router
