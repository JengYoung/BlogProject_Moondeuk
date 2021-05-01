import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommonCommentInput = styled.textarea`
    resize: none;
    height: 3rem;
    max-height: 5rem;
    padding: 0.5rem 0.5rem;
    width: 85%;
    word-break: normal;
`;

const CommonCommentInput = props => {
    return (
        <StyledCommonCommentInput { ...props }/>
    );
};

export default CommonCommentInput;