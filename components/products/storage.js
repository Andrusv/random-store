const { ProductModel } = require("./model");
const faker = require('faker')

function createProduct(products) {
  return new ProductModel({products}).save();
}

function getAllProducts(limit) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    let products = []
    for (let index = 0; index < limit; index++) {
          products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            img: faker.image.imageUrl()
          })
    }

    return resolve(products);
  })
}

function getProductById(productId) {
  return ProductModel.find({ productId });
}

function modifyProduct(product) {
  return new ProductModel.find({ _id: product.productId }).modifyOne({
    ...product
  });
}

function deleteProduct(productId) {
  return ProductModel.find({ _id: productId }).deleteOne({
    _id: productId,
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  modifyProduct,
  deleteProduct,
};
