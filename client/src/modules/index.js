import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import registerReducer, { registerSaga } from './register'
const rootReducer = combineReducers({
    loadingReducer,
    registerReducer
})

export function* rootSaga() {
    yield all([registerSaga()]);
}
export default rootReducer;