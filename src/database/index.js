import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

// Define o model com o objeto da classe usuário
class Database {
  constructor() {
    this.init();
  }

  init() {
    // Realização a conexão com o BD passando as configurações
    this.connection = new Sequelize(databaseConfig);

    // Instancia o usuário
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
