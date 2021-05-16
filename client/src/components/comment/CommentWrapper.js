import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentWrapper = styled.div`
    display: flex;
    position: fixed;
    z-index: 50;
    right: 0;
    bottom: -76vh;
    width: 100vw;
    height: 84vh;
    padding-top: 1rem;
    background-color: #FAFAFA;
    box-sizing: border-box;
    transition: all 0.5s ease;
    overflow-y: auto;
    overflow-x: hidden;
    @media screen and (min-width: 481px) {
        justify-content: center;
        height: 80vh;
        bottom: -70vh;
    }
    @media screen and (min-width: 769px) {
        height: 78vh;
        width: 400px;
        bottom: -70vh;
    }
    &.open {
        bottom: 8vh;
        @media screen and (min-width: 481px) {
            bottom: 10vh;
        }
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