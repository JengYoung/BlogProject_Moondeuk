import React from 'react'
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/common/comment/Input';
import InputBtn from '../../components/common/comment/InputBtn';
import InputWrapper from '../../components/common/comment/InputWrapper';
import { alertUser } from '../../modules/alert';
import { changeText, replyComment } from '../../modules/comment';

/**
 * 
 * *  ! 현재 호출하는 컴포넌트  
 * * ReplyCommentListItemContainer
 *
 * @props { _id } <string> replyComment의 몽고DB 아이디
 * @props { receiver } <number>  대댓글을 이제 받을 사람에 대한 정보
 * @props { isReply } <Boolean> 지금 댓글을 다는지
 * @props { hasMarginLeft } <Boolean> 왼쪽으로 여백을 줄 지 여부
 * @props { comment_id } <string> comment달았던 댓글의 몽고DB 아이디
 * (@props { nickname } <string> 댓글 달 사람의 닉네임)
 */ 
function InputWrapperContainer({ _id, receiver, isReply, hasMarginLeft, comment_id }) { 
    console.log("RECEIVER", receiver)
    const dispatch = useDispatch();
    const { content, user, diary } = useSelector(({ commentReducer, userReducer, diaryReducer }) => ({
        content: commentReducer.content,
        user: userReducer.user,
        diary: diaryReducer.diary,
    }));
    const diary_id = diary ? diary._id : null;
    const user_id = user ? user._id : null;
    const nickname = user.nickname ?? null;
    const onChangeText = useCallback(payload => {
        dispatch(changeText(payload));
    }, [dispatch]);
    /**
     * replyTo, //누구에게 보내는지. (property: 1. _id, 2: nickname)
     * content, // 내용
     * nickname, // 보낸 사람의 닉네임
     * comment_id, // comment_id (말 그대로)
     * user_id // 보내는 사람의 몽고DB 아이디
     */
    const onSubmit = e => {
        e.preventDefault()
        const replyTo = user_id === receiver._id ? { _id: null, nickname: null } : { _id: receiver._id, nickname: receiver.nickname };
        console.log("replyTo: ", replyTo, "replier: ", receiver);
        dispatch(replyComment({ user_id, nickname, comment_id, content: content[_id], replyTo }));
        dispatch(alertUser({ 
            sender_id: user_id, 
            receiver_id: replyTo._id,
            type: "ReplyComment", 
            type_detail: { 
                diary_id, 
                comment_id, 
                content: content[_id]
            }
        }))
        e.target.value = '';
    }

    return(
        <InputWrapper onSubmit={onSubmit}>
            <Input
                isReply={isReply}
                hasMarginLeft={hasMarginLeft}
                comment_id={_id}
                content={content[comment_id]}
                onChangeText={onChangeText}
                name="content"
            />
            <InputBtn isReply={isReply} hasMarginLeft={hasMarginLeft}>입력</InputBtn>
        </InputWrapper>
    )
};

export default InputWrapperContainer
