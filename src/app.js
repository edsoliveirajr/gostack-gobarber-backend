import express from 'express';
import routes from './routes';

class App {
  constructor() {
    // Define o express no objeto
    this.server = express();
    // Chama os middlewares
    this.middlewares();

    // Chama as rotas
    this.routes();
  }

  middlewares() {
    // Configura para permitir utilizar objetos JSON
    this.server.use(express.json());
  }

  routes() {
    // Usa as rotas do class Routes
    this.server.use(routes);
  }
}

// Exporta o objeto express
export default new App().server;
