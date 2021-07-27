import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentWrapper = styled.div`
    display: block;
    z-index: 50;
    margin: 0 auto;
    width: 100%;
    padding-top: 1rem;
    background-color: #FAFAFA;
    box-sizing: border-box;
`;

const CommentWrapper = (props) => {
    return (
        <StyledCommentWrapper {...props}/>
    );
};

export default CommentWrapper;