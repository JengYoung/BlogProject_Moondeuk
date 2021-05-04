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

const UpdateInputWrapper = ({ comment_id, onUpdate, onUpdateMode, onChangeText, content, name="updatedContent" }) => {
    const onClick = () => {
        onUpdateMode();
        onUpdate();
    }
    const onChange = e => {
        const { name, value } = e.target;
        onChangeText({ name, idx: comment_id, value });
    };
    return (
        <StyledUpdateInputWrapper>
            <StyledUpdateInput onChange={onChange} name={name} value={content[comment_id]}/>
            <StyledUpdateBtnsWrapper>
                <StyledUpdateBtn onClick={onClick}>수정</StyledUpdateBtn>
                <StyledCancelBtn onClick={onUpdateMode}>취소</StyledCancelBtn>
            </StyledUpdateBtnsWrapper>
        </StyledUpdateInputWrapper>
    );
};

export default UpdateInputWrapper;