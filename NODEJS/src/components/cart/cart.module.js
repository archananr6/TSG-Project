const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

// validator
const  CartValidator = require('./cart.validator');

// service
const CartService = require('./cart.service');

// controller
const CartController = require('./cart.controller');

// routes
const routes = require('./cart.routes')({
  router,
  CartController,
  CartValidator,
  makeValidatorCallback,
  makeExpressCallback
});

module.exports = {
  CartController,
  CartService,
  CartRoutes: routes
};
