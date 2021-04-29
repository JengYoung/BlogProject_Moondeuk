import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import commentAPI from '../lib/routes/comment/comment';
import { takeLatest } from 'redux-saga/effects';
import checkCommentAPI from '../lib/routes/comment/checkComment';

/* Action to Comment on diary */ 
const INITIALIZE_COMMENT = 'comment/INITIALIZE_COMMENT'
const CHANGE_TEXT = 'comment/CHANGE_TEXT';
const COMMENT = 'comment/COMMENT';
const [ COMMENT_SUCCESS, COMMENT_FAILURE ] = createActionTypes(COMMENT);
const CHECK_COMMENT = 'comment/COMMENT_LIST';
const [ CHECK_COMMENT_SUCCESS, CHECK_COMMENT_FAILURE ] = createACtionTypes(COMMENT_LIST);

/* Action Creator */ 
export const initializeComment = createAction(INITIALIZE_COMMENT);
export const changeText = createAction(CHANGE_TEXT, value => value);
export const commentDiary = createAction(COMMENT, ({ user_id, diary_id, content }) => ({
    user_id,
    diary_id,
    content,
}));

export const commentList = createAction(CHECK_COMMENT, diaryId => diaryId);

/* customized Saga */
const commentDiarySaga = createSaga(COMMENT, commentAPI);
const checkCommentSaga = createSaga(CHECK_COMMENT, checkCommentAPI);

/* Saga */ 
export function* commentSaga() {
    yield takeLatest(COMMENT, commentDiarySaga);
    yield takeLatest(CHECK_COMMENT, checkCommentSaga);
};

const initialState = {
    content: '',
    comment: null,
    commentError: null,
    comments: [],
    commentsError: null,
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
    [CHECK_COMMENT_SUCCESS]: (state, { payload: comments }) => ({
        ...state,
        comments,
        commentsError: null
    }),
    [CHECK_COMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        commentsError: error
    })
}, initialState);

export default commentReducer;