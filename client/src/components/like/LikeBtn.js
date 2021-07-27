import React from 'react'
import styled, { css } from 'styled-components';
import FooterBtn from '../common/FooterBtn';
import { FaHeart, FaRegHeart } from "react-icons/fa";
/*
    좋아요 버튼
*/

const StyledLikeBtn = styled(FooterBtn)`
    color: #e76060;
    ${props =>
        props.typeName !== 'Diary' && css`
            position: none;
            font-size: 18px;
            margin-right: 0.25rem;
        `
    }
`;


const LikeBtn = ({ typeName, onLike, onDislike, likeExist }) => {
    return (
        likeExist ? 
            <StyledLikeBtn typeName={typeName} onClick={onDislike}><FaHeart/></StyledLikeBtn>
        : 
            <StyledLikeBtn typeName={typeName} onClick={onLike}><FaRegHeart/></StyledLikeBtn>
    );
};

export default LikeBtn;