const Storage = require('./storage');

function createUser(user) {
  return new Promise((resolve, reject) => {
    return resolve(Storage.createUser(user).catch((error) => reject(error)));
  });
}

function getAllUsers(userId, limit) {
  return new Promise((resolve, reject) => {
    if (userId) {
      return resolve(getUserById(userId)).catch((error) => reject(error));
    }

    return resolve(
      Storage.getAllUsers(limit || 10).catch((error) => reject(error))
    );
  });
}

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    resolve(Storage.getUserById(userId).catch((error) => reject(error)));
  });
}

function modifyUser(user) {
  return new Promise((resolve, reject) => {
    const { id, ...modifyUser } = user;

    return resolve(
      Storage.modifyUser(modifyUser,id).catch((error) => reject(error))
    );
  });
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    return resolve(Storage.deleteUser(userId).catch((error) => reject(error)));
  });
}
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  modifyUser,
  deleteUser,
};
