import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CommentWrapper from '../../components/comment/CommentWrapper';
import { checkComment } from '../../modules/comment';
import CommentInputWrapperContainer from './CommentInputWrapperContainer';
import CommentListContainer from './CommentListContainer';

const CommentWrapperContainer = () => {
    const dispatch = useDispatch();
    const { user, diary, comment, comments } = useSelector(({ userReducer, diaryReducer, commentReducer, comments }) => ({ 
        user: userReducer.user,
        diary: diaryReducer.diary,
        comment: commentReducer.comment,
        comments: commentReducer.comments,
    }));

    const user_id = user ? user._id : null;
    const username = user ? user.userId : null;
    const diary_id = diary ? diary._id : null;

    useEffect(() => {
        dispatch(checkComment(diary_id))
    }, [dispatch, diary_id, comment]);

    return (
        <CommentWrapper>
            <CommentInputWrapperContainer user_id={user_id} diary_id={diary_id} />
            <CommentListContainer username={username} comments={comments} />
        </CommentWrapper>
    )
}

export default CommentWrapperContainer
