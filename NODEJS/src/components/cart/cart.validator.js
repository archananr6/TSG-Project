const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: ''
    }
  }
};

const validateProductList = (httpRequest) => {
  const schema = Joi.object({});
  return schema.validate(httpRequest.body, options);
};


module.exports = {
  validateProductList
};