import React from 'react'
import styled, { css } from 'styled-components';
import { FaRegCommentDots } from 'react-icons/fa'
/*
*/

const StyledOptionBtnsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    span {
        padding-left: 2px;
        &:hover {
            color: #8d4a8d;
        }
    }
    ${props =>
        props.isReply && css`
            padding-left: 0;
            padding-bottom: 0.5rem;
        `
    }
`;

const StyledOptionBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    svg {
        font-size: 1.125rem;
        margin-right: 0.25rem;
    }
    &:hover {
        cursor: pointer;
        color: #8d4a8d;
    }
`;


const OptionBtnsWrapper = ({ isReply, onIsReplyCommentMode, likeBtn }) => {
    return (
        <StyledOptionBtnsWrapper isReply={isReply}>
            {likeBtn}
            <StyledOptionBtn onClick={onIsReplyCommentMode}><FaRegCommentDots/><span>답글 달기</span></StyledOptionBtn>
        </StyledOptionBtnsWrapper>
    );
};

export default OptionBtnsWrapper;