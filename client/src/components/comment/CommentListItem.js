import React, { useState } from 'react';
import styled from 'styled-components';
import ReplyCommentBtn from '../common/comment/ReplyCommentBtn';
import ReplyCommentWrapper from '../replyComment/ReplyCommentWrapper';
import CommentBtnsWrapper from './CommentBtnsWrapper';
import UpdateInputWrapper from './UpdateInputWrapper';
import OptionBtnsWrapper from '../common/comment/OptionBtnsWrapper';
import InputWrapper from '../common/comment/InputWrapper';
import Input from '../common/comment/Input';
import InputBtn from '../common/comment/InputBtn';
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
    padding: 0.5rem 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    &:first-child {
        border-top: 1px solid gray;
    }
    border-bottom: 1px solid gray;
    position: relative;
`;

const StyledReplyCommentBtn = styled(ReplyCommentBtn)``;

const CommentListItem = (
    { 
        userId, 
        nickname, 
        content, 
        username, 
        onUpdate,
        onSettingUpdate,
        updatedContent,
        onChangeText,
        onDeleteComment 
    }) => {
    const [ isUpdateMode, setisUpdateMode ] = useState(false);
    const [ isReplyRootCommentMode, setIsReplyRootCommentMode ] = useState(false);
    const onIsUpdateMode = () => setisUpdateMode(!isUpdateMode);
    const onIsReplyCommentMode = () => setIsReplyRootCommentMode(!isReplyRootCommentMode);
    const isUser = userId === username;
    return (
        <StyledCommentListItem>
            { isUser && 
                <CommentBtnsWrapper 
                    onIsUpdateMode={onIsUpdateMode}
                    onSettingUpdate={onSettingUpdate}
                    content={content}
                    onDeleteComment={onDeleteComment}
                />
            }
            <StyledCommentUserInfo>{userId}({nickname})</StyledCommentUserInfo>
            { 
                isUpdateMode 
                    ? <UpdateInputWrapper 
                        content={content} 
                        onUpdate={onUpdate} 
                        onIsUpdateMode={onIsUpdateMode} 
                        onSettingUpdate={onSettingUpdate} 
                        updatedContent={updatedContent}
                        onChangeText={onChangeText}
                    /> 
                    : <StyledCommentContent>{content}</StyledCommentContent>
            }
            <OptionBtnsWrapper 
                onIsReplyCommentMode={onIsReplyCommentMode}>
            </OptionBtnsWrapper>
            {isReplyRootCommentMode && 
                <InputWrapper>
                    <Input isReplyRootCommentMode={isReplyRootCommentMode}/>
                    <InputBtn setIsReplyRootCommentMode={setIsReplyRootCommentMode}/>
                </InputWrapper>
            }   
            <StyledReplyCommentBtn>💬답글 보기</StyledReplyCommentBtn>
            <ReplyCommentWrapper/>
        </StyledCommentListItem>

    );
};

export default CommentListItem;