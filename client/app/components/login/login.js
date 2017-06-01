import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formly from 'angular-formly';
import formlyBootstrapTemplates from 'angular-formly-templates-bootstrap';
import Local from './local/local';
import Ldap from './ldap/ldap';
import template from './login.html';

import logoImage  from '../../content/images/logo-1.png';


let loginModule = angular.module('login', [
  uiRouter,
  formly,
  formlyBootstrapTemplates,
  Local,
  Ldap
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('timesheet.unauth.login', {
        url: '/login',
        component: 'login',
          template: '<login></login>',
        'sidebar@': {
          template: '<sidebar></sidebar>'
        },
        'navbar@': {
          template: '<navbar></navbar>'
        },
        data: {
          sidebar: "login"
        }
      });
  })

  .component('login', {
    restrict: 'E',
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

export default loginModule;