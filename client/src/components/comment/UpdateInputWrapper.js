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

const UpdateInputWrapper = ({ onUpdate, onIsUpdateMode, onChangeText, updatedContent }) => {
    const onClick = () => {
        onIsUpdateMode();
        onUpdate();
    }
    const onChange = e => {
        const { name, value } = e.target;
        onChangeText({ name, value });
    };
    return (
        <StyledUpdateInputWrapper>
            <StyledUpdateInput onChange={onChange} name="updatedContent" value={updatedContent}/>
            <StyledUpdateBtnsWrapper>
                <StyledUpdateBtn onClick={onClick}>수정</StyledUpdateBtn>
                <StyledCancelBtn onClick={onIsUpdateMode}>취소</StyledCancelBtn>
            </StyledUpdateBtnsWrapper>
        </StyledUpdateInputWrapper>
    );
};

export default UpdateInputWrapper;