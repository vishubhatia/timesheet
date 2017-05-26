import template from './productsList.html';


const productsList = angular.module('productsList', [

])

  .component('productsList', {
    bindings: {
      products: '<',
      listType: '@'
    },
    template,
    controller: class {
      constructor() {

      }
    }
  })

  .name



export default productsList;
