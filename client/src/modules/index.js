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
import subscribeListReducer, { subscribeListSaga } from './subscribeList';
import likeReducer, { likeSaga } from './like';
import commentReducer, { commentSaga } from './comment';
import replyCommentReducer, { replyCommentSaga } from './replyComment';

const rootReducer = combineReducers({
    loadingReducer,
    registerReducer,
    loginReducer,
    userReducer,
    writeReducer,
    diaryReducer,
    diaryListReducer,
    subscribeReducer,
    subscribeListReducer,
    likeReducer,
    commentReducer,
    // replyCommentReducer
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
        subscribeListSaga(),
        likeSaga(),
        commentSaga(),
        // replyCommentSaga(),
    ]);
};

export default rootReducer;