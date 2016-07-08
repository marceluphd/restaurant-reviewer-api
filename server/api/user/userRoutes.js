var Router = require('express').Router();
var controller = require('./userController');
var auth = require('../../auth/auth');

Router.route('/')
  .post(controller.saveUser); // Sign up new user

Router.route('/:id')
  .get(controller.getUser);

module.exports = Router;
