const {
  UsersModel,
  associations: userAssociations,
} = require('../components/users/model');
const {
  CustomersModel,
  associations: customerAssociations,
} = require('../components/customers/model');
const {
  OrdersModel,
  associations: orderAssociations
} = require('../components/orders/model')

function setupModels() {
  userAssociations({ CustomersModel });
  customerAssociations({ UsersModel, OrdersModel });
  orderAssociations({ CustomersModel })
}

module.exports = setupModels;
