const { http } = require('winston');
const CartService = require('./cart.service');
const CartController = {
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */

  addtocart: async (httpRequest) => {
    console.log('addtocart', httpRequest);
    const productData = await CartService.addCartItems(httpRequest.body,httpRequest.headers);
    console.log('productData', productData);
    
    return {
      statusCode: 200,
      body: {
        data: productData
      }
    };
  },
  viewcart: async (httpRequest) => {
    console.log('viewcart', httpRequest);
    const productData = await CartService.viewCartItems(httpRequest.body,httpRequest.headers);
    console.log('cartData', productData);
    
    return {
      statusCode: 200,
      body: {
        data: productData
      }
    };
  }

};

module.exports = CartController;