import React, { useState } from 'react';
import styled from 'styled-components';
import ReplyCommentBtn from '../common/comment/ReplyCommentBtn';
import ReplyCommentWrapper from '../replyComment/ReplyCommentWrapper';
import CommentBtnsWrapper from './CommentBtnsWrapper';
import UpdateInputWrapper from './UpdateInputWrapper';
import OptionBtnsWrapper from '../common/comment/OptionBtnsWrapper';
import InputWrapperContainer from '../../containers/replyComment/InputWrapperContainer';
// import ReplyCommentBtnContainer from '../../containers/replyComment/ReplyCommentBtnContainer';
// import InputWrapperContainer from '../../containers/replyComment/InputWrapperContainer';
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
        onDeleteComment, 
        comment_id,
        replyComments,
    }) => {
    const [ isUpdateMode, setisUpdateMode ] = useState(false);
    const [ isReplyRootCommentMode, setIsReplyRootCommentMode ] = useState(false);
    const onIsUpdateMode = () => setisUpdateMode(!isUpdateMode);
    const onIsReplyCommentMode = () => setIsReplyRootCommentMode(!isReplyRootCommentMode);
    const isWriter = userId === username;
    const replyCommentCount = replyComments.length;
    return (
        <StyledCommentListItem>
            { isWriter && !isUpdateMode &&
                <CommentBtnsWrapper 
                    onIsUpdateMode={onIsUpdateMode}
                    onSettingUpdate={onSettingUpdate}
                    onDeleteComment={onDeleteComment}
                />
            }
            <StyledCommentUserInfo>{userId}({nickname})</StyledCommentUserInfo>
            { 
                isUpdateMode 
                    ? <UpdateInputWrapper 
                        onUpdate={onUpdate} 
                        onIsUpdateMode={onIsUpdateMode} 
                        updatedContent={updatedContent}
                        onChangeText={onChangeText}
                    /> 
                    : <StyledCommentContent>{content}</StyledCommentContent>
            }
            <OptionBtnsWrapper 
                onIsReplyCommentMode={onIsReplyCommentMode}>
            </OptionBtnsWrapper>
            {isReplyRootCommentMode && 
                <InputWrapperContainer comment_id={comment_id}/>
            }   
            {replyCommentCount && 
                <ReplyCommentBtn comment_id={comment_id} > 
                    {replyCommentCount}개의 💬답글 보기 
                </ReplyCommentBtn>
            }
            <ReplyCommentWrapper/>
        </StyledCommentListItem>

    );
};

export default CommentListItem;