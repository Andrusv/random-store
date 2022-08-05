/* eslint-disable no-unused-vars */
const Joi = require('joi')

const id = Joi.string().uuid()
const customerId = Joi.string().uuid()

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
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
