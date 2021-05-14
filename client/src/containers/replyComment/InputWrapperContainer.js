import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/common/comment/Input';
import InputBtn from '../../components/common/comment/InputBtn';
import InputWrapper from '../../components/common/comment/InputWrapper';
import { alertUser } from '../../modules/alert';
import { changeText, replyComment } from '../../modules/comment';

function InputWrapperContainer({ _id, replier_id, isReply, hasMarginLeft, comment_id, }) {
    console.log("replier_id - InputWrapperContainer: ", replier_id)
    /* 
        comment_id : if each replyComment target's id (when clicked "답글 달기 " button.)
        _id: root comment target's id (when clicked "답글 달기 " button.)
    */ 
    const dispatch = useDispatch();
    const { content, user, diary } = useSelector(({ commentReducer, userReducer, diaryReducer }) => ({
        content: commentReducer.content,
        user: userReducer.user,
        diary: diaryReducer.diary,
    }));
    const diary_id = diary ? diary._id : null;
    /*
        user_id: login user id
        userId: replier's id
    */ 
    const user_id = user ? user._id : null;
    const onChangeText = useCallback(payload => {
        console.log(payload)
        dispatch(changeText(payload));
    }, [dispatch]);
    const onSubmit = e => {
        e.preventDefault()
        console.log({ user_id, comment_id: _id, content: content[comment_id], replyTo_id: user_id })
        dispatch(replyComment({ user_id, comment_id: _id, content: content[comment_id], replyTo_id: comment_id }))
        dispatch(alertUser({ 
            sender_id: 
            user_id, 
            receiver_id: replier_id, 
            type: "ReplyComment", 
            type_detail: { 
                diary_id, 
                comment_id, 
                content: content[comment_id]
            }
        }))
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
