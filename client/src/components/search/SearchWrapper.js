import React from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import CircleBtn from '../common/CircleBtn';
import { GoSearch } from 'react-icons/go'
import { useEffect } from 'react';
import SearchResultBox from './SearchResultBox';
/**
**/

const StyledSearchWrapper = styled.div`
    position: fixed;
    z-index: 75;
    width: 100%;
    height: 92vh;
    @media screen and (min-width: 481px) {
        height: 90vh;
    }
    @media screen and (min-width: 769px) {
        height: 88vh;
    }
`;

const SearchBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 75;
    width: 100%;
    height: 16vh;
    background: white;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
`;

const SearchForm = styled.form`
    padding: 0.5 0rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 1rem;
`

const KeywordTypeBox = styled.select`
    position: relative;
    margin: 0.5rem 0;
    display: flex;
    font-size: 0.8rem;
    font-weight: 700;
    width: 8rem;
    border: 1px solid #bd98bd;
    color: #bd98bd;
    border-radius: 0.8rem;
    outline: none;
    text-align-last: center;
    justify-content: center;

    *:hover {
        background: pink;
    }
`;

const SearchFormInput = styled.input`
    width: 300px;
    height: 2.5rem;
    min-width: 200px;
    border: none;
    border-bottom: 3px solid #bd98bd;
    outline: none;
    font-weight: 600;
`;

const SearchFormBtn = styled(CircleBtn)`
    color: #bd98bd;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    svg {
        width: 1.5rem;
        height: 1.5rem;    
    }
    &:hover {
        cursor: pointer;
        background: #bd98bd;
        color: white;
    }
`;



const SearchWrapper = ({ keywordType, keyword, onChangeKeyword, onSearch, isOpenSearchBar, initializeBar, searchResult }) => {
    useEffect(() => {
        if (!isOpenSearchBar) return searchWrapper.current.style.display = 'none';
        else return searchWrapper.current.style.display = 'block';
    })
    const searchValue = useRef('');
    const searchWrapper = useRef(null);
    const keywordTypeBox = useRef(null);
    const onChange = e => {
        const { name, value } = e.target;
        onChangeKeyword({ name, value })
    }
    const onSubmit = e => {
        e.preventDefault();
        searchValue.current = keyword;
        onSearch();
    }

    useEffect(() => {
        initializeBar()
        return () => {
            initializeBar()
        }
    }, [])

    return (
        <StyledSearchWrapper ref={searchWrapper}>
            <SearchBar>
                <KeywordTypeBox name="keywordType" onChange={onChange} ref={keywordTypeBox} value={keyword}>
                    <option value="user">ID+닉네임</option>
                    <option value="title">제목</option>
                    <option value="tag">태그</option>
                </KeywordTypeBox>
                <SearchForm onSubmit={onSubmit}>
                    <SearchFormInput name="keyword" type="search" onChange={onChange} value={keyword}/>
                    <SearchFormBtn><GoSearch/></SearchFormBtn>
                </SearchForm>    
            </SearchBar>
            <SearchResultBox keywordType={keywordType} keyword={keyword} searchResult={searchResult} searchValue={searchValue}/>
        </StyledSearchWrapper>
    );
};

export default React.memo(SearchWrapper);