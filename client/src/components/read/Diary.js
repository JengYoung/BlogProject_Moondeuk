import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledDairy = styled.div``;
const StyledDiaryTitle = styled.div``;
const StyledDairyTag = styled.div``;
const StyledDiaryBody = styled.div``;

const Diary = ({ diary, diaryError }) => {
    if (diaryError) {
        if (diaryError.response && diaryError.response.status === 404) {
            return <StyledDairy>존재하지 않는 글입니다.</StyledDairy>
        } else return <StyledDairy>글을 불러올 수 없습니다.</StyledDairy>
    }

    if (!diary) return null;
    const { title, body, tags, author, postedDate } = diary;
    return (
        <StyledDairy>
            <StyledDiaryTitle>
                {title}
                <div>{author.userId}</div>
                <div>{postedDate}</div>
                <StyledDairyTag>{tags}</StyledDairyTag>
                <hr></hr>
            </StyledDiaryTitle>
            <StyledDiaryBody>{body}</StyledDiaryBody>
        </StyledDairy>
    );
};

export default Diary;