// Routes
const { API_PREFIX } = require('config');
const { AuthRoutes } = require('../components/Auth/auth.module');
const { ProductRoutes } = require('../components/product/product.module');
const { CartRoutes } = require('../components/Cart/cart.module');
const routes = [
  {
    path: '/auth',
    route: AuthRoutes
  },
  {
    path: '/product',
    route: ProductRoutes
  },
  {
    path: '/cart',
    route: CartRoutes
  },
 

];

module.exports = (app) => {
  routes.forEach((route) => {
    app.use(route.path, route.route);
  });
};
