import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import { takeLatest, call } from 'redux-saga/effects';
import checkAPI from '../lib/routes/auth/check';
import createSaga from '../lib/createSaga';
import logoutAPI from '../lib/routes/auth/logout';

const TEMP_SET_USER = 'user/TEMP_SET_USER';

const CHECK = 'user/CHECK';
const [ CHECK_SUCCESS, CHECK_FAILURE ] = createActionTypes(CHECK);

const LOGOUT = 'user/LOGOUT';

/* tempSetUser : get 'user' state from store managing this */
export const tempSetUser = createAction(TEMP_SET_USER, user => user);

/* check: check if this user data is valid or not */
export const check = createAction(CHECK, user => user);

export const logout = createAction(LOGOUT, user => user);

const initialState = {
    user: '',
    checkError: null,
};

const checkSaga = createSaga(check, checkAPI);
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
    yield takeLatest(check, checkSaga);
    yield takeLatest(logout, logoutSaga);
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
            checkError: error,
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null,
        })
    },
    initialState,
);

export default userReducer;