import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import SearchWrapper from '../../components/search/SearchWrapper';
import { changeKeyword, searchKeyword } from '../../modules/search';

function SearchWrapperContianer() {
    const dispatch = useDispatch();
    const { keywordType, keyword, isOpenSearchBar } = useSelector(({ searchReducer }) => ({
        keywordType: searchReducer.keywordType,
        keyword: searchReducer.keyword,
        isOpenSearchBar: searchReducer.isOpenSearchBar,
    }));

    const onChangeKeyword =  useCallback(payload => {
        dispatch(changeKeyword(payload))
    }, [dispatch])
    
    const onSearch = () => {
        dispatch(searchKeyword({ keywordType, keyword }))
    };
    return (
        <SearchWrapper
            keywordType={keywordType}
            keyword={keyword}
            onChangeKeyword={onChangeKeyword}
            onSearch={onSearch}
            isOpenSearchBar={isOpenSearchBar}
        />
    )
}

export default SearchWrapperContianer;
