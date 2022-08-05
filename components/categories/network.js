const express = require('express');
const response = require('../../network/response');
const validatorHandler = require('../../middlewares/validatorHandler');
const {
  createCategory,
  getAllCategories,
  modifyCategory,
  deleteCategory,
} = require('./controller');
const {
  createCategorySchema,
  modifyCategorySchema,
  deleteCategorySchema,
  getCategorySchema,
} = require('./schema');

const router = express.Router();

router.post('/', validatorHandler(createCategorySchema, 'body'), (req, res) => {
  createCategory(req.body)
    .then((category) => response.success(req, res, category, 201))
    .catch((error) =>
      response.error(req, res, error, 409, 'Error en base de datos creando category')
    );
});

router.get('/',
validatorHandler(getCategorySchema, 'body'),
(req, res) => {
  getAllCategories(req.body.id, req.body.limit)
    .then((categories) => response.success(req, res, categories, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 404, error)
    );
});

router.patch('/', validatorHandler(modifyCategorySchema, 'body'), (req, res) => {
  modifyCategory(req.body)
    .then((categoryUpdated) => response.success(req, res, categoryUpdated, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 304, error)
    );
});

router.delete(
  '/',
  validatorHandler(deleteCategorySchema, 'body'),
  (req, res) => {
    deleteCategory(req.body.id)
      .then((deletedCategory) => response.success(req, res, deletedCategory, 200))
      .catch((error) =>
        response.error(req, res, 'Error en base de datos', 409, error)
      );
  }
);

module.exports = router;
