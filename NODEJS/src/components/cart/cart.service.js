const { result } = require('lodash');
const decodeToken = require('../../middlewares/auth');
const db = require('../../db/db.js');
const logger = require('../../support/logger');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const { verifyJWT } = require('../Auth/jwt.service');

const CartService = {
  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */

  //addtocartitems  Api
  addCartItems: async (requestBody, headers) => {
    const token = headers.Authorization.replace('Bearer ', ''); //replace bearer
    const email = await verifyJWT({ token }) //decode token
      .then((result) => {
        return result.email;
      });
    const queryObj = `SELECT user_id from user_account where email='${email}'`;
    const resultQuery = await db.promise(queryObj);
    console.log(resultQuery);
    const { products_id } = requestBody;
    console.log('addtocartitems1');
    const user_id1 = resultQuery[0].user_id; // get it from jwt serivce
    var sqlObj = `INSERT INTO cart VALUES (?,?,?)`;
    //INSERT INTO `e-commerce`.`cart` (`cart_id`, `user_id1`, `products_id`) VALUES ('1', '6', '1');
    const resultObj = await db.promise(sqlObj, [, user_id1, products_id]);
    console.log('resultObj', JSON.stringify(resultObj));
    console.log('addtocartitems2');
    if (resultObj.length == 0) {
      //logger
      logger.error('addCartItems()' + error);
      //throw new Error
      throw new BadRequestError('Insert failed');
    }
    return {
      resultObj
    };
  },
  viewCartItems:async (requestBody,headers)=>{
    const token = headers.Authorization.replace('Bearer ', ''); //replace bearer
    const email = await verifyJWT({ token }) //decode token
      .then((result) => {
        return result.email;
      });
    const queryObj = `SELECT user_id from user_account where email='${email}'`;
    const resultQuery = await db.promise(queryObj);
    const user_id1 = resultQuery[0].user_id;
    var sqlObj =  `select * from product join cart on cart.products_id=product.product_id where user_id1='${user_id1}'`;
    const queryResult = await db.promise(sqlObj);
    console.log(queryResult)
    return {
      queryResult
    };
  }

};

module.exports = CartService;
