import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import { takeLatest } from 'redux-saga/effects';
import checkAPI from '../lib/routes/auth/check';
import createSaga from '../lib/createSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';

const CHECK = 'user/CHECK';
const [ CHECK_SUCCESS, CHECK_FAILURE ] = createActionTypes(CHECK);

/* tempSetUser : get 'user' state from store managing this */
export const tempSetUser = createAction(TEMP_SET_USER, user => user);

/* check: check if this user data is valid or not */
export const check = createAction(CHECK, user => user);

const initialState = {
    user: '',
    checkError: null,
};

const checkSaga = createSaga(check, checkAPI);
export function* userSaga() {
    yield takeLatest(check, checkSaga());
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
        })
    },
    initialState,
);

export default userReducer;