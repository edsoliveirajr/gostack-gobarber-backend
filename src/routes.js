import { Router } from 'express';

import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

// Instancia as rotas do express
const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// Exporta as rotas
export default routes;
