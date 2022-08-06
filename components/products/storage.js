const { ProductsModel } = require('./model');
const { CategoriesModel } = require('../categories/model')
const { OrdersModel } = require('../orders/model')

function createProduct(product) {
  return new ProductsModel(product).save()
}

function getAllProducts(limit) {
  return ProductsModel.findAll({limit});
}

function getProductById(productId) {
  return ProductsModel.findByPk(productId, {
    include: [{
      as: "Categories",
      model: CategoriesModel,
    }, {
      model: OrdersModel
    }],
  });
}

function modifyProduct(product, productId) {
  return ProductsModel.update(product, { where: { id: productId } })
}

function deleteProduct(productId) {
  return ProductsModel.destroy({
    where: { id: productId },
  });
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  modifyProduct,
  deleteProduct,
};
