const { OrdersModel } = require('./model');

function createOrder(order) {
  return new OrdersModel(order).save()
}

function getAllOrders(limit) {
  return OrdersModel.findAll({limit});
}

function getOrderById(orderId) {
  return OrdersModel.findByPk(orderId);
}

function modifyOrder(order, orderId) {
  return OrdersModel.update(order, { where: { id: orderId } })
}

function deleteOrder(orderId) {
  return OrdersModel.destroy({
    where: { id: orderId },
  });
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  modifyOrder,
  deleteOrder,
};
