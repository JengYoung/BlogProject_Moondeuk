import React from 'react';
import styled, { css } from 'styled-components';
import DiaryModifyAndDeleteBtns from './DiaryModifyAndDeleteBtns';
import 'quill/dist/quill.bubble.css';
import LinkedDiaryWrapper from './LinkedDiaryWrapper';
import LinkedDiaryCard from './LinkedDiaryCard';
import ThumbnailTitleBox from '../common/ThumbnailTitleBox';

/*
*/



const StyledDiaryTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    /* background: white; */
    margin: 0;
    width: 100%;
    height: 84vh;
    padding-left: 20px;
    ${props => 
        (props.thumbnail !== "") && css`
            background-image: url(${props.thumbnail});
            background-size: cover;
            background-position: center;
        `
    }
    ${props => 
        props.isCenter && css`
            justify-content: center;
            align-items: center;
        `
    }
    ${props => 
        props.fontColor === 'white' && css`
            color: white;
        `
    }    
    &::before {
        content:"";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 84vh;
        background: transparent;
        ${props => 
            (props.hasThumbnail !== "" || props.hasColor !== "") && css`
                background: rgba(0,0,0,0.2);
            `
        }
        border-bottom: 1px solid lightgray;
        @media screen and (min-width: 481px) {
            height: 80vh;
        }
        @media screen and (min-width: 769px) {
            height: 78vh;
        }
        ${props =>
            (!props.isFullSize) && css`
                height: 42vh;
                @media screen and (min-width: 481px) {
                    padding: 0 15vw;
                    height: 40vh;
                }
                @media screen and (min-width: 769px) {
                    padding: 0 20vw;
                    height: 39vh;
                }
            ` 
        }
    }
    @media screen and (min-width: 481px) {
        height: 80vh;
        bottom: 10vh;
        padding-left: 0;
    }
    @media screen and (min-width: 769px) {
        height: 78vh;
    }
`;

const StyledThumbnailTitle = styled.h1`
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    width: 100%;
    z-index: 11;
    ${props => 
        props.isCenter && css`
            display: flex;
            justify-content: center;
        `
    }
    @media screen and (min-width: 481px) {
        font-size: 2.25rem;
    }
    @media screen and (min-width: 769px) {
        font-size: 2.5rem;
    }
    /* ${props => 
        props.isCenter && css`
            text-align: center;
        `
    } */
`;
const StyledSubtitle = styled.h2`
    margin-bottom: 2rem;
    width: 100%;
    font-size: 1rem;
    ${props => 
        props.isCenter && css`
            display: flex;
            justify-content: center;
        `
    }
    ${props => 
        props.fontColor === 'white' && css`
            color: white;
        `
    }    
`
const StyledTagBox = styled.ul`
    display: inline-flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    padding-inline-start: 0;
    ${props => 
        props.isCenter && css`
            display: flex;
            justify-content: center;
        `
    } 
`
const StyledDiaryTag = styled.li`
    display: inline-flex;
    margin-right: 1rem;
    border: 1px solid #5e5e5e;
    color: #5e5e5e;
    font-weight: 200;
    border-radius: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
    font-size: 0.9rem;
    z-index: 11;
    ${props => 
        props.fontColor === 'white' && css`
            color: #e0e0e0;
            border: 1px solid white;
        `
    }
    ${props => 
        (props.thumbnail !== "" || props.color !== "") && css`
            color: #e0e0e0;
            border: 1px solid white;
        `
    }    
`;

const StyledDateAndNameBox = styled.div`
    display: flex;
    font-size: 0.8rem;
    margin-bottom: 1rem;
`
const StyledAuthorName = styled.h3`
    font-weight: 500;
`;
const StyledPostedDate = styled.h3`
    margin-left: 1rem;
    font-weight: 200;
`;

const StyledDiaryBody = styled.div`
    position: relative;
    height: auto;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0 0 0 20px;
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
        height: 80vh;
        /* right: 8vw; */
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
        height: 78vh;
        /* right: 15vw; */
    }
`;


const Diary = ({ diary, diaryError, userId, onPatch, onDelete }) => {
    if (diaryError) {
        if (diaryError.response && diaryError.response.status === 404) {
            return alert('존재하지 않는 글이에요! 😥')
        } else return alert('글을 불러올 수 없어요! 😥');
    }
    if (!diary) return null;
    const { title, subtitle, body, tags, author, postedDate, beforeDiary, afterDiary, titleStyle } = diary;
    const { isCenter, isFullSize, thumbnail, color, fontColor } = titleStyle;
    return (
        <>
            <ThumbnailTitleBox isFullSize={isFullSize} hasThumbnail={thumbnail} hasColor={color}>
                <StyledDiaryTitle isFullSize={isFullSize} isCenter={isCenter} fontColor={fontColor} hasThumbnail={thumbnail} hasColor={color}>
                    <StyledThumbnailTitle isCenter={isCenter} fontColor={fontColor}>{title}</StyledThumbnailTitle>
                    <StyledSubtitle isCenter={isCenter} fontColor={fontColor}>{subtitle}</StyledSubtitle>
                    <StyledTagBox isCenter={isCenter}>{tags.map(tag => <StyledDiaryTag key={tag} fontColor={fontColor}>#{tag} </StyledDiaryTag>)}</StyledTagBox>
                    <StyledDateAndNameBox className="dancing-script">
                        <StyledAuthorName>by {author.authorId}</StyledAuthorName>
                        <StyledPostedDate>{postedDate.slice(0,10).split('-').join('. ')}</StyledPostedDate>
                    </StyledDateAndNameBox>
                    {userId === author.authorId ? 
                        <DiaryModifyAndDeleteBtns 
                            onPatch={onPatch} 
                            onDelete={onDelete}
                            isFullSize={isFullSize}
                        /> 
                        : null
                    }
                </StyledDiaryTitle>
            </ThumbnailTitleBox>
            <StyledDiaryBody 
                dangerouslySetInnerHTML={{ __html: body }}
            >
            </StyledDiaryBody>
            <LinkedDiaryWrapper userId={userId}>
                { beforeDiary && <LinkedDiaryCard linkedDiary={beforeDiary} isPostedBefore/> }
                { afterDiary && <LinkedDiaryCard linkedDiary={afterDiary} isPostedBefore={false}/> }
            </LinkedDiaryWrapper>
        </>
    );
};

export default Diary;