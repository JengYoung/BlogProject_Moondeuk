import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledInput = styled.textarea`
    resize: none;
    height: 3rem;
    max-height: 5rem;
    padding: 0.5rem 0.5rem;
    width: 70%;
    word-break: normal;
    ${props => 
    props.isReply && css`
        width: 85%;
    `}
`;


const Input = ({ isReply, comment_id, children, name, content, onChangeText }) => {
    const onChange = e => {
        const { name, value } = e.target;
        console.log("여기는 input: ", name, comment_id, value);
        onChangeText({ name, idx: comment_id, value })
    }
    return (
        <StyledInput 
            isReply={isReply}
            name={name}
            onChange={onChange}
            value={content}
            placeholder="답글을 입력해주세요!🤣"
        >{children}</StyledInput>
    );
};

export default Input;