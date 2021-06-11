import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import UserImage from '../common/UserImage';

/**
**/

const StyledIdDataItem = styled(Link)`
    display: flex;
    padding: 0 1rem;
    align-items: center;
    width: 100%;
    height: 5rem;
    margin-top: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 10px;
    background: white;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    &:hover {
        cursor: pointer;
        background: #e9d4e9;
        box-shadow: 0 4px 3px rgba(0,0,0,0.2);
    }
    @media screen and (min-width: 481px) {
        padding: 0 2rem;
        font-size: 1rem;
        width: 400px;
    }
`;


const SytledIdDataList = styled.section`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;    
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
    }
`;
const StyledSearchResultBox = styled.section`
    display: none;
    overflow-y: scroll;
    height: 76vh;
    background: #fcf6fc;
    @media screen and (min-width: 481px) {
        height: 74vh;
    }
    @media screen and (min-width: 769px) {
        height: 72vh;
    }
    ${props => 
        props.searchResult && css`
            display: flex;
        `
    }
`
const Nickname = styled.span`
    font-weight: 700;
    margin-left: 1rem;
`;
const Username = styled.span`
    font-weight: 300;
    font-size: 0.8rem;
`;
const KeywordTypeBox = styled.div`
    display: flex;
    width: 400px;
    justify-content: center;
    color: #adaaad;
    .category {
        width: 80px;
        margin: 10px;
        display: flex;
        justify-content: center;
        border-bottom: 2px solid #cdc4ce;
        &:hover, &.active {
            cursor: pointer;
            color: #8a528a;
            border-color: #8a528a;
        }
    }
`

const SearchResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background: #722c72;
    color: #f1f1f1;
    strong {
        color: #ffee00;
    }
`
const SearchResultBox = ({ keywordType, keyword, searchResult, searchValue }) => {
    const searchResultBox = useRef(null);
    const keywordTypeBox = useRef(null);
    const [ userKeywordType, setUserKeywordType ] = useState("idData")
    const onCategory = e => {
        /* 
            idData => category id class active, category nickname inactive 
            nicknameData => category nickname active, category id inactive
        */
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            if (category === e.target) {
                // e.target이라면 만약 active를 안 달고 있다면 추가.
                if (!category.classList.contains('active')) {
                    category.classList.add('active');
                    setUserKeywordType(category.classList.contains('id') ? "idData" : "nicknameData");
                }
            } 
            if (category !== e.target) {
                // category가 e.target이 아니라면 만약 active를 달고 있다면 제거.
                if (category.classList.contains('active')) category.classList.remove('active');
            }  
        })
    }
    useEffect(() => {
        console.log(userKeywordType);
    }, [userKeywordType])

    useEffect(() => {
        if (searchResult) searchResultBox.current.style.display = "block";
        else searchResultBox.current.style.display = "none";
    }, [searchResult])
    return (
        <StyledSearchResultBox ref={searchResultBox}>
            <SearchResult> <strong>{searchValue.current}</strong>을 검색한 결과에요. </SearchResult>
            { keywordType === "user" && searchResult && (
                <SytledIdDataList  searchResult={searchResult}>
                    <KeywordTypeBox onClick={onCategory} ref={keywordTypeBox}>
                        <div className="category id active">ID</div>
                        <div className="category nickname">닉네임</div>
                    </KeywordTypeBox>
                    {searchResult[userKeywordType].map(data => {
                        return (
                            <>
                                <StyledIdDataItem key={data.userId} to={`/@${data.userId}`}>
                                    <UserImage userImage={data.userImage}/>
                                    <Nickname>{data.nickname}</Nickname>
                                    <Username>{`(${data.userId})`}</Username>
                                </StyledIdDataItem>
                            </>
                        )
                    })}
                </SytledIdDataList>
            )}
        </StyledSearchResultBox>
    );
};

export default React.memo(SearchResultBox);