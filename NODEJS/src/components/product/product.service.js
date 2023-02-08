const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger =require('../../support/logger');

const ProductService = {
  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */

  //getProductList  Api
  getProductList: async (requestBody) => {
    try {
      var queryObj = `select * from product`;
      const resultObj = await db.promise(queryObj);
      return resultObj;
    } catch (error) {
      logger.error('getProductList()' + error);
    }
  },


  //AddProduct Api
  addProductList :async (requestBody) => {
    const sqlQuery = `INSERT INTO product(product_name,product_price,product_image,categoryId,inventory_id1)`
    


  }
  

};



 
module.exports = ProductService;