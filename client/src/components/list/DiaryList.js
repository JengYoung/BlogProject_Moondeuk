import React from 'react'
import styled, { css } from 'styled-components';
import ResponsiveWrapper from '../common/ResponsiveWrapper';
import LoginBg from '../../images/LoginBg.jpg';
import { Link } from 'react-router-dom';
import myMediaQuery from 'lib/styles/_mediaQuery';
import myVars from 'lib/styles/_variable';
/*
*/

// 전체를 감쌈
const StyledDiaryList = styled(ResponsiveWrapper)`
    display: flex;
    justify-content: flex-start;
    margin-top: 3rem;
    flex-flow: wrap;
    ${({ theme }) => css`
        background: ${theme.bgColor};
    `}
`;


const StyledDiaryWrapper = styled(Link)`
    display: flex;
    position: relative;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 300px;
    height: 400px;
    margin: 2rem auto;
    border-radius: 0.25rem;
    box-shadow: ${myVars.defaultShadow};
    ${myMediaQuery.mobile} {
        width: 100%;
        max-width: 300px;
    }
    &:hover {
        transition: all 0.3s;
        transform: translate(-3px, -5px);
        box-shadow: ${myVars.event.hoverShadow};
    }
`;

const StyledDiaryThumbnail = styled.div`
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-image: url(${({thumbnailUrl, defaultThumbnailUrl}) => thumbnailUrl ? thumbnailUrl : defaultThumbnailUrl});
    background-size: cover;
    background-position: center center;
`;

const StyledDiaryData = styled.div`
    &::before {
        border-radius: 0 0 2px 2px;
        margin: -10px -10px;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        z-index: -1;
        background-color: black;
        opacity: 0.6;
    }
    border-radius: 0 0 2px 2px;
    padding: 10px 10px;
    width: 200px;
    position: absolute;
    z-index: 50;
    height: 30%;
    bottom: 0;
    word-break:break-all;
    color: white;
`;

const StyledDiaryTitle = styled.h2`
    margin: 0;
    font-size: 16px;
`;
const StyledAuthorInfoBox = styled.div`
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    * + * {
        padding-left: 5px;
    }
`;

const StyledAuthorName = styled.h3`
    margin: 0;
    font-size: 0.8rem;
    font-weight: 200;
`;
const StyledAuthorImage = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    border: 1px solid lightgray;
    background-position: center;
    background-size: cover;
    ${props => 
        props.userImage && css`
            background-image: ${({userImage}) => `url(${userImage})`};
        `
    }
`;

const StyledDiaryDetailBox = styled.div`
    top: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div {
        padding-left: 10px;
        padding-top: 10px;
    }
    position: absolute;
    z-index: 50;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s;
    color: white;
    &:hover {
        background-color: rgba(0,0,0,0.6);
        opacity: 1;
    }
`;

const DiaryWrapper = ({ diary }) => {
    const { title, tags, author, _id } = diary;
    const thumbnailUrl = diary.titleStyle?.thumbnail;
    const defaultThumbnailUrl = myVars.defaultThumbnail;
    const { authorId, userImage } = author;
    return (
        <StyledDiaryWrapper to={`/@${authorId}/${_id}`}>
            <StyledDiaryThumbnail thumbnailUrl={thumbnailUrl} defaultThumbnailUrl={defaultThumbnailUrl}/>
            <StyledDiaryDetailBox>{tags.map(tag => <div key={tag}>#{tag}</div>)}</StyledDiaryDetailBox>
            <StyledDiaryData>
                <StyledDiaryTitle>{title.length < 30 ? title : title.slice(0,30)+'...'}</StyledDiaryTitle>
                <StyledAuthorInfoBox>
                    <StyledAuthorImage userImage={userImage}></StyledAuthorImage>
                    <StyledAuthorName>{authorId}</StyledAuthorName>
                </StyledAuthorInfoBox>
            </StyledDiaryData>
        </StyledDiaryWrapper>
    )
}

const DiaryList = ({ diaries, diariesError }) => {
    if (diariesError) return <StyledDiaryList>Error is occurred...</StyledDiaryList>
    return (
        <StyledDiaryList>
            {diaries && diaries.map(diary => {
                return <DiaryWrapper key={diary._id} diary={diary}/>
            })}
        </StyledDiaryList>
    );
};

export default DiaryList;