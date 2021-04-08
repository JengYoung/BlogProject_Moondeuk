import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledDairy = styled.div``;
const StyledDiaryTitle = styled.div``;
const StyledDairyTag = styled.div``;
const StyledDiaryBody = styled.div``;

const Diary = () => {
    return (
        <StyledDairy>
            <StyledDiaryTitle>
                제목입니다.
                <StyledDairyTag>태그입니다.</StyledDairyTag>
                <hr></hr>
            </StyledDiaryTitle>
            <StyledDiaryBody>글입니다.</StyledDiaryBody>
        </StyledDairy>
    );
};

export default Diary;