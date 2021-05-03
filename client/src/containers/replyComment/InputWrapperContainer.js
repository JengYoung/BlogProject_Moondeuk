import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/common/comment/Input';
import InputBtn from '../../components/common/comment/InputBtn';
import InputWrapper from '../../components/common/comment/InputWrapper';
import diaryReducer from '../../modules/diary';
import { changeReplyCommentText, initializeReplyComment, replyComment } from '../../modules/replyComment';

function InputWrapperContainer({ comment_id, }) {
    const dispatch = useDispatch();
    const { content, user, diary } = useSelector(({ replyCommentReducer, userReducer, diaryReducer }) => ({
        content: replyCommentReducer.content,
        user: userReducer.user,
        diary: diaryReducer.diary,
    }));

    const user_id = user ? user._id : null;
    const diary_id = diary ? diary._id : null;
    const onChangeReplyCommentText = useCallback(({ name, value }) => {
        dispatch(changeReplyCommentText({ name, value }));
    },[dispatch])

    const onSubmit = e => {
        e.preventDefault()
        dispatch(replyComment({ user_id, comment_id, content: content[diary_id], replyTo_id: user_id }))
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
