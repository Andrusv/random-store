const { CustomersModel } = require('./model');

function createCustomer(customer) {
  return new CustomersModel(customer).save()
}

function getAllCustomers(limit) {
  return CustomersModel.findAll({limit});
}

function getCustomerById(customerId) {
  return CustomersModel.findByPk(customerId);
}

function modifyCustomer(customer, customerId) {
  return CustomersModel.update(customer, { where: { id: customerId } })
}

function deleteCustomer(customerId) {
  return CustomersModel.destroy({
    where: { id: customerId },
  });
}

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  modifyCustomer,
  deleteCustomer,
};
