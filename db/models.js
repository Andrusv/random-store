const {
  UsersModel,
  associations: userAssociations,
} = require('../components/users/model');
const {
  CustomersModel,
  associations: customerAssociations,
} = require('../components/customers/model');

function setupModels() {
  userAssociations({ CustomersModel });
  customerAssociations({ UsersModel });
}

module.exports = setupModels;
