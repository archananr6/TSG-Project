const router = require('express').Router();

const { makeExpressCallback, makeValidatorCallback } = require('../../middlewares');

// validator
const  ProductValidator = require('./product.validator');

// service
const ProductService = require('./product.service');

// controller
const ProductController = require('./product.controller');

// routes
const routes = require('./product.routes')({
  router,
  ProductController,
  ProductValidator,
  makeValidatorCallback,
  makeExpressCallback
});

module.exports = {
  ProductController,
  ProductService,
  ProductRoutes: routes
};
