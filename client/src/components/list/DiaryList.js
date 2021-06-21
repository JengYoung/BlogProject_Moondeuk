import React from 'react'
import styled, { css } from 'styled-components';
import ResponsiveWrapper from '../common/Responsive';
import LoginBg from '../../images/LoginBg.jpg';
import { Link } from 'react-router-dom';
/*
*/


const StyledDiaryList = styled(ResponsiveWrapper)`
    display: flex;
    justify-content: center;
    /* flex-direction: row; */
    /* background-color: black; */
    margin-top: 3rem;
    flex-flow: wrap;
`;

const StyledDiaryThumbnail = styled.div`
    border-radius: inherit;
    width: 100%;
    height: 300px;
    background-image: url(${LoginBg});
    background-size: cover;
`;
const StyledDiaryWrapper = styled(Link)`
    display: flex;
    position: relative;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    min-width: 200px;
    width: 200px;
    height: 300px;
    padding: 2px;
    margin: 3vh 1vw;
    background-color: white;
    border-radius: 4px;
    border: 1px solid lightgray;
    box-shadow: 2px 5px 4px rgba(0,0,0,0.2);
    &:nth-child(3n + 2) {
        position: relative;
        top: 5vh;
    }
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
            background-image: url(${props.userImage});
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
    const { authorId, userImage } = author;
    return (
        <StyledDiaryWrapper to={`/@${authorId}/${_id}`}>
            <StyledDiaryThumbnail />
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