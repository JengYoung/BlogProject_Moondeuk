import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import commentAPI from '../lib/routes/comment/comment';
import { takeLatest } from 'redux-saga/effects';

/* Action to Comment on diary */ 
const CHANGE_TEXT = 'comment/CHANGE_TEXT';
const COMMENT = 'comment/COMMENT';
const [ COMMENT_SUCCESS, COMMENT_FAILURE ] = createActionTypes(COMMENT);

/* Action Creator */ 
export const changeText = createAction(CHANGE_TEXT, value => value);
export const commentDiary = createAction(COMMENT, comment => comment);

/* customized Saga */
const commentDiarySaga = createSaga(COMMENT, commentAPI);

/* Saga */ 
export function* commentSaga() {
    yield takeLatest(COMMENT, commentDiarySaga);
};

const initialState = {
    user_id: null,
    diary_id: null,
    userInfo: {
        userId: null,
        nickname: null,
    },
    comment: '',
    commentAt: null,
    commentError: null,
};

const commentReducer = handleActions({
    [CHANGE_TEXT]: (state, { payload: value }) => ({
        ...state,
        comment: value
    }),
    [COMMENT_SUCCESS]: (state, { payload: comment }) => ({
        ...state,
        comment,
        commentError: null,
    }),
    [COMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        commentError: error,
    }),
}, initialState);

export default commentReducer;