import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import writeAPI from '../lib/routes/post/write';
import {takeLatest} from 'redux-saga/effects';
import updateAPI from '../lib/routes/post/update';

const CHANGE_TEXT = 'write/CHANGE_TEXT';
const INITIALIZE_DIARY = 'write/INITIALIZE_DIARY';
const WRITE_DIARY = 'write/WRITE_DIARY';
const [ WRITE_DIARY_SUCCESS, WRITE_DIARY_FAILURE ] = createActionTypes(WRITE_DIARY);
const SETTING_UPDATE = 'write/SETTING_UPDATE';
const UPDATE_DIARY = 'write/UPDATE_DIARY';
const [ UPDATE_DIARY_SUCCESS, UPDATE_DIARY_FAILURE ] = createActionTypes(UPDATE_DIARY);
const CHANGE_STYLE = 'write/CHANGE_STYLE'; // change Title style

/* create Action Creator*/ 
export const changeText = createAction(CHANGE_TEXT, ({ name, value }) => ({
    name,
    value,
}));
export const changeStyle = createAction(CHANGE_STYLE, ({ name, value }) => ({
    name, // isCenter, isFullSize, fontColor, thumbnail, font, color
    value,
}))
export const initializeDiary = createAction(INITIALIZE_DIARY, diary => diary)
export const writeDiary = createAction(WRITE_DIARY, ({ title, subtitle, body, tags, titleStyle }) => ({
    title, // diary title
    subtitle,
    body, // diary content
    tags, // diary tags
    titleStyle,
}));

export const settingUpdate = createAction(SETTING_UPDATE, diary => diary);
export const updateDiary = createAction(UPDATE_DIARY, ({ diaryId, title, subtitle, body, tags, titleStyle }) => ({
    diaryId, //
    title, // diary title
    subtitle,
    body, // diary content
    tags, // diary tags
    titleStyle,
}));

const writeDiarySaga =  createSaga(WRITE_DIARY, writeAPI);
const updateDiarySaga = createSaga(UPDATE_DIARY, updateAPI);
export function* writeSaga() {
    yield takeLatest(WRITE_DIARY, writeDiarySaga);
    yield takeLatest(UPDATE_DIARY, updateDiarySaga);
};

const initialState = {
    title: '',
    subtitle: '',
    body: '',
    tags: [],
    diaryError: '',
    diary: '',
    titleStyle: {
        isCenter: false,
        isFullSize: false,
        color: '',
        fontColor: 'black',
        font: '',
        thumbnail: '',
    }
};

const writeReducer = handleActions({
    [CHANGE_TEXT]: (state, { payload: {name, value} }) => ({
        ...state,
        [name]: value
    }),
    [CHANGE_STYLE]: (state, { payload: {name, value} }) => ({
        ...state,
        titleStyle: {
            ...state.titleStyle,
            [name]: value
        }
    }),
    [INITIALIZE_DIARY]: state => initialState,
    [WRITE_DIARY]: state => ({
        ...state,
        diary: null,
        writeError: null,
    }),
    [WRITE_DIARY_SUCCESS]: (state, { payload: diary }) => ({
        ...state,
        diary,
    }),
    [WRITE_DIARY_FAILURE]: (state, { payload: diaryError }) => ({
        ...state,
        diaryError,
    }),
    [SETTING_UPDATE]: (state, { payload: diary }) => ({
        ...state,
        title: diary.title,
        subtitle: diary.subtitle,
        tags: diary.tags,
        body: diary.body,
        titleStyle: diary.titleStyle,
    }),
    [UPDATE_DIARY_SUCCESS]: (state, { payload: diary }) => ({
        ...state,
        diary,
    }),
    [UPDATE_DIARY_FAILURE]: (state, { payload: diaryError }) => ({
        ...state,
        diaryError,
    })
}, initialState)


export default writeReducer;