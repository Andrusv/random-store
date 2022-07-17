const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');

const TABLE_NAME = 'Users'
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

const UsersModel = SQL.define(TABLE_NAME, userSchema);

// UsersModel.sync({ force: true });

module.exports = { UsersModel, TABLE_NAME, userSchema };
