import React from 'react'
import styled from 'styled-components';

/*
    좋아요 버튼
*/

const StyledLikeBtn = styled.div`
    &:hover {
        cursor: pointer;
    };
    background-color: transparent;
    outline: none;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
`;

const likeBtn = ({ onLike, like }) => {
    return (
        <StyledLikeBtn onClick={onLike}>
            { like._id ? '❤' : '♡'}
        </StyledLikeBtn>
    );
};

export default likeBtn;