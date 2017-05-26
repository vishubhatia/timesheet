import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './cart.html';

let cart = angular.module('cart', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('cart', {
        url: '/cart',
        component: 'cart'
      });
  })

  .component('cart', {
    bindings: {},
    template,
    controller: class {

    }
  })

  .name;

export default cart;
