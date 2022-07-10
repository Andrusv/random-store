const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15)
const price = Joi.number().precision(2)

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required()
})

const modifyProductSchema = Joi.object({
  id: id.required(),
  name: name,
  price: price
})

const deleteProductSchema = Joi.object({
  id: id.required(),
  name: name,
  price: price
})

module.exports = {
  createProductSchema,
  modifyProductSchema,
  deleteProductSchema
}
