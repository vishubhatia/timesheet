import { takeEvery, all } from 'redux-saga/effects';

import {
  fetchProducts
} from './products';

import {
  ProductsTypes
} from '../redux/products';


export default function* root() {
  return yield all([
    takeEvery(ProductsTypes.FETCH_PRODUCTS, fetchProducts, require('../services/products').create())
  ])
}


 
