const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');

const { TABLE_NAME: CUSTOMERS_TABLE } = require('../customers/model')

const TABLE_NAME = 'Orders'
const orderSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: CUSTOMERS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};

const OrdersModel = SQL.define(TABLE_NAME, orderSchema, {
  updatedAt: false,
});

const associations = (models) => {
  OrdersModel.belongsTo(models.CustomersModel, {
    foreignKey: 'customer_id',
  });
}

module.exports = { OrdersModel, TABLE_NAME, orderSchema, associations };
