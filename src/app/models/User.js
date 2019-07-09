import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    // AddHook é um evento chamado antes de salvar o model
    this.addHook('beforeSave', async user => {
      // Se a senha foi informada, salva a senha codificada
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // Compara o password recebido com o password codificado
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
