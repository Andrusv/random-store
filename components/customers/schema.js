const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone =  Joi.string();
const userId = Joi.string().uuid();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
});

const modifyCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  id: id.required(),
});

const deleteCustomerSchema = Joi.object({
  id: id.required()
})

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  modifyCustomerSchema,
  deleteCustomerSchema
}
