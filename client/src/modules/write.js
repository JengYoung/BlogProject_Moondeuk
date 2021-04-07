import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import writeAPI from '../lib/routes/post/write';
import {takeLatest} from 'redux-saga/effects';

const CHANGE_TEXT = 'write/CHANGE_TEXT';
const INITIALIZE_DIARY = 'write/INITIALIZE_DIARY';
const WRITE_DIARY = 'write/WRITE_DIARY';
const [ WRITE_DIARY_SUCCESS, WRITE_DIARY_FAILURE ] = createActionTypes(WRITE_DIARY);

export const changeText = createAction(CHANGE_TEXT, ({ name, value }) => ({
    name,
    value,
}));

export const initializeDiary = createAction(INITIALIZE_DIARY, diary => diary)
export const writeDiary = createAction(WRITE_DIARY, ({ title, body, tags }) => ({
    title, // diary title
    body, // diary content
    tags, // diary tags
}));

const writeDiarySaga =  createSaga(WRITE_DIARY, writeAPI);

export function* writeSaga() {
    yield takeLatest(WRITE_DIARY, writeDiarySaga);
}

const initialState = {
    title: '',
    body: '',
    tags: [],
    writeError: '',
    diary: '',
};

const writeReducer = handleActions({
    [CHANGE_TEXT]: (state, { payload: {name, value} }) => ({
        ...state,
        [name]: value
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
    [WRITE_DIARY_FAILURE]: (state, { payload: writeError }) => ({
        ...state,
        writeError,
    })
}, initialState)


export default writeReducer