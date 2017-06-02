import angular from 'angular';
import Products from './products/products';
import Cart from './cart/cart';
import Login from './login/login';

let componentModule = angular.module('app.components', [
  Products,
  Cart,
  Login
])

.name;

export default componentModule;
