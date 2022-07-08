const Storage = require('./storage');

function createProduct(products) {
  return new Promise((resolve, reject) => {
    if (products.length === 0) {
      return reject('No hay productos');
    }

    return resolve(
      Storage.createProduct(products).catch((error) => reject(error))
    );
  });
}

function getAllProducts(productId, limit) {
  return new Promise((resolve, reject) => {

    if(productId) {
      return resolve(getProductById(productId).catch((error) => reject(error)));
    }

    return resolve(Storage.getAllProducts(limit).catch((error) => reject(error)));
  });
}

function getProductById(productId) {
  return new Promise((resolve, reject) => {
    resolve(Storage.getProductById(productId).catch((error) => reject(error)))
  })
}

function deleteProduct(productId) {
  return new Promise((resolve, reject) => {
    if (!productId) {
      return reject('No hay identificador de product');
    }

    return resolve(
      Storage.deleteProduct(productId).catch((error) => reject(error))
    );
  });
}
module.exports = { createProduct, getAllProducts, getProductById, deleteProduct };
