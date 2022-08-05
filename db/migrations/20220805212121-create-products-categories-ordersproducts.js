'use strict';
const { productSchema, TABLE_NAME: PRODUCT_TABLE} = require('../../components/products/model')
const { categorySchema, TABLE_NAME: CATEGORY_TABLE} = require('../../components/categories/model')
const { ordersProductsSchema, TABLE_NAME: ORDER_PRODUCT_TABLE} = require('../../components/orders_products/model')

module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, ordersProductsSchema);
  },

  async down (queryInterface) {

    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE)
  }
};
