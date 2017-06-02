import angular from 'angular';
import uiRouter from 'angular-ui-router';

let localModule = angular.module('local', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";


    $stateProvider
      .state('timesheet.unauth.login.local', {
        url: '/local',
        template: '<local local-schema="vm.localSchema"></local>',
        controller: function (localSchemaObj, $state) {
          "ngInject";
          this.localSchema = localSchemaObj;
        },
        controllerAs: 'vm',
        resolve: {
          localSchemaObj: function (loginSchema) {
            "ngInject";
            return loginSchema.getSchema();
          }
        },
        data: {
          sidebar: "login"
        }
      });
  })

   .component('local', {
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
        $ngRedux.dispatch(locallogin());
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

export default localModule;
