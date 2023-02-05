// Routes
const { API_PREFIX } = require('config');
const { AuthRoutes } = require('../components/Auth/auth.module');
const { ProductRoutes } = require('../components/Product/product.module');

const routes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/product',
    route: ProductRoutes
  }

];

module.exports = (app) => {
  routes.forEach((route) => {
    app.use(route.path, route.route);
  });
};
