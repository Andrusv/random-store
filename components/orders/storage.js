const { OrdersModel } = require('./model');
const { CustomersModel } = require('../customers/model');
const { UsersModel } = require('../users/model');
const { OrdersProductsModel } = require('../orders_products/model')

async function createOrderProduct(products, data) {
  await products.forEach(async (product) => {
    const orderProduct = {
      amount: product.amount,
      orderId: data.id,
      productId: product.productId
    }

    await new OrdersProductsModel(orderProduct).save()
  });

  return data
}

function createOrder(order) {
  return new OrdersModel(order).save()
    .then(data => {
      return  createOrderProduct(order.products, data)
    })
}

function getAllOrders(limit) {
  return OrdersModel.findAll({ limit });
}

function getOrderById(orderId) {
  return OrdersModel.findByPk(orderId, {
    include: [{
      model: CustomersModel,
      include: [{
        model: UsersModel,
        attributes: ['email', 'create_at']
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
