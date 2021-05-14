import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    position: fixed;
    z-index: 50;
    right: 0%;
    bottom: 8vh;
    height: 84vh;
    width: 100%;
    background-color: #FAFAFA;
    box-sizing: border-box;
    bottom: -76vh;
    transition: all 0.5s ease;
    @media screen and (min-width: 481px) {
        height: 78vh;
        bottom: -70vh;
    }
    @media screen and (min-width: 769px) {
        height: 80vh;
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