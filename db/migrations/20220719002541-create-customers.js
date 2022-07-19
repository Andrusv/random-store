'use strict';
const { customerSchema, TABLE_NAME } = require('../../components/customers/model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLE_NAME, customerSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
