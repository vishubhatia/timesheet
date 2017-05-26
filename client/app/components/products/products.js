import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { changeListType } from '../../actions/products';
import productsList from './productsList/productsList';
import template from './products.html';

let products = angular.module('products', [
  uiRouter,
  productsList
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('products', {
        url: '/',
        component: 'products'
      });
  })

  .component('products', {
    bindings: {},
    template,
    controller: class {
      constructor($scope, $ngRedux) {
        'ngInject';
        let unsubscribe = $ngRedux.connect(this.mapStateToThis, {
          changeListType
        })(this);
        $scope.$on('$destroy', unsubscribe);
      }
      mapStateToThis({ products }) {
        return {
          products: products.items,
          listType: products.listType
        }
      }
    }
  })

  .name;

export default products;
