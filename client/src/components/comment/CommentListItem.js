import React from 'react'
import styled from 'styled-components';
import CommentBtnsWrapper from './CommentBtnsWrapper';

/*
*/

const StyledCommentUserInfo = styled.span`
    font-size: 0.7rem;
    font-weight: 300;
`;

const StyledCommentContent = styled.span`
    font-size: 0.9rem;
`;

const StyledCommentListItem = styled.div`
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    &:first-child {
        border-top: 1px solid gray;
    }
    border-bottom: 1px solid gray;
    position: relative;
`;

const CommentListItem = () => {
    return (
        <StyledCommentListItem>
            <CommentBtnsWrapper></CommentBtnsWrapper>
            <StyledCommentUserInfo>유저이름</StyledCommentUserInfo>
            <StyledCommentContent>내용</StyledCommentContent>
        </StyledCommentListItem>

    );
};

export default CommentListItem;