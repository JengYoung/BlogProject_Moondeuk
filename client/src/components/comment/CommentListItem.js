import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import CommentBtnsWrapper from './CommentBtnsWrapper';
import UpdateInputWrapper from './UpdateInputWrapper';

/*
*/

const StyledCommentUserInfo = styled.span`
    font-size: 0.7rem;
    font-weight: 300;
`;

const StyledCommentContent = styled.span`
    font-size: 0.9rem;
`;

const StyledCommentListItem = styled.div`
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    &:first-child {
        border-top: 1px solid gray;
    }
    border-bottom: 1px solid gray;
    position: relative;
`;

const CommentListItem = ({key, userId, nickname, content, username, onUpdate}) => {
    const [ isUpdateMode, setisUpdateMode ] = useState(false);
    const onIsUpdateMode = () => setisUpdateMode(!isUpdateMode);
    const isUser = userId === username;
    return (
        <StyledCommentListItem>
            { isUser && 
                <CommentBtnsWrapper 
                    onIsUpdateMode={onIsUpdateMode}
                />
            }
            <StyledCommentUserInfo>{userId}({nickname})</StyledCommentUserInfo>
            { 
                isUpdateMode 
                    ? <UpdateInputWrapper onIsUpdateMode={onIsUpdateMode} /> 
                    : <StyledCommentContent>{content}</StyledCommentContent>
            }
        </StyledCommentListItem>

    );
};

export default CommentListItem;