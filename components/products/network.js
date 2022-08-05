const express = require('express');
const response = require('../../network/response');
const validatorHandler = require('../../middlewares/validatorHandler');
const {
  createProduct,
  getAllProducts,
  modifyProduct,
  deleteProduct,
} = require('./controller');
const {
  createProductSchema,
  modifyProductSchema,
  deleteProductSchema,
} = require('./schema');

const router = express.Router();

router.post('/', validatorHandler(createProductSchema, 'body'), (req, res) => {
  createProduct(req.body)
    .then((product) => response.success(req, res, product, 201))
    .catch((error) =>
      response.error(req, res, error, 409, 'Error en base de datos creando product')
    );
});

router.get('/', (req, res) => {
  getAllProducts(req.body.id, req.body.limit)
    .then((products) => response.success(req, res, products, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 404, error)
    );
});

router.patch('/', validatorHandler(modifyProductSchema, 'body'), (req, res) => {
  modifyProduct(req.body)
    .then((productUpdated) => response.success(req, res, productUpdated, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 304, error)
    );
});

router.delete(
  '/',
  validatorHandler(deleteProductSchema, 'body'),
  (req, res) => {
    deleteProduct(req.body.id)
      .then((deletedProduct) => response.success(req, res, deletedProduct, 200))
      .catch((error) =>
        response.error(req, res, 'Error en base de datos', 409, error)
      );
  }
);

module.exports = router;
