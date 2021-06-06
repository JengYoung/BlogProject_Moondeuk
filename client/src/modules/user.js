import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import { takeLatest, call } from 'redux-saga/effects';
import checkAPI from '../lib/routes/auth/check';
import createSaga from '../lib/createSaga';
import logoutAPI from '../lib/routes/auth/logout';
import getUserInfoAPI from '../lib/routes/auth/getUserInfo';

const TEMP_SET_USER = 'user/TEMP_SET_USER';

const CHECK = 'user/CHECK';
const [ CHECK_SUCCESS, CHECK_FAILURE ] = createActionTypes(CHECK);

const GET_USERINFO = 'user/GET_USERINFO';
const [ GET_USERINFO_SUCCESS, GET_USERINFO_FAILURE ] = createActionTypes(GET_USERINFO);
const LOGOUT = 'user/LOGOUT';


/* tempSetUser : 임시적으로 유저를 저장 */
export const tempSetUser = createAction(TEMP_SET_USER, user => user);
/* check: check if this user data is valid or not */
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const initialState = {
    user: null,
    checkError: null,
    otherUserInfo: null,
    userError: null,
};

export const getUserInfo = createAction(GET_USERINFO, userId => userId);

const getUserInfoSaga = createSaga(GET_USERINFO, getUserInfoAPI)
const checkSaga = createSaga(CHECK, checkAPI);
const checkFailureSaga = () => {
    try {   
        localStorage.removeItem('user');
    } catch(e) {
        console.error('LocalStorage ERROR occured');
    }
}

/* 
    logout not exist SUCCESS - FAILURE action types. 
    Just remove user data ; Create Saga manually
*/ 
function* logoutSaga() {
    try {
        yield call(logoutAPI);
        localStorage.removeItem('user'); // tempSetUser cannot get user data from localStorage anymore; 
    } catch(e) {
        console.error('LocalStorage ERROR occured');
    }
}

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(GET_USERINFO, getUserInfoSaga);
};

const userReducer = handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null,
        }),
        [GET_USERINFO_SUCCESS]: (state, { payload: otherUserInfo }) => ({
            ...state,
            otherUserInfo,
            userError: null,
        }),
        [GET_USERINFO_FAILURE]: (state, { payload: error }) => ({
            ...state,
            userError: error
        })
    },
    initialState,
);

export default userReducer;