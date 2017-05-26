import template from './productListItem.html';

const productListItem = angular.module('productListItem', [

])

  .component('productListItem', {
    bindings: {
      product: '<'
    },
    template,
    controller: () => {
      'ngInect';
    }
  })

  .name



export default productListItem;
