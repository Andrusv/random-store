const Storage = require('./storage');

function createUser(users) {
  return new Promise((resolve, reject) => {
    if (users.length === 0) {
      return reject('No hay useros');
    }

    return resolve(
      Storage.createUser(users).catch((error) => reject(error))
    );
  });
}

function getAllUsers(userId, limit) {
  return new Promise((resolve, reject) => {

    if(userId) {
      return resolve(getUserById(userId)).catch(error => reject(error));
    }

    return resolve(Storage.getAllUsers(limit || 10).catch(error => reject(error)));
  });
}

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    resolve(Storage.getUserById(userId).catch((error) => reject(error)))
  })
}

function modifyUser(user) {
  return new Promise((resolve, reject) => {
    if (!user) {
      return reject('No hay informacion de usero');
    }

    // eslint-disable-next-line no-unused-vars
    const {_id, ...modifyUser } = user;

    return resolve(
      Storage.modifyUser(modifyUser).catch((error) => reject(error))
    );
  });
}

function deleteUser(userId) {
  return new Promise((resolve, reject) => {
    if (!userId) {
      return reject('No hay identificador de user');
    }

    return resolve(
      Storage.deleteUser(userId).catch((error) => reject(error))
    );
  });
}
module.exports = { createUser, getAllUsers, getUserById, modifyUser, deleteUser };
