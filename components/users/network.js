const express = require('express');
const response = require('../../network/response');
const validatorHandler = require('../../middlewares/validatorHandler');
const {
  createUser,
  getAllUsers,
  modifyUser,
  deleteUser,
} = require('./controller');
const {
  createUserSchema,
  modifyUserSchema,
  deleteUserSchema,
} = require('./schema');

const router = express.Router();

router.post('/', validatorHandler(createUserSchema, 'body'), (req, res) => {
  createUser(req.body)
    .then((user) => response.success(req, res, user, 201))
    .catch((error) =>
      response.error(req, res, error, 409, 'Error en base de datos creando user')
    );
});

router.get('/', (req, res) => {
  getAllUsers(req.body.id, req.body.limit)
    .then((users) => response.success(req, res, users, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 404, error)
    );
});

router.patch('/', validatorHandler(modifyUserSchema, 'body'), (req, res) => {
  modifyUser(req.body)
    .then((userUpdated) => response.success(req, res, userUpdated, 200))
    .catch((error) =>
      response.error(req, res, 'Error en base de datos', 304, error)
    );
});

router.delete(
  '/',
  validatorHandler(deleteUserSchema, 'body'),
  (req, res) => {
    deleteUser(req.body.id)
      .then((deletedUser) => response.success(req, res, deletedUser, 200))
      .catch((error) =>
        response.error(req, res, 'Error en base de datos', 409, error)
      );
  }
);

module.exports = router;
