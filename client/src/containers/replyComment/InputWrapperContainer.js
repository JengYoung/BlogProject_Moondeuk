import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/common/comment/Input';
import InputBtn from '../../components/common/comment/InputBtn';
import InputWrapper from '../../components/common/comment/InputWrapper';
import { changeReplyCommentText, initializeReplyComment, replyComment } from '../../modules/replyComment';

function InputWrapperContainer({ comment_id, }) {
    const dispatch = useDispatch();
    const { content, user } = useSelector(({ replyCommentReducer, userReducer }) => ({
        content: replyCommentReducer.content,
        user: userReducer.user
    }));

    const user_id = user ? user._id : null;
    const onChangeReplyCommentText = useCallback(({ name, value }) => {
        dispatch(changeReplyCommentText({ name, value }));
    },[dispatch])

    const onSubmit = e => {
        e.preventDefault()
        console.log("시도합니다")
        dispatch(replyComment({ user_id, comment_id, content }))
        dispatch(initializeReplyComment());
    }

    return(
        <InputWrapper onSubmit={onSubmit}>
            <Input 
                placeholder="답글 내용을 입력해주세요."
                content={content}
                onChangeText={onChangeReplyCommentText}
                name="content"
            />
            <InputBtn />
        </InputWrapper>
    )
};

export default InputWrapperContainer
