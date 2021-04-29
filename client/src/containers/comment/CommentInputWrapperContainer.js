import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CommentInputWrapper from '../../components/comment/CommentInputWrapper';
import { changeText, commentDiary, initializeComment } from '../../modules/comment';

const CommentInputWrapperContainer = ({ user_id, diary_id }) => {
    const dispatch = useDispatch();
    const { content } = useSelector(({ commentReducer }) => ({ 
        content: commentReducer.content,
    }));

    useEffect(() => {
        dispatch(initializeComment());
    },[dispatch]);

    const onChangeText = useCallback(content => {
        dispatch(changeText(content));
    }, [dispatch]);

    const onComment = useCallback(content => {
        console.log({ user_id, diary_id, content })
        dispatch(commentDiary({ user_id, diary_id, content }));
        dispatch(initializeComment());
    },[dispatch, diary_id, user_id]);

    return (
        <CommentInputWrapper content={content} onComment={onComment} onChangeText={onChangeText} />
    )
}

export default CommentInputWrapperContainer
