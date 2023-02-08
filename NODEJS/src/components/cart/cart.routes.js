/**
 *
 * @param {Object} CartRouter
 * @param {ExpressRouter} CartRouter.router
 * @param {CartController} CartRouter.CartController
 * @param {CartValidator} CartRouter.CartValidator
 * @param {makeExpressCallback} CartRouter.makeExpressCallback
 * @param {makeValidatorCallback} CartRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
 const authorization = require('../../middlewares/auth');
 module.exports = ({ router, CartController, CartValidator, makeValidatorCallback, makeExpressCallback }) => {
    router.post('/addcart', authorization,makeExpressCallback(CartController.addtocart));
    router.get('/viewcart', authorization,makeExpressCallback(CartController.viewcart));

  
    return router;
  };