import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import CommentListItem from '../../components/comment/CommentListItem';
import { changeText, deleteComment, settingUpdate, updateComment } from '../../modules/comment';

const CommentListItemContainer = ({ comment, username }) => {
    const { updatedContent } = useSelector(({ commentReducer }) => ({ updatedContent: commentReducer.updatedContent }));
    const dispatch = useDispatch();
    const { _id, userInfo, content } = comment;
    const { userId, nickname } = userInfo;
    const onUpdate = () => {
        dispatch(updateComment({_id, updatedContent}));
    };

    const onSettingUpdate = (content) => {
        dispatch(settingUpdate(content))
    }
    const onDeleteComment = (comment_id) => {
        dispatch(deleteComment(_id));
    }
    const onChangeText = useCallback(payload => {
        dispatch(changeText(payload));
    }, [dispatch]);

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
        />
    )
}

export default CommentListItemContainer
