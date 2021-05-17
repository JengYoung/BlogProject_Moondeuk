import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import CommentListItem from '../../components/comment/CommentListItem';
import { changeText, deleteComment, settingUpdate, updateComment } from '../../modules/comment';

const CommentListItemContainer = ({ comment }) => {
    const { updatedContent, user } = useSelector(({ commentReducer, userReducer }) => ({ 
        updatedContent: commentReducer.updatedContent,
        user: userReducer.user
    }));
    const dispatch = useDispatch();
    const { _id, content } = comment;
    const onUpdate = () => {
        console.log(updatedContent, updatedContent[_id])
        dispatch(updateComment({_id, updatedContent: updatedContent[_id]}));
    };

    const onSettingUpdate = () => {
        dispatch(settingUpdate({ idx: _id, content }))
    }

    const onDeleteComment = () => {
        dispatch(deleteComment(_id));
    }

    const onChangeText = useCallback(payload => {
        dispatch(changeText(payload));
    }, [dispatch]);

//we are good teach
    return (
        <CommentListItem 
            content={content} 
            onUpdate={onUpdate} 
            onSettingUpdate={onSettingUpdate}
            updatedContent={updatedContent}
            onChangeText={onChangeText}
            onDeleteComment={onDeleteComment}
            comment_id={_id}
            comment={comment}
            user={user}
        />
    )
}

export default CommentListItemContainer
