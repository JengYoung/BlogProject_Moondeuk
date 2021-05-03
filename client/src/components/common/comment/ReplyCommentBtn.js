import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledReplyCommentBtn = styled.span`
    border: none;
    background-color: transparent;
    color: #ce64ce;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    &:hover {
        cursor: pointer;
    }
`;

const ReplyCommentBtn = ({ children, onShowReplyComment }) => {
    return (
        <StyledReplyCommentBtn onClick={onShowReplyComment}>
            {children}
        </StyledReplyCommentBtn>
    );
};

export default ReplyCommentBtn;