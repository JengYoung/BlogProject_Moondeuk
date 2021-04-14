import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loadingReducer from './loading';
import registerReducer, { registerSaga } from './register'
import loginReducer, { loginSaga } from './login';
import userReducer, { userSaga } from './user';
import writeReducer, { writeSaga } from './write';
import diaryReducer, { diarySaga } from './diary';
import diaryListReducer, { diaryListSaga } from './diaryList'
import subscribeReducer, { subscribeSaga } from './subscribe';

const rootReducer = combineReducers({
    loadingReducer,
    registerReducer,
    loginReducer,
    userReducer,
    writeReducer,
    diaryReducer,
    diaryListReducer,
    subscribeReducer,
});

export function* rootSaga() {
    yield all([
        registerSaga(), 
        loginSaga(), 
        userSaga(), 
        writeSaga(), 
        diarySaga(), 
        diaryListSaga(),
        subscribeSaga(),
    ]);
};

export default rootReducer;