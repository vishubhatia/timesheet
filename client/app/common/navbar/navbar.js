import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './navbar.html';

let navbar = angular.module('navbar', [
  uiRouter
])

  .component('navbar', {
    bindings: {
      cartItemCount: '@'
    },
    template,
    controller: class {
      
    }
  })

  .name;

export default navbar;
