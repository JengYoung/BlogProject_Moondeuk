import React from 'react'
import styled, { css } from 'styled-components';
import {BsChatDotsFill} from 'react-icons/bs'
import FooterBtn from '../common/FooterBtn';
/**
**/

const StyledCommentBtnBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50px;
    position: fixed;
    right: 120px;
    ${({ theme }) => css`
        color: ${theme.fontColor};
        &:hover {
            cursor: pointer;
            color: ${theme.event.hoverBg};
        }
    `}
`;

const StyledCommentToggleBtn = styled(FooterBtn)`
    ${({ theme }) => css`
        color: ${theme.fontColor};
        &:hover {
            cursor: pointer;
            color: ${theme.event.hoverBg};
        }
    `}
`;

const CommentCounter = styled.div`
    padding-left: 5px;
`;

const CommentToggleBtn = ({...props}) => {
    const onClick = () => {
        const contentWrapper = document.querySelector('#contentWrapper');
        if (contentWrapper.classList.contains('open')) contentWrapper.classList.remove('open');
        else contentWrapper.classList.add('open')
    }
    return (
        <StyledCommentBtnBox>
            <StyledCommentToggleBtn onClick={onClick}><BsChatDotsFill/></StyledCommentToggleBtn>
            <CommentCounter>{props.children}</CommentCounter>
        </StyledCommentBtnBox>
    );
};

export default CommentToggleBtn;