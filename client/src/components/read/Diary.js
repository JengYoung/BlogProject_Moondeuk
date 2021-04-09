import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledDairy = styled.div``;
const StyledDiaryTitle = styled.div``;
const StyledDairyTag = styled.div``;
const StyledDiaryBody = styled.div``;

const Diary = ({ diary, diaryError }) => {
    console.log("여기", diary);
    const { title, body, tags, author } = diary;
    return (
        <StyledDairy>
            <StyledDiaryTitle>
                {title}
                <div>{author.userId}</div>
                <StyledDairyTag>{tags}</StyledDairyTag>
                <hr></hr>
            </StyledDiaryTitle>
            <StyledDiaryBody>{body}</StyledDiaryBody>
        </StyledDairy>
    );
};

export default Diary;