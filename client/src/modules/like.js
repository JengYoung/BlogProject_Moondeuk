import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import likeAPI from '../lib/routes/like/like';
import { takeLatest } from 'redux-saga/effects';
import checkLikeAPI from '../lib/routes/like/checkLike';

const INITIALIZE_LIKE = 'like/INITIALIZE_LIKE';
const LIKE = 'like/LIKE';
const [ LIKE_SUCCESS, LIKE_FAILURE ] = createActionTypes(LIKE);
const CHECK_LIKE = 'like/CHECK_LIKE';
const [ CHECK_LIKE_SUCCESS, CHECK_LIKE_FAILURE ] = createActionTypes(CHECK_LIKE);

export const initializeLike = createAction(INITIALIZE_LIKE);
export const likeDiary = createAction(LIKE, like => like);
export const checkLike = createAction(CHECK_LIKE, like => like);

const likeDiarySaga = createSaga(LIKE, likeAPI);
const checkLikeDiarySaga = createSaga(CHECK_LIKE, checkLikeAPI);

export function* likeSaga() {
    yield takeLatest(LIKE, likeDiarySaga);
    yield takeLatest(CHECK_LIKE, checkLikeDiarySaga);
};

const initialState = {
    like: {
        userId: null,
        diaryId: null,
    },
    likeError: null,
}
const likeReducer = handleActions({
    [INITIALIZE_LIKE]: state => initialState,
    [LIKE_SUCCESS]: (state, { payload: like }) => ({
        ...state,
        like,
        likeError: null,
    }),
    [LIKE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        likeError: error,
    }),
    [CHECK_LIKE_SUCCESS]: (state, { payload: like }) => ({
        ...state,
        like,
        likeError: null,
    }),
    [CHECK_LIKE_FAILURE]: (state, { payload: error }) => ({
        ...state,
        likeError: error,
    }),
}, initialState);

export default likeReducer;