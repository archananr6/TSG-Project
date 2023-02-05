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

  getProductList: async (requestBody) => {
    var queryObj = `select * from product`;
    const resultObj = await db.promise(queryObj);
    console.log("resultObj", JSON.stringify(resultObj))
    return resultObj;
    // payload = {
    //     userId: resultObj[0].userId,
    //     role: 'user',
    //     email: resultObj[0].email
    // };
  }
};


module.exports = ProductService;