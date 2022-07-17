'use strict';
const { userSchema, TABLE_NAME } = require('../../components/users/model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TABLE_NAME, userSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
