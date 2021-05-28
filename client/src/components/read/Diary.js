import React from 'react';
import styled from 'styled-components';
import ResponsiveWrapper from '../common/Responsive';
import DiaryModifyAndDeleteBtns from './DiaryModifyAndDeleteBtns';
import 'quill/dist/quill.bubble.css';

/*
*/
const StyledDiary = styled(ResponsiveWrapper)`
    padding: 20px;
    @media screen and (min-width: 481px) {
        width: 100%;
        padding: 0 100px;
    }
    @media screen and (min-width: 769px) {
        width: 100%;
        padding: 0 300px;
    }
`;

const StyledDiaryTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: white;
    margin: 0;
    width: 100%;
    height: 84vh;
    padding-bottom: 10vh;
    &::before {
        content:"";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 84vh;
        background: rgba(0,0,0,0.15);
        border-bottom: 1px solid lightgray;
        @media screen and (min-width: 481px) {
            height: 80vh;
        }
        @media screen and (min-width: 769px) {
            height: 78vh;
        }
    }
    @media screen and (min-width: 481px) {
        height: 80vh;
        bottom: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 78vh;
    }
    h1 {
        font-size: 2.5rem;
        font-family: arial;
    }
    h2 {
        font-size: 1.6rem;
    }
    h3 {
        font-size: 0.8rem;
    }
`;
const StyledDiaryTag = styled.div``;
const StyledDiaryBody = styled.div`
    padding-top: 3rem;
`;

const Diary = ({ diary, diaryError, userId, onPatch, onDelete }) => {
    if (diaryError) {
        if (diaryError.response && diaryError.response.status === 404) {
            return <StyledDiary>존재하지 않는 글입니다.</StyledDiary>
        } else return <StyledDiary>글을 불러올 수 없습니다.</StyledDiary>
    }
    if (!diary) return null;
    const { title, body, tags, author, postedDate } = diary;
    return (
        <StyledDiary>
            <StyledDiaryTitle>
                {userId === author.authorId ? 
                    <DiaryModifyAndDeleteBtns 
                        onPatch={onPatch} 
                        onDelete={onDelete}
                    /> 
                    : null
                }
                <h2>{postedDate.slice(0,10).split('-').join('. ')}</h2>
                <h1>{title}</h1>
                <h3>by {author.authorId}</h3>
                <StyledDiaryTag>{tags}</StyledDiaryTag>
            </StyledDiaryTitle>
            <StyledDiaryBody 
                dangerouslySetInnerHTML={{ __html: body }}
            >
            </StyledDiaryBody>
        </StyledDiary>
    );
};

export default Diary;