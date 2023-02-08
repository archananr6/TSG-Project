/**
 *
 * @param {Object} ProductRouter
 * @param {ExpressRouter} ProductRouter.router
 * @param {ProductController} ProductRouter.ProductController
 * @param {ProductValidator} AuthRouter.ProductValidator
 * @param {makeExpressCallback} ProductRouter.makeExpressCallback
 * @param {makeValidatorCallback} ProductRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
 module.exports = ({ router, ProductController, ProductValidator, makeValidatorCallback, makeExpressCallback }) => {
    router.get('/listproducts', makeExpressCallback(ProductController.listproduct));
    router.post('/addproducts', makeExpressCallback(ProductController.addproduct));

  
    return router;
  };