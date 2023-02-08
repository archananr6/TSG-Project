const ProductService = require('./product.service');
const ProductController = {
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  

  listproduct: async (httpRequest) => {
    const productData = await ProductService.getProductList(httpRequest.body);
    return {
      statusCode: 200,
      body: {
        data: productData
      }
    };
  },
  
  addproduct: async (httpRequest) => {
    const productData = await ProductService.addProductList(httpRequest.body);
    return {
      statusCode: 200,
      body: {
        data: productData
      }
    };
  }
};

module.exports = ProductController;