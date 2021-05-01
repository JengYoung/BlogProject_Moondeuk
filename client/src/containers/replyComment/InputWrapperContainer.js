import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/common/comment/Input';
import InputBtn from '../../components/common/comment/InputBtn';
import InputWrapper from '../../components/common/comment/InputWrapper';
import { changeReplyCommentText } from '../../modules/replyComment';

function InputWrapperContainer() {
    const dispatch = useDispatch();
    const { content } = useSelector(({ replyCommentReducer }) => ({
        content: replyCommentReducer.content
    }));

    const onChangeReplyCommentText = useCallback(({ name, value }) => {
        dispatch(changeReplyCommentText({ name, value }));
    },[dispatch])

    return(
        <InputWrapper>
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
