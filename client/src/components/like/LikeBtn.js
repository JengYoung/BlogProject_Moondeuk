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

const likeBtn = ({ onLike, like, onDislike }) => {
    const checkLikeExist = like.diaryId ? like.diaryId : null;
    console.log(checkLikeExist, "add", like.diaryId)
    return (
        checkLikeExist ? 
            <StyledLikeBtn onClick={onDislike}>❤</StyledLikeBtn>
        : 
            <StyledLikeBtn onClick={onLike}>♡</StyledLikeBtn>
    );
};

export default likeBtn;