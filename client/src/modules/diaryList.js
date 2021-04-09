import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import diaryListAPI from '../lib/routes/post/list';
import { takeLatest } from 'redux-saga/effects'
import createSaga from '../lib/createSaga';

/*
    DiaryList action Types
*/ 
const [ DIARY_LIST ] = `diaryList/DIARY_LIST`;
const [ DIARY_LIST_SUCCESS, DIARY_LIST_FAILURE ] = createActionTypes(DIARY_LIST);

/*
    DiaryList action creator func
*/ 

export const diaryList = createAction(DIARY_LIST, ({ userId, tag }) => ({
    userId, // id
    tag, // 태그명
}));

/*
    create Action Saga
*/ 
const getDiaryListSaga = createSaga(DIARY_LIST, diaryListAPI)
export function* diaryListSaga() {
    yield takeLatest(DIARY_LIST, getDiaryListSaga)
}

/*
    create diaryList initialState and Reducer
*/ 

const initialState = {
    diaries: null,
    diariesError: null,
}


const diaryListReducer = handleActions(
    {
        [DIARY_LIST_SUCCESS]: (state, { payload: diaryList }) => ({
            ...state,
            diaryList,
        }),
        [DIARY_LIST_FAILURE] : (state, { payload: diaryListError }) => ({
            ...state,
            diaryListError,
        })
    },
    initialState
) 

export default diaryListReducer;