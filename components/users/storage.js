const { UsersModel } = require("./model");

function createUser(users) {
  return new UsersModel({users}).save();
}

// eslint-disable-next-line no-unused-vars
function getAllUsers(limit) {
  return UsersModel.findAll();
}

function getUserById(userId) {
  return UsersModel.find({ userId });
}

function modifyUser(user) {
  return new UsersModel.find({ _id: user.userId }).modifyOne({
    ...user
  });
}

function deleteUser(userId) {
  return UsersModel.find({ _id: userId }).deleteOne({
    _id: userId,
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  modifyUser,
  deleteUser,
};
