import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CommentInputWrapper from '../../components/comment/CommentInputWrapper';
import { alertUser } from '../../modules/alert';
import { changeText, commentDiary, initializeComment } from '../../modules/comment';

//{ user_id, diary_id, author_id }  
const CommentInputWrapperContainer = () => {
    const dispatch = useDispatch();
    const { user, diary, content } = useSelector(({ userReducer, diaryReducer, commentReducer }) => ({ 
        user: userReducer.user,
        diary: diaryReducer.diary,
        content: commentReducer.content,
    }));

    const user_id = user ? user._id : null;
    const diary_id = diary ? diary._id : null;
    const author_id = diary ? diary.author._id : null;


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
        dispatch(alertUser({ sender_id: user_id, receiver_id: author_id, type: "Comment", type_detail: { diary_id, content } }))
        content[diary_id]='';
    },[dispatch, diary_id, user_id, author_id]);

    return (
        <CommentInputWrapper 
            id="commentInput" 
            content={content[diary_id]} 
            diary_id={diary_id} 
            onComment={onComment} 
            onChangeText={onChangeText} 
        />
    )
}

export default CommentInputWrapperContainer
