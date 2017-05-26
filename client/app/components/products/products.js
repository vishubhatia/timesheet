import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProductsCreators from '../../redux/products';
import productsList from './productsList/productsList';
import template from './products.html';

const  { fetchProducts, changeListType } = ProductsCreators;

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
      constructor($scope, $ngRedux, $timeout) {
        'ngInject';
        let unsubscribe = $ngRedux.connect(this.mapStateToThis, {
          changeListType
        })(this);
        $scope.$on('$destroy', unsubscribe);
        $ngRedux.dispatch(fetchProducts());
      }
      mapStateToThis({ products, router }) {
        return {
          products: products.items,
          listType: products.listType,
          router
        }
      }
    }
  })

  .name;

export default products;
