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
export const commentDiary = createAction(COMMENT, ({ user_id, diary_id, content }) => ({
    user_id,
    diary_id,
    content,
}));

/* customized Saga */
const commentDiarySaga = createSaga(COMMENT, commentAPI);

/* Saga */ 
export function* commentSaga() {
    yield takeLatest(COMMENT, commentDiarySaga);
};

const initialState = {
    content: '',
    comment: null,
    comments: [],
    commentError: null,
};

const commentReducer = handleActions({
    [INITIALIZE_COMMENT]: state => initialState,
    [CHANGE_TEXT]: (state, { payload: value }) => ({
        ...state,
        content: value
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