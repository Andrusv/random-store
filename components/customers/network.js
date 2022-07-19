const express = require('express');
const response = require('../../network/response');
const validatorHandler = require('../../middlewares/validatorHandler');
const {
  createCustomer,
  getCustomerById,
  modifyCustomer,
  deleteCustomer,
} = require('./controller');
const {
  getCustomerSchema,
  createCustomerSchema,
  modifyCustomerSchema,
  deleteCustomerSchema,
} = require('./schema');

const router = express.Router();

router.post('/', validatorHandler(createCustomerSchema, 'body'), (req, res) => {
  createCustomer(req.body)
    .then((customer) => response.success(req, res, customer, 201))
    .catch((error) =>
      response.error(req, res, error, 409, 'Error en base de datos creando customer')
    );
});

router.get('/', validatorHandler(getCustomerSchema, 'body'), (req, res) => {
  getCustomerById(req.body.id)
    .then((customer) => response.success(req, res, customer, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 404, error)
    );
});

router.patch('/', validatorHandler(modifyCustomerSchema, 'body'), (req, res) => {
  modifyCustomer(req.body)
    .then((customerUpdated) => response.success(req, res, customerUpdated, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 304, error)
    );
});

router.delete(
  '/',
  validatorHandler(deleteCustomerSchema, 'body'),
  (req, res) => {
    deleteCustomer(req.body.id)
      .then((deletedCustomer) => response.success(req, res, deletedCustomer, 200))
      .catch((error) =>
        response.error(req, res, 'Error en base de datos', 409, error)
      );
  }
);

module.exports = router;
