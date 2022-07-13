const { UsersModel } = require('./model');

function createUser(user) {
  return UsersModel.create(user);
}

// eslint-disable-next-line no-unused-vars
function getAllUsers(limit) {
  return UsersModel.findAll();
}

function getUserById(userId) {
  return UsersModel.findByPk(userId);
}

function modifyUser(user, userId) {
  return UsersModel.update(user, { where: { id: userId } });
}

function deleteUser(userId) {
  return UsersModel.destroy({
    where: { id: userId },
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  modifyUser,
  deleteUser,
};
