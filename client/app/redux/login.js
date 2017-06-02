import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: ['error']
});

export const LoginTypes = Types;

export default Creators;

const INITIAL_STATE = {
    isFetching: false,
    email: "",
    password: "",
    pause: false,
    errors: {}
}

const loginRequest = (state = INITIAL_STATE) => {
  return {  ...state, isFetching: true};
}

const loginSuccess = (state = INITIAL_STATE) => {
  return { ...state};
}

const loginFailure = (state = INITIAL_STATE) => {
  return { ...state, isFetching: false, errors: action.errors, pause: true};
}



// const changeListType = (state = INITIAL_STATE, { listType }) => {
//   return { ...state, listType };
// }

export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.LOGIN_REQUEST]: loginRequest,
  [LoginTypes.LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.LOGIN_FAILURE]: loginFailure
});