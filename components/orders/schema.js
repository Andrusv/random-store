/* eslint-disable no-unused-vars */
const Joi = require('joi')

const id = Joi.string().uuid()
const customerId = Joi.string().uuid()

const products = Joi.array().items(Joi.object({
  amount: Joi.number().required(),
  productId: id.required()
}))

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
  products: products.required()
})

const getOrderSchema = Joi.object({
  id: id.required(),
});

const deleteOrderSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createOrderSchema,
  getOrderSchema,
  deleteOrderSchema
}
