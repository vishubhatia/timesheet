import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { createLogger } from 'redux-logger'
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Common from './common/common';
import Components from './components/components';
import template from './app.html';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

import rootSaga from './sagas';
import rootReducer from './redux';
const sagaMiddleware = createSagaMiddleware()

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
    $ngReduxProvider.createStoreWith(rootReducer, [sagaMiddleware, logger]);
    $locationProvider.html5Mode(true).hashPrefix('!');
  }).run(($ngRedux) => {
    "ngInject";
    sagaMiddleware.run(rootSaga);
  })

  .component('app', {
    template
  });




