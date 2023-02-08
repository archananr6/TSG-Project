const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: ''
    }
  }
};
// .pattern(/^[6-9]\d{9}$/)

//Login Validation
const validateLogin = (httpRequest) => {
  const schema = Joi.object({
    email: Joi.string().required().messages({
      'string.pattern.base': 'Provide valid email!'
    }),
    password: Joi.string().min(7).alphanum().required()
  });
  return schema.validate(httpRequest.body, options);
};

//Register Validation
const validateRegistration = (httpRequest) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      .messages({
        'string.pattern.base': 'Provide valid email!'
      }),
    password: Joi.string().min(7).alphanum()
  });
  return schema.validate(httpRequest.body, options);
};


module.exports = {
  validateLogin,
  validateRegistration
};
