import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import CommentListItem from '../../components/comment/CommentListItem';
import { changeText, deleteComment, settingUpdate, updateComment } from '../../modules/comment';

const CommentListItemContainer = ({ diary_id, comment, username }) => {
    const { updatedContent } = useSelector(({ commentReducer }) => ({ 
        updatedContent: commentReducer.updatedContent,
    }));
    const dispatch = useDispatch();
    const { _id, userInfo, content, replyComments } = comment;
    const { userId, nickname } = userInfo;
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
