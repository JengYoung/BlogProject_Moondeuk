import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentWrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 50;
    right: 0%;
    bottom: 8vh;
    height: 84vh;
    background-color: #f8f8f8;
    width: 100%;
    box-sizing: border-box;
    right: -400px;
    transition: all 0.5s ease;
    @media screen and (min-width: 481px) {
        height: 80vh;
        bottom: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 78vh;
        width: 400px;
    }
    &.open {
        right: 0;
        background-color: #e3e1e4;
        display: block;
    }
`;

const CommentSpacer = styled.div`
    width: 400px;
    height: 100%;
`;

const CommentWrapper = (props) => {
    return (
        <>
            <StyledCommentWrapper {...props}/>
            <CommentSpacer/>
        </>
    );
};

export default CommentWrapper;