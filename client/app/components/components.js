import angular from 'angular';
import Products from './products/products';
import Cart from './cart/cart';

let componentModule = angular.module('app.components', [
  Products,
  Cart
])

.name;

export default componentModule;
