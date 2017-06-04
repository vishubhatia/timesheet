import { takeEvery, delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import LoginCreators from '../redux/login';


export function* login_process() {
  yield put(LoginCreators.loginSuccess(console.log("login successful")))
  yield put(LoginCreators.loginFailure(console.log("login failed")))
 }
// function* login_process(action) {
//     try {
//         yield delay(1000); 
//         const payload = yield call(
//             postLoginToAPI
//         );

//         // Obtener datos del store actual
//         // const loginState = yield select( (state) => state.login );

//         // Hay errores
//         if(payload.data.errors){
//             yield put(LoginCreators.LOGIN_FAILURE(payload.data.errors));
//         }

//     } catch (e) {
//         console.log("login error", e);
//         yield put(
//             addFlashMessage({
//                 "type": "error",
//                 "text": "Network Error!"
//             })
//         );
//     }
// }


// const postLoginToAPI = data => {

//     let bodydata = JSON.stringify({
//         email: data.email,
//         password: data.password
//     });

//     let instance = axios.create({
//         headers: { "Content-Type": "application/json" }
//     });

//     return instance.post("/api/login", bodydata);

// };

// export function* watchLoginRequest() {
//     yield* takeEvery(LoginCreators.LOGIN_REQUEST, login_process );
// }

