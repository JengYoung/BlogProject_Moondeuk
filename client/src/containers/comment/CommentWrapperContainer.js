import React from 'react'
import { useSelector } from 'react-redux';
import CommentList from '../../components/comment/CommentList';
import CommentWrapper from '../../components/comment/CommentWrapper';
import CommentInputWrapperContainer from './CommentInputWrapperContainer';

const CommentFormContainer = () => {
    const { user, diary } = useSelector(({ userReducer, diaryReducer }) => ({ 
        user: userReducer.user,
        diary: diaryReducer.diary,
    }));

    const user_id = user ? user._id : null;
    const diary_id = diary ? diary._id : null;

    return (
        <CommentWrapper>
            <CommentInputWrapperContainer user_id={user_id} diary_id={diary_id} />
            {/* <CommentList/> */}
        </CommentWrapper>
    )
}

export default CommentFormContainer
