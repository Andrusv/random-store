const { DataTypes, Sequelize } = require('sequelize');
const { SQL } = require('../../libs/SQL');
const { OrdersModel } = require('../orders/model');
const { ProductsModel } = require('../products/model');

const TABLE_NAME = 'Orders_products'
const ordersProductsSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: OrdersModel,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: ProductsModel,
      key: 'id'
    },
    onDelete: 'SET NULL'
  }
};

const OrdersProductsModel = SQL.define(TABLE_NAME, ordersProductsSchema, {
  updatedAt: false,
});

// eslint-disable-next-line no-unused-vars
const associations = (models) => {
  //
}

module.exports = { OrdersProductsModel, TABLE_NAME, ordersProductsSchema, associations };
