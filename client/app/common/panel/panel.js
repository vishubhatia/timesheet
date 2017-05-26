import template from './panel.html';

const panel = angular.module('panel', [

])

  .component('panel', {
    bindings: {
      title: '@',
      theme: '@'
    },
    template,
    transclude: true,
    controller: () => {
      'ngInect';
    }
  })

  .name



export default panel;
