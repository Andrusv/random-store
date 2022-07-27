const { Sequelize } = require('sequelize');
const { UsersModel } = require('../components/users/model');
const { CustomersModel } = require('../components/customers/model');

function setupModels() {
  UsersModel.hasOne(CustomersModel, {
    foreignKey: {
      name: 'user_id',
      type: Sequelize.UUID,
    },
  });
  CustomersModel.belongsTo(UsersModel, {
    foreignKey: 'user_id'
  });
}

module.exports = setupModels;
