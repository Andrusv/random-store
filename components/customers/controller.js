const Storage = require('./storage');

function createCustomer(customer) {
  return new Promise((resolve, reject) => {
    Storage.createCustomer(customer)
      .then((createdCustomer) => resolve(createdCustomer))
      .catch((error) => reject(error.errors[0].message));
  });
}

function getAllCustomers(customerId, limit) {
  return new Promise((resolve, reject) => {
    if (customerId) {
      return getCustomerById(customerId)
        .then((customer) => resolve(customer))
        .catch((error) => reject(error));
    }

    return Storage.getAllCustomers(limit || 10)
      .then((customer) => resolve(customer))
      .catch((error) => reject(error));
  });
}

function getCustomerById(customerId) {
  return new Promise((resolve, reject) => {
    Storage.getCustomerById(customerId)
      .then((customer) => resolve(customer))
      .catch((error) => reject(error));
  });
}

function modifyCustomer(customer) {
  return new Promise((resolve, reject) => {
    const { id, ...modifyCustomer } = customer;

    return Storage.modifyCustomer(modifyCustomer, id)
      .then((modifiedCustomer) => resolve(modifiedCustomer))
      .catch((error) => reject(error));
  });
}

function deleteCustomer(customerId) {
  return new Promise((resolve, reject) => {
    return Storage.deleteCustomer(customerId)
      .then((deletedCustomer) => resolve(deletedCustomer))
      .catch((error) => reject(error));
  });
}
module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  modifyCustomer,
  deleteCustomer,
};
