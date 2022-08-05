const { OrdersModel } = require('./model');
const { CustomersModel } = require('../customers/model');
const { UsersModel } = require('../users/model');

function createOrder(order) {
  return new OrdersModel(order).save()
}

function getAllOrders(limit) {
  return OrdersModel.findAll({limit});
}

function getOrderById(orderId) {
  return OrdersModel.findByPk(orderId, {
    include: [{
      model: CustomersModel,
      include: [{
        model: UsersModel,
        attributes: ['email','create_at']
      }]
    }],
  });
}

function deleteOrder(customerId) {
  return OrdersModel.destroy({
    where: { id: customerId },
  });
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder
};
