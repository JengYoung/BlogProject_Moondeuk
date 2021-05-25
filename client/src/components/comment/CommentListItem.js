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
    ${props =>
        props.imgUrl && css`
            background-image: url(${props.imgUrl});
            background-size: cover;
        `
    }
`;

const StyledCommentContent = styled.div`
    padding: 1rem 0 1rem 0.5rem;
    margin-left: 0.25rem;
    font-size: 0.9rem;
`;

const StyledCommentListItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: white;
    width: 100vw;
    margin-bottom: 1rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    @media screen and (min-width: 481px) {
        width: 360px;
    }
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
    const { user_id, diary_id, userInfo, replyComments, userImage } = comment;
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
    const loginUserId = user ? user._id : null;
    const isWriter = user_id === loginUserId;
    const replyCommentCount = replyComments.length;
    const imgUrl = '/img/' + userImage.replace('\\', '/');
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
                <StyledUserImage imgUrl={imgUrl}/>
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
                <InputWrapperContainer replier_id={user_id} diary_id={diary_id} _id={comment_id} comment_id={comment_id}/>
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