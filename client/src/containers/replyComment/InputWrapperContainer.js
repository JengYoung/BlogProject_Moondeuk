import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/common/comment/Input';
import InputBtn from '../../components/common/comment/InputBtn';
import InputWrapper from '../../components/common/comment/InputWrapper';
import { changeText, replyComment } from '../../modules/comment';

function InputWrapperContainer({ _id, isReply, hasMarginLeft, comment_id, }) {
    console.log("original", _id)
    const dispatch = useDispatch();
    const { content, user } = useSelector(({ commentReducer, userReducer }) => ({
        content: commentReducer.content,
        user: userReducer.user,
    }));

    const user_id = user ? user._id : null;
    const onChangeText = useCallback(payload => {
        console.log(payload)
        dispatch(changeText(payload));
    }, [dispatch]);

    const onSubmit = e => {
        e.preventDefault()
        console.log({ user_id, comment_id: _id, content: content[comment_id], replyTo_id: user_id })
        dispatch(replyComment({ user_id, comment_id: _id, content: content[comment_id], replyTo_id: user_id }))
        content[comment_id] = '';
    }

    return(
        <InputWrapper onSubmit={onSubmit}>
            <Input
                isReply={isReply}
                hasMarginLeft={hasMarginLeft}
                comment_id={comment_id}
                content={content[comment_id]}
                onChangeText={onChangeText}
                name="content"
            />
            <InputBtn isReply={isReply} hasMarginLeft={hasMarginLeft}>입력</InputBtn>
        </InputWrapper>
    )
};

export default InputWrapperContainer
