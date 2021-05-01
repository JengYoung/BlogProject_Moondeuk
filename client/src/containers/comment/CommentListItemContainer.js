import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import CommentListItem from '../../components/comment/CommentListItem';
import { changeText, deleteComment, settingUpdate, updateComment } from '../../modules/comment';
import { checkReplyComment } from '../../modules/replyComment';

const CommentListItemContainer = ({ comment, username }) => {
    const { updatedContent, replyComments } = useSelector(({ commentReducer, replyCommentReducer }) => ({ 
        updatedContent: commentReducer.updatedContent,
        replyComments: replyCommentReducer.replyComments
    }));
    const dispatch = useDispatch();
    const { _id, userInfo, content } = comment;
    const { userId, nickname } = userInfo;
    const onUpdate = () => {
        dispatch(updateComment({_id, updatedContent}));
    };

    const onSettingUpdate = () => {
        dispatch(settingUpdate(content))
    }

    const onDeleteComment = () => {
        dispatch(deleteComment(_id));
    }

    const onChangeText = useCallback(payload => {
        dispatch(changeText(payload));
    }, [dispatch]);

    useEffect(() => {
        console.log(_id)
        dispatch(checkReplyComment(_id));
    },[ dispatch, _id ])

    return (
        <CommentListItem 
            userId={userId} 
            nickname={nickname} 
            username={username} 
            content={content} 
            onUpdate={onUpdate} 
            onSettingUpdate={onSettingUpdate}
            updatedContent={updatedContent}
            onChangeText={onChangeText}
            onDeleteComment={onDeleteComment}
            comment_id={_id}
            replyComments={replyComments} // 해당 아이템에서 댓글이 어떤 게 달렸는지.
        />
    )
}

export default CommentListItemContainer
