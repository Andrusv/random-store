const response = require('../network/response')

function validatorHandler(schema, property) {
  return (req,res,next) => {
    const data = req[property]
    const { error } = schema.validate(data)

    if (error) {
      next(response.error(req,res,error.details[0].message,400,error))
    }

    next()
  }
}

module.exports = validatorHandler
