const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');
const { TABLE_NAME: USER_TABLE } = require('../users/model');

const TABLE_NAME = 'Customers';
const customerSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: { allowNull: false, type: DataTypes.STRING },
  lastName: { allowNull: false, type: DataTypes.STRING, field: 'last_name' },
  phone: { allowNull: true, type: DataTypes.STRING },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: Sequelize.UUID,
    unique: true,
    references: { model: USER_TABLE, key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

const CustomersModel = SQL.define(TABLE_NAME, customerSchema);

module.exports = { CustomersModel, TABLE_NAME, customerSchema };
