const Storage = require('./storage');

function createUser(user) {
  return new Promise((resolve, reject) => {
    Storage.createUser(user)
      .then((createdUser) => resolve(createdUser))
      .catch((error) => reject(error.errors[0].message));
  });
}

function getAllUsers(userId, limit) {
  return new Promise((resolve, reject) => {
    if (userId) {
      return getUserById(userId)
        .then((user) => resolve(user))
        .catch((error) => reject(error));
    }

    return Storage.getAllUsers(limit || 10)
      .then((user) => resolve(user))
      .catch((error) => reject(error));
  });
}

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    Storage.getUserById(userId)
      .then((user) => resolve(user))
      .catch((error) => reject(error));
  });
}

function modifyUser(user) {
  return new Promise((resolve, reject) => {
    const { id, ...modifyUser } = user;

    return Storage.modifyUser(modifyUser, id)
      .then((modifiedUser) => resolve(modifiedUser))
      .catch((error) => reject(error));
  });
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    return Storage.deleteUser(userId)
      .then((deletedUser) => resolve(deletedUser))
      .catch((error) => reject(error));
  });
}
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  modifyUser,
  deleteUser,
};
