import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import registerReducer, { registerSaga } from './register'
import loginReducer, { loginSaga } from './login';

const rootReducer = combineReducers({
    loadingReducer,
    registerReducer,
    loginReducer,
})

export function* rootSaga() {
    yield all([registerSaga(), loginSaga()]);
}
export default rootReducer;