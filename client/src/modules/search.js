import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import searchKeywordAPI from '../lib/routes/search'
import { takeLatest } from 'redux-saga/effects'

const [ CHANGE_KEYWORD ] = 'search/CHANGE_KEYWORD';
const [ SEARCH_KEYWORD ] = 'search/SEARCH_KEYWORD';
const [ SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE ] = createActionTypes(SEARCH_KEYWORD);

export const changeKeyword = createAction(CHANGE_KEYWORD, ({ name, value }) => ({
    name, // keywordType & keyword
    value // name's value
}))
export const searchKeyword = createAction(SEARCH_KEYWORD, search => search)

const searchKeywordSaga = createSaga(SEARCH_KEYWORD, searchKeywordAPI)

export function* searchSaga() {
    yield takeLatest(searchKeywordSaga)
}

const initialState = {
    keywordType: '',
    keyword: '',
    searchResult: null
};

const searchReducer = handleActions({
    [CHANGE_KEYWORD]: (state, { payload: { name, value }}) => ({
        ...state,
        [name]: value,
    }),
    [SEARCH_KEYWORD_SUCCESS]: (state, { payload: result }) => ({
        ...state,
        searchResult: result,
        searchError: null,
    }),
    [SEARCH_KEYWORD_FAILURE]: (state, { payload: error }) => ({
        ...state,
        searchError: error,
    })
}, initialState)
export default searchReducer;