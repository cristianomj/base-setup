const Joi = require('joi');

module.exports = Joi.object().keys({
  username: Joi.string().email().required(),
  password: Joi.string().required(),
});
