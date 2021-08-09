import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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
    }
`;

const StyledUserImage = styled.div`
    position: relative;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 30px;
    border: 1px solid lightgray;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
    ${props =>
        props.userImage && css`
            background-image: url(${props.userImage});
            background-size: cover;
        `
    }
`;

const StyledCommentContent = styled.div`
    padding: 1rem 0 1rem 0.5rem;
    margin-left: 0.25rem;
`;

const StyledCommentListItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0.5rem;
    margin-top: 2rem;
    width: 100%;
    background-color: white;
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
        user,
        likeBtn
    }) => {
    const { user_id, userInfo, replyComments } = comment;
    const { userId, nickname, userImage } = userInfo;
    const receiver = { _id: user_id, nickname }

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
    const loginUserId = user ? user._id : null;
    const isWriter = user_id === loginUserId;
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
                <StyledUserImage userImage={userImage}/>
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
                onIsReplyCommentMode={onIsReplyCommentMode}
                likeBtn={likeBtn}
            />
            {isReplyRootCommentMode && 
                <InputWrapperContainer  
                    _id={comment_id}
                    receiver={receiver} 
                    comment_id={comment_id}
                />
            }   
            {replyCommentCount > 0 && 
                <ReplyCommentBtn 
                    showReplyComment={showReplyComment}
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