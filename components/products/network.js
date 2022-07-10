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
  createProduct(req.body.products)
    .then((products) => response.success(req, res, products, 201))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', null, error)
    );
});

router.get('/', (req, res) => {
  getAllProducts(req.body.productId, req.query.limit)
    .then((products) => response.success(req, res, products, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 404, error)
    );
});

router.patch('/', validatorHandler(modifyProductSchema, 'body'), (req, res) => {
  modifyProduct(req.body.Product)
    .then((productUpdated) => response.success(req, res, productUpdated, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 304, error)
    );
});

router.delete(
  '/',
  validatorHandler(deleteProductSchema, 'body'),
  (req, res) => {
    deleteProduct(req.body.productId)
      .then((deletedProduct) => response.success(req, res, deletedProduct, 200))
      .catch((error) =>
        response.error(req, res, 'Error en base de datos', 409, error)
      );
  }
);

module.exports = router;
