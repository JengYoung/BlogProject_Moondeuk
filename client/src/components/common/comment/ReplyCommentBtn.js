import React from 'react'
import styled, { css } from 'styled-components';
import { FaRegComments } from "react-icons/fa";
/*
*/

const StyledReplyCommentBtn = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    border: none;
    width: calc(100% + 1px);
    background-color: #e4d2e4;
    bottom: -1px;
    font-weight: 600;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    span {
        padding-left: 5px;
    }
    &:hover {
        cursor: pointer;
        color: #8d4a8d;
    }
    ${props =>
        props.showReplyComment && css`
            color: #8d4a8d;
        `
    }
`;

const ReplyCommentBtn = ({ children, onShowReplyComment, count, showReplyComment }) => {
    return (
        <StyledReplyCommentBtn showReplyComment={showReplyComment} onClick={onShowReplyComment}>
            <FaRegComments/>
            <span>답글 {count}</span>
        </StyledReplyCommentBtn>
    );
};

export default ReplyCommentBtn;