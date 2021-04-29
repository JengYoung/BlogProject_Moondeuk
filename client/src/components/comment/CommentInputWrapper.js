import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentInputWrapper = styled.div`
    display: flex;
`;

const StyledCommentInput = styled.textarea`
    resize: none;
    height: auto;
    max-height: 5rem;
    padding: 0.5rem 0.5rem;
    width: 90%;
`;
const StyledInputBtn = styled.button`
    width: 15%;
`;

const CommentInputWrapper = () => {
    return (
        <StyledCommentInputWrapper>
            <StyledCommentInput placeholder="댓글을 작성해주세요😊" />
            <StyledInputBtn>입력</StyledInputBtn>
        </StyledCommentInputWrapper>
    );
};

export default CommentInputWrapper;