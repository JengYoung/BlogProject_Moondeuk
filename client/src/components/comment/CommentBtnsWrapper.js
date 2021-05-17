import React from 'react'
import styled from 'styled-components';

/*
*/


const StyledCommentBtnsWrapper = styled.div`
    position: absolute;
    right: 0;
`;

const StyledCommentBtn = styled.button`
    background-color: transparent;
    font-size: 0.5rem;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
        color: #7a4e88;
        border-bottom: 1px solid #7a4e88;
    };
`;

const CommentBtnsWrapper = ({ onIsUpdateMode, onSettingUpdate, onDeleteComment }) => {
    const onUpdateMode = () => {
        onIsUpdateMode();
        onSettingUpdate();
    }
    const onDelete = () => {
        onDeleteComment();
    }
    return (
            <StyledCommentBtnsWrapper>
                <StyledCommentBtn onClick={onUpdateMode}>수정</StyledCommentBtn>
                <StyledCommentBtn onClick={onDelete}>삭제</StyledCommentBtn>
            </StyledCommentBtnsWrapper>
    );
};

export default CommentBtnsWrapper;