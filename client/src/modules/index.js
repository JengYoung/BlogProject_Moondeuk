import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import registerReducer, { registerSaga } from './register'
import loginReducer, { loginSaga } from './login';
import userReducer, { userSaga } from './user';

const rootReducer = combineReducers({
    loadingReducer,
    registerReducer,
    loginReducer,
    userReducer,
})

export function* rootSaga() {
    yield all([registerSaga(), loginSaga(), userSaga()]);
}

export default rootReducer;