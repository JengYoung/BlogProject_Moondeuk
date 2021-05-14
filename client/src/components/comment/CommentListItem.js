import React, { useState } from 'react';
import styled from 'styled-components';
import ReplyCommentBtn from '../common/comment/ReplyCommentBtn';
import CommentBtnsWrapper from './CommentBtnsWrapper';
import UpdateInputWrapper from './UpdateInputWrapper';
import OptionBtnsWrapper from '../common/comment/OptionBtnsWrapper';
import InputWrapperContainer from '../../containers/replyComment/InputWrapperContainer';
import ReplyCommentWrapperContainer from '../../containers/replyComment/ReplyCommentWrapperContainer';

/*
*/

const StyledCommentUserInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0 0 0.5rem;
    b {
        padding-left: 10px;
        font-weight: 700;
        font-size: 0.8rem;
    }
`;
const StyledUserImage = styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid lightgray;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`;

const StyledCommentContent = styled.div`
    padding: 1rem 0 1rem 0.5rem;
    font-size: 0.9rem;
`;

const StyledCommentListItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: white;
    width: 360px;
    margin-bottom: 1rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
`;

const CommentListItem = (
    { 
        content, 
        comment,
        onUpdate,
        onSettingUpdate,
        updatedContent,
        onChangeText,
        onDeleteComment, 
        comment_id,
    }) => {
    const { user_id, diary_id, userInfo, username, replyComments} = comment;
    const { userId, nickname } = userInfo;
    const [ isUpdateMode, setisUpdateMode ] = useState(false);
    const onIsUpdateMode = () => setisUpdateMode(!isUpdateMode);
    const [ isReplyRootCommentMode, setIsReplyRootCommentMode ] = useState(false);
    const onIsReplyCommentMode = () => {
        setIsReplyRootCommentMode(!isReplyRootCommentMode)
    };
    const [ showReplyComment, setShowReplyComment ] = useState(false);
    const onShowReplyComment = () => {
        setShowReplyComment(!showReplyComment)
    };
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
            <StyledCommentUserInfo>
                <StyledUserImage/>
                <b>{userId}({nickname})</b>
            </StyledCommentUserInfo>
            { 
                isUpdateMode 
                    ? <UpdateInputWrapper 
                        comment_id={comment_id}
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
                <InputWrapperContainer replier_id={user_id} diary_id={diary_id} _id={comment_id} comment_id={comment_id}/>
            }   
            {replyCommentCount > 0 && 
                <ReplyCommentBtn 
                    onShowReplyComment={onShowReplyComment} 
                    comment_id={comment_id} 
                    count={replyCommentCount}
                />
            }
            {showReplyComment && 
                <ReplyCommentWrapperContainer comment_id={comment_id} replyComments={replyComments}>
                </ReplyCommentWrapperContainer>
            }
        </StyledCommentListItem>

    );
};

export default CommentListItem;