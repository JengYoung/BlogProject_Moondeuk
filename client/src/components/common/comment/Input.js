import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledInput = styled.textarea`
    resize: none;
    height: 3rem;
    max-height: 5rem;
    padding: 0.5rem 0.5rem;
    width: 85%;
    word-break: normal;
    ${props => 
    props.isReplyRootCommentMode && css`
        width: 70%;
    `}
    ${props =>
    props.isReplyCommentMode && css`
        width: 58%;
    `}
`;


const Input = ( props ) => {
    const onChange = e => {
        const { name, value } = e.target;
        props.onChangeText({ name, value })
    }
    return (
        <StyledInput 
            { ...props }
            onChange={onChange}
            value={props.content}
        >{props.children}</StyledInput>
    );
};

export default Input;