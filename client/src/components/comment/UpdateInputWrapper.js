import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledUpdateInputWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const StyledUpdateInput = styled.textarea`
    resize: none;
    width: 100%;
`;

const StyledUpdateBtnsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    button + button {
        margin-left: 1rem;
    }
`;
const StyledUpdateBtn = styled.button`
`;

const StyledCancelBtn = styled.button`
`;

const UpdateInputWrapper = ({ onIsUpdateMode }) => {
    return (
        <StyledUpdateInputWrapper>
            <StyledUpdateInput />
            <StyledUpdateBtnsWrapper>
                <StyledUpdateBtn>수정</StyledUpdateBtn>
                <StyledCancelBtn onClick={onIsUpdateMode}>취소</StyledCancelBtn>
            </StyledUpdateBtnsWrapper>
        </StyledUpdateInputWrapper>
    );
};

export default UpdateInputWrapper;