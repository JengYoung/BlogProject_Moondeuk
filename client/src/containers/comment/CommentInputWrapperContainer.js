import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CommentInputWrapper from '../../components/comment/CommentInputWrapper';
import { alertUser } from '../../modules/alert';
import { changeText, commentDiary, initializeComment } from '../../modules/comment';

const CommentInputWrapperContainer = ({ user_id, diary_id, author_id }) => {
    const dispatch = useDispatch();
    const { content } = useSelector(({ commentReducer }) => ({ 
        content: commentReducer.content,
    }));
    useEffect(() => {
        dispatch(initializeComment());
        return () => {
            dispatch(initializeComment());
        }
    },[dispatch]);

    const onChangeText = useCallback(payload => {
        console.log(payload)
        dispatch(changeText(payload));
    }, [dispatch]);

    const onComment = useCallback(content => {
        console.log({ user_id, diary_id, content })
        dispatch(commentDiary({ user_id, diary_id, content }));
        dispatch(alertUser({ sender_id: user_id, receiver_id: author_id, type: "Comment", type_id: diary_id }))
        dispatch(initializeComment());
    },[dispatch, diary_id, user_id, author_id]);

    return (
        <CommentInputWrapper content={content[diary_id]} diary_id={diary_id} onComment={onComment} onChangeText={onChangeText} />
    )
}

export default CommentInputWrapperContainer
