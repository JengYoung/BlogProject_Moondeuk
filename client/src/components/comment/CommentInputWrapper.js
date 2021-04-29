import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentInputWrapper = styled.form`
    display: flex;
`;

const StyledCommentInput = styled.textarea`
    resize: none;
    height: auto;
    max-height: 5rem;
    padding: 0.5rem 0.5rem;
    width: 90%;
`;
const StyledInputBtn = styled.button`
    width: 15%;
`;

const CommentInputWrapper = ({ comment, onChangeText }) => {
    const onChange = e => {
        const { value } = e.target;
        onChangeText(value);
    };
    
    return (
        <StyledCommentInputWrapper>
            <StyledCommentInput onChange={onChange} placeholder="댓글을 작성해주세요😊" value={comment}/>
            <StyledInputBtn>입력</StyledInputBtn>
        </StyledCommentInputWrapper>
    );
};

export default CommentInputWrapper;