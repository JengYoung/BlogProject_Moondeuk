import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import DiaryModifyAndDeleteBtns from './DiaryModifyAndDeleteBtns';
import 'quill/dist/quill.bubble.css';
import LinkedDiaryWrapper from './LinkedDiaryWrapper';
import LinkedDiaryCard from './LinkedDiaryCard';
import ThumbnailTitleBox from '../common/ThumbnailTitleBox';
import { StyledUserImage } from 'components/common/UserImage';
import { myFont } from 'lib/styles/_variable';
import { Link } from 'react-router-dom';
import myColors from 'lib/styles/_color';
/*
*/



const StyledDiaryHeader = styled.header`
    display: flex;
    left: 0; 
    top: 0;
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
        props.$fontColor === 'white' && css`
            color: white;
        `
    }    
    &::before {
        content:"";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 84vh;
        background: transparent;
        ${props => 
            (props.hasThumbnail !== "" || props.hasColor !== "") && css`
                background: rgba(0,0,0,0.1);
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
`;
const StyledSubtitle = styled.h2`
    position: relative;
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
        props.$fontColor === 'white' && css`
            color: white;
        `
    }    
`
const StyledTagBox = styled.nav`
    position: relative;
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
const StyledDiaryTag = styled(Link)`
    display: inline-flex;
    padding: 0 1rem;
    line-height: 1.5;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid white;
    color: white;
    font-weight: 400;
    border-radius: 1.5rem;
    font-size: ${myFont.size.ms};
    text-decoration: none;
    &::before {
        content: "# ";
    }
    ${({ $fontColor }) => ($fontColor === 'black') && css`
        color: black;
        border: 1px solid black;
    `}
    &:hover {
        transition: all 0.3s;
        border: 1px solid ${myColors.purple[1]};
        background: ${myColors.purple[1]};
        color: white;
    }
`;

const StyledDateAndNameBox = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    font-size: 0.8rem;
    margin-bottom: 1rem;
`
const StyledAuthorImage = styled(StyledUserImage)`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
`;
const StyledAuthorName = styled.h3`
    font-weight: 500;
`;
const StyledPostedDate = styled.h3`
    margin-left: 1rem;
    font-weight: 200;
`;

const StyledDiaryBody = styled.div`
    position: relative;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0 0 0 20px;
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
        /* height: 80vh; */
        /* right: 8vw; */
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
        /* height: 78vh; */
        /* right: 15vw; */
    }
`;


const Diary = ({ diary, diaryError, userId, onPatch, onDelete, setProgressBarWidth }) => {
    useEffect(() => {
        if (diaryError) {
            if (diaryError.response && diaryError.response.status === 404) {
                return alert('존재하지 않는 글이에요! 😥')
            } else return alert('글을 불러올 수 없어요! 😥');
        }
    }, [diaryError])
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            /*
                scrolledTop: 현재 맨 위에서 스크롤 된 top 값

            */ 
            const scrolledTop = document.body.scrollTop || document.documentElement.scrollTop;
            const scrolledHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setProgressBarWidth((scrolledTop / scrolledHeight) * 100)
        })
    }, [setProgressBarWidth])
    if (!diary) return null;
    const { title, subtitle, body, tags, author, postedDate, beforeDiary, afterDiary, titleStyle } = diary;
    const { userImage, authorId } = author;
    const { isCenter, isFullSize, thumbnail, color, fontColor, font } = titleStyle;
    return (
        <>
            <ThumbnailTitleBox isFullSize={isFullSize} hasThumbnail={thumbnail} hasColor={color}>
                <StyledDiaryHeader isFullSize={isFullSize} isCenter={isCenter} $fontColor={fontColor} hasThumbnail={thumbnail} hasColor={color}>
                    <StyledThumbnailTitle className={font} isCenter={isCenter} $fontColor={fontColor} hasFont={font}>{title}</StyledThumbnailTitle>
                    <StyledSubtitle isCenter={isCenter} $fontColor={fontColor}>{subtitle}</StyledSubtitle>
                    <StyledTagBox isCenter={isCenter}>{tags.map(tag => <StyledDiaryTag key={tag} $fontColor={fontColor}>{tag}</StyledDiaryTag>)}</StyledTagBox>
                    <StyledDateAndNameBox className="dancing-script">
                        <StyledAuthorImage $userImage={userImage}/>
                        <StyledAuthorName>by { authorId }</StyledAuthorName>
                        <StyledPostedDate>{ postedDate.slice(0,10).split('-').join('. ') }</StyledPostedDate>
                    </StyledDateAndNameBox>
                    {userId === authorId ? 
                        <DiaryModifyAndDeleteBtns 
                            onPatch={onPatch} 
                            onDelete={onDelete}
                            isFullSize={isFullSize}
                        /> 
                        : null
                    }
                </StyledDiaryHeader>
            </ThumbnailTitleBox>
            <StyledDiaryBody dangerouslySetInnerHTML={{ __html: body }}/>
            <LinkedDiaryWrapper userId={userId}>
                { beforeDiary && <LinkedDiaryCard linkedDiary={beforeDiary} isPostedBefore/> }
                { afterDiary && <LinkedDiaryCard linkedDiary={afterDiary} isPostedBefore={false}/> }
            </LinkedDiaryWrapper>
        </>
    );
};

export default Diary;