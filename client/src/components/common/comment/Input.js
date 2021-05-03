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
    const { onChangeText, comment_id } = props;
    const onChange = e => {
        const { name, value } = e.target;
        console.log(name, comment_id, value);
        onChangeText({ name, idx: comment_id, value })
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