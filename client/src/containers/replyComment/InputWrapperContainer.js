import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/common/comment/Input';
import InputBtn from '../../components/common/comment/InputBtn';
import InputWrapper from '../../components/common/comment/InputWrapper';
import { changeText, replyComment } from '../../modules/comment';

function InputWrapperContainer({ comment_id, }) {
    const dispatch = useDispatch();
    const { content, user, diary } = useSelector(({ commentReducer, userReducer, diaryReducer }) => ({
        content: commentReducer.content,
        user: userReducer.user,
        diary: diaryReducer.diary,
    }));

    const user_id = user ? user._id : null;
    const diary_id = diary ? diary._id : null;
    const onChangeReplyCommentText = useCallback(payload => {
        dispatch(changeText(payload));
    },[dispatch])

    const onSubmit = e => {
        e.preventDefault()
        console.log({ user_id, comment_id, content: content[comment_id], replyTo_id: user_id })
        dispatch(replyComment({ user_id, comment_id, content: content[comment_id], replyTo_id: user_id }))
        content[comment_id] = '';
    }

    return(
        <InputWrapper onSubmit={onSubmit}>
            <Input 
                comment_id={comment_id}
                placeholder="답글 내용을 입력해주세요."
                content={content[comment_id]}
                onChangeText={onChangeReplyCommentText}
                name="content"
            />
            <InputBtn />
        </InputWrapper>
    )
};

export default InputWrapperContainer
