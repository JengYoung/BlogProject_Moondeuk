import React from 'react'
import styled from 'styled-components';

/*
*/


const StyledCommentBtnsWrapper = styled.div`
    position: absolute;
    right: 0;
`;
const StyledCommentUpdateBtn = styled.button`
    background-color: transparent;
    font-size: 0.5rem;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
    };
`;
const StyledCommentDeleteBtn = styled.button`
    background-color: transparent;
    font-size: 0.5rem;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
    };
`;

const CommentBtnsWrapper = ({ content, onIsUpdateMode, onSettingUpdate }) => {
    const onClick = () => {
        onIsUpdateMode();
        onSettingUpdate(content);
    }
    return (
            <StyledCommentBtnsWrapper>
                <StyledCommentUpdateBtn onClick={onClick}>수정</StyledCommentUpdateBtn>
                <StyledCommentDeleteBtn>삭제</StyledCommentDeleteBtn>
            </StyledCommentBtnsWrapper>
    );
};

export default CommentBtnsWrapper;