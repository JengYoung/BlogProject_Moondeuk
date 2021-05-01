import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import replyCommentAPI from '../lib/routes/replyComment/replyComment';
import { takeLatest } from 'redux-saga/effects'
import checkReplyCommentAPI from '../lib/routes/replyComment/checkReplyComment';


/* create Action Types */ 
const CHANGE_REPLYCOMMENT_TEXT = `replyComment/CHANGE_REPLYCOMMENT_TEXT`
const INITIALIZE_REPLYCOMMENT = 'replyComment/INITIALIZE_REPLYCOMMENT'
const REPLYCOMMENT = 'replyComment/REPLYCOMMENT';
const [ REPLYCOMMENT_SUCCESS, REPLYCOMMENT_FAILURE ] = createActionTypes(REPLYCOMMENT);
const CHECK_REPLYCOMMENT = 'replyComment/CHECK_REPLYCOMMENT';
const [ CHECK_REPLYCOMMENT_SUCCESS, CHECK_REPLYCOMMENT_FAILURE ] = createActionTypes(CHECK_REPLYCOMMENT);

/* create Action Creator*/ 
export const initializeReplyComment = createAction(INITIALIZE_REPLYCOMMENT)
export const changeReplyCommentText = createAction(CHANGE_REPLYCOMMENT_TEXT, ({ name, value }) => ({
    name, // content
    value, // updatedContent
}));
export const replyComment = createAction(REPLYCOMMENT, ({ user_id, comment_id, content }) => ({
    user_id, 
    comment_id, 
    content
}));
export const checkReplyComment = createAction(CHECK_REPLYCOMMENT, commentId => commentId);

/* create customized Saga */ 
const replyCommentDiarySaga = createSaga(REPLYCOMMENT, replyCommentAPI);
const checkReplyCommentDiarySaga = createSaga(CHECK_REPLYCOMMENT, checkReplyCommentAPI);

/* create replyCommentSaga */ 
export function* replyCommentSaga() {
    yield takeLatest(REPLYCOMMENT, replyCommentDiarySaga);
    yield takeLatest(CHECK_REPLYCOMMENT, checkReplyCommentDiarySaga);
};

const initialState = {
    content: '',
    updatedContent: '',
    replyComment: null,
    replyCommentError: null,
    replyComments: [],
    replyCommentsError: null,
};

const replyCommentReducer = handleActions({
    [CHANGE_REPLYCOMMENT_TEXT]: (state, { payload: { name, value } }) => ({
        ...state,
        content: value
    }),
    [INITIALIZE_REPLYCOMMENT]: state => initialState,
    [REPLYCOMMENT_SUCCESS]: (state, { payload: replyComment }) => ({
        ...state,
        replyComment,
        replyCommentError: null,
    }),
    [REPLYCOMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        replyCommentError: error,
    }),
    [CHECK_REPLYCOMMENT_SUCCESS]: (state, { payload: replyComments }) => ({
        ...state,
        replyComments,
        replyCommentsError: null,
    }),
    [CHECK_REPLYCOMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        replyCommentsError: error,
    }) 
}, initialState);

export default replyCommentReducer;