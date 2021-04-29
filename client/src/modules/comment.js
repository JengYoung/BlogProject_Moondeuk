import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import commentAPI from '../lib/routes/comment/comment';
import { takeLatest } from 'redux-saga/effects';

/* Action to Comment on diary */ 
const INITIALIZE_COMMENT = 'comment/INITIALIZE_COMMENT'
const CHANGE_TEXT = 'comment/CHANGE_TEXT';
const COMMENT = 'comment/COMMENT';
const [ COMMENT_SUCCESS, COMMENT_FAILURE ] = createActionTypes(COMMENT);

/* Action Creator */ 
export const initializeComment = createAction(INITIALIZE_COMMENT);
export const changeText = createAction(CHANGE_TEXT, value => value);
export const commentDiary = createAction(COMMENT, ({ user_id, diary_id, userInfo, content, commentAt }) => ({
    user_id,
    diary_id,
    userInfo,
    content,
    commentAt,
}));

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
    content: '',
    commentAt: null,
    commentError: null,
};

const commentReducer = handleActions({
    [INITIALIZE_COMMENT]: state => initialState,
    [CHANGE_TEXT]: (state, { payload: value }) => ({
        ...state,
        content: value
    }),
    [COMMENT_SUCCESS]: (state, { payload: user_id, diary_id, userInfo, content, commentAt }) => ({
        ...state,
        user_id,
        diary_id,
        userInfo,
        content,
        commentAt,
        commentError: null,
    }),
    [COMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        commentError: error,
    }),
}, initialState);

export default commentReducer;