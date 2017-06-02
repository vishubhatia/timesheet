import { takeEvery, all } from 'redux-saga/effects';

import {
  fetchProducts
} from './products';

import {
  ProductsTypes
} from '../redux/products';


import {
  watchLoginRequest
} from './login';

import {
  LoginTypes
} from '../redux/login';


// export default function* root() {
//   return yield all([
//     takeEvery(ProductsTypes.FETCH_PRODUCTS, fetchProducts, require('../services/products').create())
//   ])
// }


export default function* root() {
  return yield all([
    takeEvery(LoginTypes.LOGIN_REQUEST, watchLoginRequest, require('../services/products').create())
  ])
}



 
