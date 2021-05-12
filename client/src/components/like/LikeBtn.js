import React from 'react'
import styled from 'styled-components';
import CircleBtn from '../common/CircleBtn';
import CounterBtn from '../common/CounterBtn';
import { FaHeart, FaRegHeart } from "react-icons/fa";
/*
    좋아요 버튼
*/

const StyledLikeBtn = styled(CounterBtn)`
    color: #e76060;
`;


const LikeBtn = ({ onLike, like, onDislike }) => {
    const checkLikeExist = like.userId ? like.userId : null;
    return (
        checkLikeExist ? 
            <StyledLikeBtn onClick={onDislike}><FaHeart/></StyledLikeBtn>
        : 
            <StyledLikeBtn onClick={onLike}><FaRegHeart/></StyledLikeBtn>
    );
};

export default LikeBtn;