import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import commentAPI from '../lib/routes/comment/comment';
import { takeLatest } from 'redux-saga/effects';
import checkCommentAPI from '../lib/routes/comment/checkComment';
import updateCommentAPI from '../lib/routes/comment/updateComment';
import deleteCommentAPI from '../lib/routes/comment/deleteComment';

/* Action to Comment on diary */ 
const INITIALIZE_COMMENT = 'comment/INITIALIZE_COMMENT'
const CHANGE_TEXT = 'comment/CHANGE_TEXT';
const COMMENT = 'comment/COMMENT';
const [ COMMENT_SUCCESS, COMMENT_FAILURE ] = createActionTypes(COMMENT);
const CHECK_COMMENT = 'comment/CHECK_COMMENT';
const [ CHECK_COMMENT_SUCCESS, CHECK_COMMENT_FAILURE ] = createActionTypes(CHECK_COMMENT);
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT';
const [ UPDATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAILURE ] = createActionTypes(UPDATE_COMMENT);
const SETTING_UPDATE = 'comment/SETTING_UPDATE';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const [ DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE ] = createActionTypes(DELETE_COMMENT);

/* Action Creator */ 
export const initializeComment = createAction(INITIALIZE_COMMENT);
export const changeText = createAction(CHANGE_TEXT, ({ name, value }) => ({
    name, // comment or updateComment
    value,
}));
export const commentDiary = createAction(COMMENT, ({ user_id, diary_id, content }) => ({
    user_id,
    diary_id,
    content,
}));
export const settingUpdate = createAction(SETTING_UPDATE, content => content);
export const checkComment = createAction(CHECK_COMMENT, diaryId => diaryId);
export const updateComment = createAction(UPDATE_COMMENT, comment => { 
    console.log("module: ", comment)
    return comment;
});
export const deleteComment = createAction(DELETE_COMMENT, comment_id => comment_id);

/* customized Saga */
const commentDiarySaga = createSaga(COMMENT, commentAPI);
const checkCommentSaga = createSaga(CHECK_COMMENT, checkCommentAPI);
const updateCommentSaga = createSaga(UPDATE_COMMENT, updateCommentAPI);
const deleteCommentSaga = createSaga(DELETE_COMMENT, deleteCommentAPI);

/* Saga */ 
export function* commentSaga() {
    yield takeLatest(COMMENT, commentDiarySaga);
    yield takeLatest(CHECK_COMMENT, checkCommentSaga);
    yield takeLatest(UPDATE_COMMENT, updateCommentSaga);
    yield takeLatest(DELETE_COMMENT, deleteCommentSaga);
};

const initialState = {
    content: '',
    updatedContent: '',
    comment: null,
    commentError: null,
    comments: [],
    commentsError: null,
};

const commentReducer = handleActions({
    [INITIALIZE_COMMENT]: state => ({
        ...state,
        content: null,
        updatedContent: null,
        comment: null,
    }),
    [CHANGE_TEXT]: (state, { payload: { name, value } }) => ({
        ...state,
        [name]: value
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
    }),
    [UPDATE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
        ...state,
        comment,
        commentError: null,
    }),
    [UPDATE_COMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        commentError: error,
    }),
    [SETTING_UPDATE]: (state, { payload: content }) => ({
        ...state,
        updatedContent: content,
    }),
    [DELETE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
        ...state,
        comment,
        commentError: null,
    }),
    [DELETE_COMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        commentError: error,
    }),
}, initialState);

export default commentReducer;