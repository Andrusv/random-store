/* eslint-disable no-unused-vars */
const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(15)
const price = Joi.number().precision(2).greater(0)
const email = Joi.string().email()
const password = Joi.string().min(5).max(15)

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
})

const modifyUserSchema = Joi.object({
  id: id.required(),
  email: email,
  password: password
})

const deleteUserSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createUserSchema,
  modifyUserSchema,
  deleteUserSchema
}
