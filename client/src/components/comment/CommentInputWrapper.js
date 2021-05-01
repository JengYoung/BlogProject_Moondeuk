import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledCommentInputWrapper = styled.form`
    position: fixed;
    display: flex;
    width: 400px;
    z-index: 99;
`;
const CommentInputWrapperSpacer = styled.div`
    width: 100%;
    height: 3rem;
`;

const StyledCommentInput = styled.textarea`
    resize: none;
    height: 3rem;
    max-height: 5rem;
    padding: 0.5rem 0.5rem;
    width: 85%;
`;
const StyledInputBtn = styled.button`
    width: 15%;
`;

const CommentInputWrapper = ({ content, onComment, onChangeText }) => {
    const onChange = e => {
        const { name, value } = e.target;
        console.log(value);
        onChangeText({ name, value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onComment(content);
    }

    return (
        <>
            <StyledCommentInputWrapper onSubmit={onSubmit}>
                <StyledCommentInput onChange={onChange} placeholder="댓글을 작성해주세요😊" name="content" value={content}/>
                <StyledInputBtn>입력</StyledInputBtn>
            </StyledCommentInputWrapper>
            <CommentInputWrapperSpacer/>
        </>

    );
};

export default CommentInputWrapper;