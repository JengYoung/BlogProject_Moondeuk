import React from 'react'
import styled from 'styled-components';
import { TiPencil } from "react-icons/ti";
import FooterBtn from '../common/FooterBtn';
/*
*/

const StyledCommentInputWrapper = styled.form`
    position: fixed;
    display: none;
    width: 400px;
    z-index: 99;
    bottom: 8vh;
    right: 0;
    @media screen and (min-width: 481px) {
        bottom: 10vh;
    }
    &.open {
        display: flex;
    }
    margin-bottom: 2vh;
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
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #4e4e4e;
    outline: none;
    border-left: 5px solid #5f3b5f;
    &:focus {
        border-top: 1px solid #4e4e4e;
        border-right: 1px solid #4e4e4e;
        background-color: #ffffff;
    }
`;
const StyledInputBtn = styled(FooterBtn)`
    height: 3rem;
    width: 3rem;
    border-bottom: 2px solid #4e4e4e;
    &:hover {
        border-right: 1px solid #4e4e4e;
        border-top: 1px solid #4e4e4e;
        flex-direction: column;
        background-color: #aa78aa;
        color: #ffee00;
        &::after {
            content:"작성";
            font-size: 0.5rem;
        }
    }
    /* width: 15%; */
`;

const CommentInputWrapper = ({ content, diary_id, onComment, onChangeText }) => {
    const onChange = e => {
        const { name, value } = e.target;
        onChangeText({ name, idx: diary_id, value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onComment(content);
        content = '';
    }
    return (
        <>
            <StyledCommentInputWrapper id="commentInputWrapper" onSubmit={onSubmit}>
                <StyledCommentInput onChange={onChange} placeholder="댓글을 작성해주세요😊" name="content" value={content}/>
                <StyledInputBtn>
                    <TiPencil/>
                    {/* <span>작성</span> */}
                </StyledInputBtn>
            </StyledCommentInputWrapper>
            <CommentInputWrapperSpacer/>
        </>

    );
};

export default CommentInputWrapper;