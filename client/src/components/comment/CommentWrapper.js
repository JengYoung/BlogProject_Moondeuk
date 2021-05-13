import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentWrapper = styled.div`
    display: none;
    position: fixed;
    z-index: 50;
    right: 0%;
    bottom: 8vh;
    background-color: #f8f8f8;
    width: 400px;
    height: 84vh;
    box-sizing: border-box;
    transition: all 10s;
    @media screen and (min-width: 481px) {
        height: 80vh;
        bottom: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 78vh;
    }
    &.open {
        background-color: green;
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