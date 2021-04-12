import React from 'react';
import styled from 'styled-components';
import DiaryModifyAndDeleteBtns from './DiaryModifyAndDeleteBtns';

/*
*/

const StyledDiary = styled.div``;
const StyledDiaryTitle = styled.div``;
const StyledDiaryTag = styled.div``;
const StyledDiaryBody = styled.div``;

const Diary = ({ diary, diaryError, userId, onPatch }) => {
    if (diaryError) {
        if (diaryError.response && diaryError.response.status === 404) {
            return <StyledDiary>존재하지 않는 글입니다.</StyledDiary>
        } else return <StyledDiary>글을 불러올 수 없습니다.</StyledDiary>
    }
    if (!diary) return null;
    const { title, body, tags, author, postedDate } = diary;

    return (
        <StyledDiary>
            {userId === author.userId ? <DiaryModifyAndDeleteBtns onPatch={onPatch}></DiaryModifyAndDeleteBtns> : null}
            <StyledDiaryTitle>
                {title}
                <div>{author.userId}</div>
                <div>{postedDate}</div>
                <StyledDiaryTag>{tags}</StyledDiaryTag>
                <hr></hr>
            </StyledDiaryTitle>
            <StyledDiaryBody>{body}</StyledDiaryBody>
        </StyledDiary>
    );
};

export default Diary;