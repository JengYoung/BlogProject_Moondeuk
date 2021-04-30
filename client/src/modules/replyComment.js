import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import replyCommentAPI from '../lib/routes/replyComment/replyComment';
import { takeLatest } from 'redux-saga/effects'


/* create Action Types */ 
const REPLYCOMMENT = 'replyComment/REPLYCOMMENT';
const [ REPLYCOMMENT_SUCCESS, REPLYCOMMENT_FAILURE ] = createActionTypes(REPLYCOMMENT);

/* create Action Creator*/ 
export const replyComment = createAction(REPLYCOMMENT, ({ user_id, comment_id, content }) => ({
    user_id, 
    comment_id, 
    content
}));

/* create customized Saga */ 
const replyCommentDiarySaga = createSaga(REPLYCOMMENT, replyCommentAPI);

/* create replyCommentSaga */ 
export function* replyCommentSaga() {
    yield takeLatest(REPLYCOMMENT, replyCommentDiarySaga);
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
    [REPLYCOMMENT_SUCCESS]: (state, { payload: replyComment }) => ({
        ...state,
        replyComment,
        replyCommentError: null,
    }),
    [REPLYCOMMENT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        replyCommentError: error,
    }),
}, initialState);

export default replyCommentReducer;