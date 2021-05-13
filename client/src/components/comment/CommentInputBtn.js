import React from 'react'
import styled from 'styled-components';
import FooterBtn from '../common/FooterBtn';
import { TiEdit } from "react-icons/ti";
/**
**/

const StyledCommentInputBtn = styled(FooterBtn)`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 5rem;
    height: 4rem;
    right: 30px;
    span {
        font-size:0.8rem;
    }
`;

const CommentInputBtn = (props) => {
    const onClick = () => {
        const commentInput = document.querySelector('#commentInputWrapper');
        if (commentInput.classList.contains('open')) commentInput.classList.remove('open');
        else commentInput.classList.add('open');
    }
    return (
        <StyledCommentInputBtn {...props} onClick={onClick}>
            <TiEdit></TiEdit>
            <span>comment</span>
        </StyledCommentInputBtn>
    );
};

export default CommentInputBtn;