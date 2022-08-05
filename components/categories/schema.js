/* eslint-disable no-unused-vars */
const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required()
})

const modifyCategorySchema = Joi.object({
  name: name,
  image: image
})

const deleteCategorySchema = Joi.object({
  id: id.required(),
})

const getCategorySchema = Joi.object({
  id: id.required(),
})
module.exports = {
  createCategorySchema,
  modifyCategorySchema,
  deleteCategorySchema,
  getCategorySchema
}
