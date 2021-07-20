import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components';
import ResponsiveWrapper from '../common/ResponsiveWrapper';
import { Link } from 'react-router-dom';
import myMediaQuery from 'lib/styles/_mediaQuery';
import myVars, { myFont } from 'lib/styles/_variable';
/*
*/

// 전체를 감쌈
const StyledDiaryCards = styled(ResponsiveWrapper)`
    display: flex;
    /* justify-content: center; */
    margin-top: 3rem;
    flex-flow: wrap;
    ${({ theme }) => css`
        background: ${theme.bgColor};
    `}
`;


const StyledDiaryCard = styled.article`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 300px;
    height: 400px;
    margin: 2rem auto;
    border-radius: 0.25rem;
    box-shadow: ${myVars.defaultShadow};
    overflow: hidden;
    ${myMediaQuery.mobile} {
        width: 100%;
        max-width: 300px;
    }
    &:hover {
        transition: all 0.3s;
        transform: translateY(-5px);
        box-shadow: ${myVars.event.hoverShadow};
    }
`;

const StyledDiaryThumbnail = styled(Link)`
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-image: url(${({$thumbnailUrl, $defaultThumbnailUrl}) => $thumbnailUrl ? $thumbnailUrl : $defaultThumbnailUrl});
    background-size: cover;
    background-position: center center;
`;

const StyledDiaryData = styled.div`
    border-radius: 0 0 2px 2px;
    width: 100%;
    position: absolute;
    z-index: 50;
    bottom: 0;
    word-break:break-all;
    height: 160px;
    overflow: hidden;
    top: 240px;
    &:hover {
        transition: all 0.5s;
        height: 100%;
        top: 0;
    }
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
`;

const StyledDiaryDataBackground = styled.div`
    position: absolute;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    ${({ theme }) => css`
        background: ${ theme.bgColor };
    `}
`;

const StyledDiaryTitle = styled.h2`
    position: relative;
    padding: 1rem 1rem 0 1rem;
    margin: 0;
    font-size: ${myFont.size.l};
    font-weight: 900;
    font-family: ${myFont.style.nanumMyeongjo};
`;

const StyledDiarySubTitle = styled.h3`
    position: relative;
    padding-top: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: 400;
    font-size: ${myFont.size.s};
`;

const StyledAdditionalInfoBox = styled.div`
    display: flex;
    position: absolute;
    z-index: 51;
    bottom: 0.5rem;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    * + * {
        padding-left: 5px;
    }
    font-family: ${myFont.style.nanumMyeongjo};
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
`;

const StyledAdditionalInfo = styled.section`
    display: flex;
    justify-content: flex-end;
`;
const StyledAuthorName = styled.h3`
    margin: 0;
    font-size: 0.8rem;
    font-weight: 200;
`;
const StyledAuthorImage = styled.div`
    position: relative;
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

const StyledDiaryBody = styled.div`
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: 0 1rem;
    padding-top: 0.5rem;
    display: none;
    &.active {
        display: block;
    }
`;
const StyledDiaryCardTags = styled.ul`
    display: inline-flex;
    position: sticky;
    bottom: 1.75rem;
    height: 4rem;
    overflow: hidden;
    padding-top: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    flex-wrap: wrap;
    position: absolute;
    z-index: 50;
    width: 100%;
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
    &.active {
        transition: height 0.5s;
        height: auto;
    }
`;

const StyledDiaryCardTag = styled.li`
    position: relative;
    padding: 0 0.75rem;
    line-height: 1.75;
    border-radius: 1.75rem;
    margin: 0.25rem 0.25rem;
    font-size: ${myFont.size.mms};
    ${({ theme }) => css`
        background: ${theme.tagBg};
        color: ${theme.tagColor};
        /* border: 1px solid ${theme.buttonColor}; */
    `};
    &::before {
        content: "# "
    }
`;

const StyledDiaryPostedDate = styled.time`
    font-family: ${myFont.style.dancingScript};
    font-size: ${myFont.size.ms};
`;


const DiaryCard = ({ diary }) => {
    const { title, tags, author, _id, subtitle, body, postedDate } = diary;
    // const date = new Date(postedDate).toLocaleDateString("en-US", {
    //     weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric'
    // }).replaceAll('/', '. ');
    const thumbnailUrl = diary.titleStyle?.thumbnail;
    const defaultThumbnailUrl = myVars.defaultThumbnail;
    const { authorId, userImage } = author;
    const diaryData = useRef(null);
    const diaryBody = useRef(null);
    const diaryTags = useRef(null);

    useEffect(() => {
        diaryData.current.addEventListener('click', () => console.log('hi'))
    },[])
    const onHoverData = () => {
        diaryBody.current.classList.toggle('active');
        diaryTags.current.classList.toggle('active');
    }   
    return (
        <StyledDiaryCard>
            <StyledDiaryThumbnail $thumbnailUrl={thumbnailUrl} $defaultThumbnailUrl={defaultThumbnailUrl} to={`/@${authorId}/${_id}`}/>
            <StyledDiaryData ref={diaryData} onMouseOver={onHoverData}  onMouseOut={onHoverData}>
                <StyledDiaryDataBackground/>
                <StyledDiaryTitle>{title}</StyledDiaryTitle>
                <StyledDiarySubTitle>{subtitle}</StyledDiarySubTitle>
                <StyledDiaryCardTags ref={diaryTags}>{tags.map(tag => <StyledDiaryCardTag key={tag}>{tag}</StyledDiaryCardTag>)}</StyledDiaryCardTags>
                <StyledDiaryBody ref={diaryBody} dangerouslySetInnerHTML={{__html: body.length > 100 ? `${body.slice(0,100)}...` : body}}></StyledDiaryBody>
            </StyledDiaryData>
            <StyledAdditionalInfoBox>
                <StyledDiaryPostedDate>{postedDate}</StyledDiaryPostedDate>
                <StyledAdditionalInfo>
                    <StyledAuthorImage userImage={userImage}></StyledAuthorImage>
                    <StyledAuthorName>{authorId}</StyledAuthorName>
                </StyledAdditionalInfo>
            </StyledAdditionalInfoBox>
        </StyledDiaryCard>
    )
}

const DiaryCards = ({ diaries, diariesError }) => {
    if (diariesError) return <StyledDiaryCards> 일기를 불러오는 데 에러가 발생했어요! 😓</StyledDiaryCards>
    return (
        <StyledDiaryCards>
            {diaries && diaries.map(diary => {
                return <DiaryCard key={diary._id} diary={diary}/>
            })}
        </StyledDiaryCards>
    );
};

export default DiaryCards;