import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserImage from '../common/UserImage';

/**
**/

const StyledIdDataItem = styled(Link)`
    display: flex;
    padding: 0 2rem;
    align-items: center;
    width: 100%;
    height: 5rem;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    background: white;
    &:hover {
        cursor: pointer;
        background: #e9d4e9;
    }
`;


const SytledIdDataList = styled.section`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    width: 100%;    
    @media screen and (min-width: 481px) {
        padding: 0 25vw;
    }
    @media screen and (min-width: 769px) {
        padding: 0 30vw;
    }
`;
const StyledSearchResultBox = styled.section`
    overflow-y: scroll;
    height: 76vh;
    background: #fcf6fc;
    @media screen and (min-width: 481px) {
        height: 74vh;
    }
    @media screen and (min-width: 769px) {
        height: 72vh;
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
const SearchResultBox = ({ keywordType, keyword, searchResult }) => {
    return (
        <StyledSearchResultBox>
            <SytledIdDataList>
                { searchResult && searchResult.idData.map(data => {
                    return (
                        <StyledIdDataItem to={`/@${data.userId}`}>
                            <UserImage userImage={data.userImage}/>
                            <Nickname>{data.nickname}</Nickname>
                            <Username>{`(${data.userId})`}</Username>
                        </StyledIdDataItem>
                    )
                })}
            </SytledIdDataList>
        </StyledSearchResultBox>
    );
};

export default SearchResultBox;