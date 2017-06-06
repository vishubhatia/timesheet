import template from './productThumbnail.html';

const productThumbnail = angular.module('productThumbnail', [

])

  .component('productThumbnail', {
    bindings: {
      product: '<'
    },
    template,
    controller: () => {
      'ngInect';
    }
  })

  .name



export default productThumbnail;
