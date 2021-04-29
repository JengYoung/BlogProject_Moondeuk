import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CommentInputWrapper from '../../components/comment/CommentInputWrapper';
import CommentWrapper from '../../components/comment/CommentWrapper';
import { changeText } from '../../modules/comment';

const CommentFormContainer = () => {
    const dispatch = useDispatch();
    const { comment } = useSelector(state => ({ comment: state.commentReducer.comment }));

    const onChangeText = useCallback(comment => {
        dispatch(changeText(comment));
    }, [dispatch])

    return (
        <CommentWrapper>
            <CommentInputWrapper comment={comment} onChangeText={onChangeText} />
        </CommentWrapper>
    )
}

export default CommentFormContainer
