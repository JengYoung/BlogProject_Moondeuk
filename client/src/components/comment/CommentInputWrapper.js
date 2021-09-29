import React from 'react'
import styled, { css } from 'styled-components';
import { TiPencil } from "react-icons/ti";
import FooterBtn from '../common/FooterBtn';
import { myFont } from 'lib/styles/_variable';
/*
*/

const StyledCommentInputWrapper = styled.form`
    display: flex;
    position: relative;
    width: 100%;
    border-radius: 5px;
    /* overflow: hidden; */
`;

const StyledCommentInput = styled.textarea`
    resize: none;
    width: calc(100% - 7rem);
    height: 7rem;
    padding: 0.5rem 0.5rem;
    border: none;
    outline: none;
    font-size: 1rem;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid lightgray;
    border-right: none;
`;
const StyledInputBtn = styled(FooterBtn)`
    display: flex;
    flex-direction: column;
    height: 7rem;
    width: 7rem;
    ${({ theme }) => css`
        background: ${theme.commentInputBtnBgColor};
        color: ${theme.buttonColor};
        :hover {
            transition: all 0.3s;
            background: ${theme.event.hoverBg};
            color: ${theme.event.hoverColor};
        }
    `}
    border-radius: 0px 10px 10px 0px;
    svg {
        display: block;
        font-size: ${myFont.size.headlarge};
    }
    div {
        font-size: ${myFont.size.l};
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
        onComment(content[diary_id]);
        content[diary_id]='';
    }
    return (
        <>
            <StyledCommentInputWrapper id="commentInputWrapper" onSubmit={onSubmit}>
                <StyledCommentInput onChange={onChange} placeholder="댓글을 작성해주세요😊" name="content" value={content[diary_id]}/>
                <StyledInputBtn>
                    <TiPencil/>
                    <div>작성</div>
                </StyledInputBtn>
            </StyledCommentInputWrapper>
        </>

    );
};

export default CommentInputWrapper;