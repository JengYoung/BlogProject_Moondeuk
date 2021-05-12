import React from 'react';
import styled from 'styled-components';
import PageWrap from '../common/PageWrap';
import ResponsiveWrapper from '../common/Responsive';
import DiaryModifyAndDeleteBtns from './DiaryModifyAndDeleteBtns';

/*
*/
const StyledDiary = styled(ResponsiveWrapper)`
`;
const DiaryBackground = styled.div`
    position: fixed;
    top: 5rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
`;
const StyledDiaryTitle = styled.div`
    background: white;
    border-bottom: 1px solid lightgray;
    height: 100%;
`;
const StyledDiaryTag = styled.div``;
const StyledDiaryBody = styled.div``;

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
            {userId === author.userId ? <DiaryModifyAndDeleteBtns onPatch={onPatch} onDelete={onDelete}></DiaryModifyAndDeleteBtns> : null}
            <StyledDiaryTitle>
                {title}
                <div>{author.userId}</div>
                <div>{postedDate}</div>
                <StyledDiaryTag>{tags}</StyledDiaryTag>
            </StyledDiaryTitle>
            <StyledDiaryBody>{body}</StyledDiaryBody>
        </StyledDiary>
    );
};

export default Diary;