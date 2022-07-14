const { DataTypes, Sequelize } = require('sequelize');
const { PostgreSQL } = require('../../libs/postgresql');

const userSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

const UsersModel = PostgreSQL.define('Users', userSchema);

UsersModel.sync({ force: true });

module.exports = { UsersModel };
