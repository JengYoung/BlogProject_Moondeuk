import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import registerReducer, { registerSaga } from './register'
import loginReducer, { loginSaga } from './login';
import userReducer, { userSaga } from './user';
import writeReducer, { writeSaga } from './write';

const rootReducer = combineReducers({
    loadingReducer,
    registerReducer,
    loginReducer,
    userReducer,
    writeReducer,
})

export function* rootSaga() {
    yield all([registerSaga(), loginSaga(), userSaga(), writeSaga()]);
}

export default rootReducer;