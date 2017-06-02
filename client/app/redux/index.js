import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';

export default combineReducers({
  products: require('./products').reduer,
  login: require('./login').reducer,
  router
});