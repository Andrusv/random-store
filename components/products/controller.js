const Storage = require('./storage');

function createProduct(product) {
  return new Promise((resolve, reject) => {
    Storage.createProduct(product)
      .then((createdProduct) => resolve(createdProduct))
      .catch((error) => reject(error)); //.errors[0].message
  });
}

function getAllProducts(productId, limit) {
  return new Promise((resolve, reject) => {
    if (productId) {
      return getProductById(productId)
        .then((product) => resolve(product))
        .catch((error) => reject(error));
    }

    return Storage.getAllProducts(limit || 10)
      .then((product) => resolve(product))
      .catch((error) => reject(error));
  });
}

function getProductById(productId) {
  return new Promise((resolve, reject) => {
    Storage.getProductById(productId)
      .then((product) => resolve(product))
      .catch((error) => reject(error));
  });
}

function modifyProduct(product) {
  return new Promise((resolve, reject) => {
    const { id, ...modifyProduct } = product;

    return Storage.modifyProduct(modifyProduct, id)
      .then((modifiedProduct) => resolve(modifiedProduct))
      .catch((error) => reject(error));
  });
}

function deleteProduct(productId) {
  return new Promise((resolve, reject) => {
    return Storage.deleteProduct(productId)
      .then((deletedProduct) => resolve(deletedProduct))
      .catch((error) => reject(error));
  });
}
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  modifyProduct,
  deleteProduct,
};
