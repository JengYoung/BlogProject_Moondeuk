import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledLikeCounters = styled.button`
    border: none;
    background-color: transparent;
    outline: none;
    &:hover {
        cursor: pointer;
    };
`;

const LikeCounters = ({likes, onLikeList}) => {
    return (
        <StyledLikeCounters onClick={onLikeList}>
            {likes.length}
        </StyledLikeCounters>
    );
};

export default LikeCounters;