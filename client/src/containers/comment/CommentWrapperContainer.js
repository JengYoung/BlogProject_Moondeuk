import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CommentList from '../../components/comment/CommentList';
import CommentWrapper from '../../components/comment/CommentWrapper';
import { checkComment } from '../../modules/comment';
import CommentInputWrapperContainer from './CommentInputWrapperContainer';
import CommentListItemContainer from './CommentListItemContainer';

const CommentWrapperContainer = () => {
    const dispatch = useDispatch();
    const { user, diary, comment, comments } = useSelector(({ userReducer, diaryReducer, commentReducer }) => ({ 
        user: userReducer.user,
        diary: diaryReducer.diary,
        comment: commentReducer.comment,
        comments: commentReducer.comments,
    }));

    const user_id = user ? user._id : null;
    const username = user ? user.userId : null;
    const diary_id = diary ? diary._id : null;
    const author_id = diary ? diary.author._id : null;

    useEffect(() => {
        dispatch(checkComment(diary_id))
    }, [dispatch, diary_id, comment]);

    return (
        <CommentWrapper>
            <CommentInputWrapperContainer author_id={author_id} user_id={user_id} diary_id={diary_id} />
            <CommentList>
                { comments.map(comment => {
                    return (
                        <CommentListItemContainer 
                            user_id={user_id}
                            diary_id={diary_id}
                            key={comment._id} 
                            comment={comment} 
                            username={username}
                        />
                    )
                })}
            </CommentList>
        </CommentWrapper>
    )
}

export default CommentWrapperContainer
