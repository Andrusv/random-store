const {config} = require('../config/index')
const whitelist = config.cors;

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null,true)
    } else {
      callback('No permitido', false)
    }
  }
}

module.exports = options;
