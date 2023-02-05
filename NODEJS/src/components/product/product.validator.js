const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: ''
    }
  }
};

const validateProductList = (httpRequest) => {
    const schema = Joi.object({
  
      product_name: Joi.string()
        .required(),
    //   email: Joi.string()
    //   .required()
    //   .pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    //     .messages({
    //       'string.pattern.base': 'Provide valid email!'
    //     }),
    //   password: Joi.string().min(7).alphanum()
  
    });
    return schema.validate(httpRequest.body, options);
  };

module.exports = {
    validateProductList
};