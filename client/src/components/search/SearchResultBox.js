import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import UserImage from '../common/UserImage';
import SearchDataItem from './SearchDataItem';

/**
**/


const StyledDataList = styled.section`
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
const StyledUserImage = styled(UserImage)`
    width: 1.5rem;
    height: 1.5rem;
`;

const DataInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
const Nickname = styled.span`
    font-size: 0.875rem;
    font-weight: 700;
    margin-left: 1rem;
    ${props =>
        props.$keywordType === 'title' && css`
            margin-left: 0.25rem;
        `
    }
`;
const Username = styled.span`
    font-weight: 300;
    font-size: 0.875rem;
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
        font-size: 1.2rem;
        padding-right: 0.125rem;
    }
`

const DataTitle = styled.h1`
    padding: 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
`
const DataItemBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const DataPostedDate = styled.time`
    font-size: 0.8rem;
    padding-left: 0.3rem;
    &::before {
        content: "|";   
        color: gray;
        font-weight: 300;
        padding-right: 0.3rem;
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
        if (searchResult) searchResultBox.current.style.display = "block";
        else searchResultBox.current.style.display = "none";
    }, [searchResult])
    return (
        <StyledSearchResultBox ref={searchResultBox}>
            <SearchResult> <strong>{searchValue.current}</strong>을/를 검색한 결과에요. </SearchResult>
            { keywordType === "user" && searchResult && (
                <StyledDataList keywordType={keywordType} searchResult={searchResult}>
                    <KeywordTypeBox onClick={onCategory} ref={keywordTypeBox}>
                        <div className="category id active">ID</div>
                        <div className="category nickname">닉네임</div>
                    </KeywordTypeBox>
                    {searchResult[userKeywordType].map(data => {
                        return (
                            <React.Fragment key={data.userId}>
                                <SearchDataItem keywordType={keywordType} to={`/@${data.userId}`}>
                                    <UserImage userImage={data.userImage}/>
                                    <Nickname>{data.nickname}</Nickname>
                                    <Username>{`(${data.userId})`}</Username>
                                </SearchDataItem>
                            </React.Fragment>
                        )
                    })}
                </StyledDataList>
            )}
            { keywordType === "title" && searchResult && (
                <StyledDataList searchResult={searchResult}>
                    {searchResult.titleData.map(data => {
                        const { author, title, tags, body, postedDate } = data;
                        return (
                            <React.Fragment key={data.userId}>
                                <SearchDataItem keywordType={keywordType} to={`/${data.diaryId}`}>
                                    <DataTitle>{title}</DataTitle>
                                    <DataInfo>
                                        <StyledUserImage $keywordType={keywordType} userImage={author.userImage}/>
                                        <Nickname $keywordType={keywordType}>{author.nickname}</Nickname>
                                        <Username $keywordType={keywordType}>{`(${author.userId})`}</Username>
                                        <DataPostedDate>{postedDate}</DataPostedDate>   
                                    </DataInfo>
                                    <h4>{tags}</h4>
                                    <DataItemBody>{body}</DataItemBody>
                                </SearchDataItem>
                            </React.Fragment>
                        )
                    })}                    
                </StyledDataList>
            )}
        </StyledSearchResultBox>
    );
};

export default React.memo(SearchResultBox);