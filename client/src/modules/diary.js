import { createAction, handleAction } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import readAPI from '../lib/routes/post/read';
import { takeLatest } from 'redux-saga/effects';

/* create Action Types */ 
const READ_DIARY = `diary/READ_DIARY`;
const [ READ_DIARY_SUCCESS, READ_DIARY_FAILURE ] = createActionTypes(READ_DIARY);

/* create Action creator */
export const readDiary = createAction(READ_DIARY, diary => diary);

/* create Action saga */
const readDiarySaga = createSaga(READ_DIARY, readAPI);

/* create saga */ 
export function* diarySaga() {
    yield takeLatest(READ_DIARY, readDiarySaga)
}

const initialState = {
    diary: null,
    diaryError: null,
}

const diaryReducer = handleAction(
    {
        [READ_DIARY_SUCCESS]: (state, { payload: diary }) => ({
            ...state,
            diary,
        }),
        [READ_DIARY_FAILURE]: (state, { payload: diaryError }) => ({
            ...state,
            diaryError
        })
    }, 
    initialState
);

export default diaryReducer;