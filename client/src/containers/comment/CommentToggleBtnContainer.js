import React from 'react'
import { useSelector } from 'react-redux';
import CommentToggleBtn from '../../components/comment/CommentToggleBtn';

function CommentToggleBtnContainer() {
    const comments = useSelector(state => state.commentReducer.comments);
    return (
        <CommentToggleBtn>
            {comments.length > 999 ? '999+' : comments.length}
        </CommentToggleBtn>
    )
}

export default CommentToggleBtnContainer
