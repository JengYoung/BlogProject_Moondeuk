import { createAction, handleActions } from 'redux-actions';
import createActionTypes from '../lib/createActionTypes';
import createSaga from '../lib/createSaga';
import searchKeywordAPI from '../lib/routes/search/search'
import { takeLatest } from 'redux-saga/effects'

const OPEN_SEARCHBAR = 'search/OPEN_SEARCHBAR';
const CHANGE_KEYWORD = 'search/CHANGE_KEYWORD';
const SEARCH_KEYWORD = 'search/SEARCH';
const [ SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE ] = createActionTypes(SEARCH_KEYWORD);

export const openSearchBar = createAction(OPEN_SEARCHBAR, isOpenSearchBar => isOpenSearchBar);
export const changeKeyword = createAction(CHANGE_KEYWORD, ({ name, value }) => ({
    name, // keywordType or keyword
    value // name's value
}))
export const searchKeyword = createAction(SEARCH_KEYWORD, search => search)

const searchKeywordSaga = createSaga(SEARCH_KEYWORD, searchKeywordAPI)

export function* searchSaga() {
    yield takeLatest(SEARCH_KEYWORD, searchKeywordSaga)
};

const initialState = {
    isOpenSearchBar: false,
    keywordType: 'title',
    keyword: '',
    searchResult: null,
    searchError: null,
};

const searchReducer = handleActions({
    [OPEN_SEARCHBAR]: (state, { payload: isOpenSearchBar }) => ({
        ...state,
        isOpenSearchBar,
    }),
    [CHANGE_KEYWORD]: (state, { payload: { name, value }}) => ({
        ...state,
        [name]: value,
    }),
    [SEARCH_KEYWORD_SUCCESS]: (state, { payload: result }) => ({
        ...state,
        searchResult: result,
        searchError: null,
    }),
    [SEARCH_KEYWORD_FAILURE]: (state, { payload: searchError }) => ({
        ...state,
        searchError: searchError,
    })
}, initialState);

export default searchReducer;