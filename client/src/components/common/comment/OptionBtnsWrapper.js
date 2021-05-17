import React from 'react'
import styled, { css } from 'styled-components';
import { FaHeart } from "react-icons/fa";
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
        font-size: 0.7rem;
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
    &:hover {
        cursor: pointer;
        color: #8d4a8d;

    }
`;


const OptionBtnsWrapper = ({ isReply, onIsReplyCommentMode }) => {
    return (
        <StyledOptionBtnsWrapper isReply={isReply}>
            <StyledOptionBtn>
                <FaHeart/>
            </StyledOptionBtn>
            <StyledOptionBtn onClick={onIsReplyCommentMode}><FaRegCommentDots/><span>답글 달기</span></StyledOptionBtn>
        </StyledOptionBtnsWrapper>
    );
};

export default OptionBtnsWrapper;