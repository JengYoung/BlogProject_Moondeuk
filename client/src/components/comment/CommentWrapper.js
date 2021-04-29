import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentWrapper = styled.div`
    position: fixed;
    right: 0%;
    top: 4rem;
    background-color: #f8f8f8;
    width: 400px;
    height: 90%;
    overflow-y: scroll;
    box-sizing: border-box;
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