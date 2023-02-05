/**
 *
 * @param {Object} AuthRouter
 * @param {ExpressRouter} AuthRouter.router
 * @param {AuthController} AuthRouter.AuthController
 * @param {AuthValidator} AuthRouter.AuthValidator
 * @param {makeExpressCallback} AuthRouter.makeExpressCallback
 * @param {makeValidatorCallback} AuthRouter.makeValidatorCallback
 * @returns {ExpressRouter}
 */
module.exports = ({ router, AuthController, AuthValidator, makeValidatorCallback, makeExpressCallback }) => {
  console.log("/login/login/login")
  router.post('/login', makeValidatorCallback(AuthValidator.validateLogin), makeExpressCallback(AuthController.login));
  router.post('/register', makeValidatorCallback(AuthValidator.validateRegistration), makeExpressCallback(AuthController.register));

  return router;
};
