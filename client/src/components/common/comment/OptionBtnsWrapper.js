import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledOptionBtnsWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const StyledOptionBtn = styled.button`
    background: none;
    border: none;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`;


const OptionBtnsWrapper = ({ onIsReplyCommentMode }) => {
    return (
        <StyledOptionBtnsWrapper>
            <StyledOptionBtn>
                👍10000
            </StyledOptionBtn>
            <StyledOptionBtn onClick={onIsReplyCommentMode}>💭답글 달기</StyledOptionBtn>
        </StyledOptionBtnsWrapper>
    );
};

export default OptionBtnsWrapper;