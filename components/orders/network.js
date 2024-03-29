const express = require('express');
const response = require('../../network/response');
const validatorHandler = require('../../middlewares/validatorHandler');
const {
  createOrder,
  getAllOrders,
  deleteOrder
} = require('./controller');
const {
  createOrderSchema,
  getOrderSchema,
  deleteOrderSchema
} = require('./schema');

const router = express.Router();

router.post('/', validatorHandler(createOrderSchema, 'body'), (req, res) => {
  createOrder(req.body)
    .then((order) => response.success(req, res, order, 201))
    .catch((error) =>
      response.error(req, res, error, 409, 'Error en base de datos creando order')
    );
});

router.get('/', validatorHandler(getOrderSchema, 'body'), (req, res) => {
  getAllOrders(req.body.id, req.body.limit)
    .then((orders) => response.success(req, res, orders, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 404, error)
    );
});

router.delete(
  '/',
  validatorHandler(deleteOrderSchema, 'body'),
  (req, res) => {
    deleteOrder(req.body.id)
      .then((deletedOrder) => response.success(req, res, deletedOrder, 200))
      .catch((error) =>
        response.error(req, res, 'Error en base de datos', 409, error)
      );
  }
);


module.exports = router;
