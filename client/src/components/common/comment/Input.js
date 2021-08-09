import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledInput = styled.textarea`
    resize: none;
    height: 7rem;
    padding: 0.5rem 0.5rem;
    width: calc(100% - 7rem);
    border-radius: 10px 0 0 10px;
    word-break: normal;
    outline: none;
    border-color: lightgray;
    font-size: 1rem;
`;


const Input = ({ isReply, hasMarginLeft, comment_id, children, name, content, onChangeText }) => {
    const onChange = e => {
        const { name, value } = e.target;
        onChangeText({ name, idx: comment_id, value })
    }
    return (
        <StyledInput 
            isReply={isReply}
            hasMarginLeft={hasMarginLeft}
            name={name}
            onChange={onChange}
            value={content}
            placeholder="답글을 입력해주세요!🤣"
        >{children}</StyledInput>
    );
};

export default Input;