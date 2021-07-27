import React from 'react'
import styled, { css } from 'styled-components';
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
    svg {
        font-size: 2rem;
    }
    ${({ theme }) => css`
        color: ${theme.fontColor};
        &:hover {
            color: ${theme.event.hoverBg};
            &::after {
                content: "comment";
                font-size: 1rem;
            }
        }
    `}
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
        </StyledCommentInputBtn>
    );
};

export default CommentInputBtn;