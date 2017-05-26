import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchProducts: [],
  fetchProductsSuccess: ['products'],
  fetchProductsError: [],
  changeListType: ['listType']
});

export const ProductsTypes = Types;

export default Creators;

const INITIAL_STATE = {
  items: [],
  processing: false,
  error: false,
  listType: 'grid'
}

const fetchProducts = (state = INITIAL_STATE) => {
  return { ...state, processing: true, error: false };
}

const fetchProductsSuccess = (state = INITIAL_STATE, { products }) => {
  return { ...state, processing: false, error: false, items: products };
}

const fetchProductsError = (state = INITIAL_STATE) => {
  return { ...state, processing: false, error: true };
}

const changeListType = (state = INITIAL_STATE, { listType }) => {
  return { ...state, listType };
}

export const reduer = createReducer(INITIAL_STATE, {
  [ProductsTypes.FETCH_PRODUCTS]: fetchProducts,
  [ProductsTypes.FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
  [ProductsTypes.FETCH_PRODUCTS_ERROR]: fetchProductsError,
  [ProductsTypes.CHANGE_LIST_TYPE]: changeListType
});