import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { createLogger } from 'redux-logger'
import { createStore } from 'redux';
import reducer from './reducers'
import Common from './common/common';
import Components from './components/components';
import template from './app.html';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';


const logger = createLogger({  
  level: 'info',
  collapsed: true
});

angular.module('app', [
  ngRedux,
  uiRouter,
  Common,
  Components
])
  .config(($locationProvider, $ngReduxProvider) => {
    "ngInject";
    $ngReduxProvider.createStoreWith(reducer, [logger]);
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', {
    template
  });


const store = createStore(reducer);

store.subscribe(() => {
  console.log(arguments);
})
