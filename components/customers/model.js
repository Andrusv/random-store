const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');
const { UsersModel } = require('../users/model');

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
    references: { model: 'Users', key: 'id' },
   // onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

const CustomersModel = SQL.define(TABLE_NAME, customerSchema, {
  updatedAt: false,
});

UsersModel.hasOne(CustomersModel, {
  foreignKey: {
    name: 'user_id',
    type: Sequelize.UUID,
  },
});
CustomersModel.belongsTo(UsersModel, {
  foreignKey: 'user_id'
});

module.exports = { CustomersModel, TABLE_NAME, customerSchema };
