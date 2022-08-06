/* eslint-disable no-unused-vars */
const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.string().uuid()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
})

const modifyProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId
})

const deleteProductSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createProductSchema,
  modifyProductSchema,
  deleteProductSchema
}
