import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import SearchWrapper from '../../components/search/SearchWrapper';
import { searchKeyword } from '../../modules/search';

function SearchContianer() {
    const dispatch = useDispatch();
    const { keywordType, keyword, isOpenSearchBar } = useSelector(({ searchReducer }) => ({
        keywordType: searchReducer.keywordType,
        keyword: searchReducer.keyword,
        isOpenSearchBar: searchReducer.isOpenSearchBar,
    }));

    const changeKeyword =  useCallback(({ name, value }) => dispatch(changeKeyword({ name, value })), [dispatch])
    const onSearch = () => {
        dispatch(searchKeyword({ keywordType, keyword }))
    };
    return (
        <SearchWrapper
            keywordType={keywordType}
            keyword={keyword}
            changeKeyword={changeKeyword}
            onSearch={onSearch}
            isOpenSearchBar={isOpenSearchBar}
        />
    )
}

export default SearchContianer;
