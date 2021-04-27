import React from 'react'
import styled from 'styled-components';

/*
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
    console.log(like);
    return (
        <StyledLikeBtn onClick={onLike}>
            { like.length > 0 ? '❤' : '♡'}
        </StyledLikeBtn>
    );
};

export default likeBtn;