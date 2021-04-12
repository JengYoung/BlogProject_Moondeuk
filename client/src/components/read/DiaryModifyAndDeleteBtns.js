import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';

/*
*/

const StyledDiaryModifyAndDeleteBtns = styled.div`
    button + button {
        margin-left: 1.5rem;
    }
`;

const SytledDiaryModifyBtn = styled(Button)``;
const StyeldDiaryDeleteBtn = styled(Button)``;

const DiaryModifyAndDeleteBtns = ({onPatch, onDelete}) => {
    return (
        <StyledDiaryModifyAndDeleteBtns>
            <SytledDiaryModifyBtn onClick={onPatch}>일기 수정</SytledDiaryModifyBtn>
            <StyeldDiaryDeleteBtn onClick={onDelete}>일기 삭제</StyeldDiaryDeleteBtn>
        </StyledDiaryModifyAndDeleteBtns>
    );
};

export default DiaryModifyAndDeleteBtns;