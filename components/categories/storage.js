const { CategoriesModel } = require('./model');
const { ProductsModel } = require('../products/model')
const { OrdersModel } = require('../orders/model')

function createCategory(category) {
  return new CategoriesModel(category).save()
}

function getAllCategories(limit) {
  return CategoriesModel.findAll({limit});
}

function getCategoryById(categoryId) {
  return CategoriesModel.findByPk(categoryId,
    {
      include: [{
        model: ProductsModel,
        include: [{
          model: OrdersModel
        }]
      }],
    });
}

function modifyCategory(category, categoryId) {
  return CategoriesModel.update(category, { where: { id: categoryId } })
}

function deleteCategory(categoryId) {
  return CategoriesModel.destroy({
    where: { id: categoryId },
  });
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  modifyCategory,
  deleteCategory,
};
