import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentWrapper = styled.div`
    display: none;
    position: fixed;
    z-index: -1;
    right: 0%;
    top: 4rem;
    background-color: #f8f8f8;
    width: 400px;
    height: 90%;
    overflow-y: scroll;
    box-sizing: border-box;
    &.open {
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