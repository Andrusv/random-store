'use strict';
const { orderSchema, TABLE_NAME } = require('../../components/orders/model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLE_NAME, orderSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
