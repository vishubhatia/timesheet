import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginCreators from '../../redux/login';
import template from './login.html';
let { loginRequest } = loginCreators;
let loginModule = angular.module('login', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'login'
      });
  })
  .component('login', {
    bindings: {},
    template,
    controller: class {
      constructor($scope, $ngRedux, $timeout) {
        'ngInject';
        let unsubscribe = $ngRedux.connect(this.mapStateToThis)(this);
        $scope.$on('$destroy', unsubscribe);
        $ngRedux.dispatch(loginRequest(this.user.email, this.user, this.user.password));
        console.log(this)
      }
      mapStateToThis({ login, router }) {
        return {
          user: login,
          router
        }
      }
    }
  })

  .name;

export default loginModule;
