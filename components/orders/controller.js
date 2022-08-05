const Storage = require('./storage');

function createOrder(order) {
  return new Promise((resolve, reject) => {
    Storage.createOrder(order)
      .then((createdOrder) => resolve(createdOrder))
      .catch((error) => reject(error.errors[0].message));
  });
}

function getAllOrders(orderId, limit) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      return getOrderById(orderId)
        .then((order) => resolve(order))
        .catch((error) => reject(error));
    }

    return Storage.getAllOrders(limit || 10)
      .then((order) => resolve(order))
      .catch((error) => reject(error));
  });
}

function getOrderById(orderId) {
  return new Promise((resolve, reject) => {
    Storage.getOrderById(orderId)
      .then((order) => resolve(order))
      .catch((error) => reject(error));
  });
}

function deleteOrder(orderId) {
  return new Promise((resolve, reject) => {
    return Storage.deleteOrder(orderId)
      .then((deletedOrder) => resolve(deletedOrder))
      .catch((error) => reject(error));
  });
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder
};
