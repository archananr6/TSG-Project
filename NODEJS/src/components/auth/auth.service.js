const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger =require('../../support/logger');

const AuthService = {
  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */

  //Login
  doLogin: async (requestBody) => {
    try {
      const { email, password } = requestBody;
      // making db call for select user from the user_account table
      let queryObj = `select * from user_account where email = '${email}' and  password = '${password}';`;
      const resultObj = await db.promise(queryObj);
      if (resultObj.length == 0) {
        throw new BadRequestError('Username or Password is invalid!');
      }
      payload = {
        user_id: resultObj[0].user_id,
        role: 'user',
        email: resultObj[0].email
      };
      const accessToken = await JwtService.generateJWT({
        payload
      });
      return {
        accessToken,
        ...payload
      };
    } catch (error) {
      logger.error('doLogin()' + error);
    }
  },

  //Register
  doRegister: async (requestBody) => {
    try {
      const { name, email, password } = requestBody;
      var sqlObj = `INSERT INTO user_account VALUES (?,?,?,?)`;
      // making db call for inset user in to user_account table with role table inserion

      const resultObj = await db.promise(sqlObj, [, name, email, password])
        .then((result) => {
         
          // get inserted user id from previous query
          let queryObj = `select user_id from user_account where user_id = '${result.insertId}'`;
          return db.promise(queryObj);
        })
        .then((result) => {
          // insert useride into rolelist table with user role as static
          let roleType = 1; // user role type value = 1 and dadmin type = 2
          let queryObj = `INSERT INTO role_list VALUES (?,?,?)`;
          return db.promise(queryObj, [, roleType, result[0].user_id]);
        })
        .catch((err) => {
          // write error into logger file
          console.log('catch error ', err);
        });

      if (resultObj.length == 0) {
        //logger
        logger.error('doRegister() Insert failed');
        //throw new Error
        throw new BadRequestError('Insert failed');
      }
      return {
        resultObj
      };
    } catch (error) {
      logger.error('doRegister()' + error);
    }
  }
};


module.exports = AuthService;
