import React from 'react'
import Input from '../../components/common/comment/Input'
import InputBtn from '../../components/common/comment/InputBtn'
import InputWrapper from '../../components/common/comment/InputWrapper'
import ReplyCommentWrapper from '../../components/replyComment/ReplyCommentWrapper'
import ReplyCommentListItemContainer from './ReplyCommentListItemContainer'

function ReplyCommentWrapperContainer({ comment_id, replyComments }) {
    return (
        <ReplyCommentWrapper>
            {
                replyComments.map(replyComment => {
                    const { replierInfo, content } = replyComment;
                    return(
                        <ReplyCommentListItemContainer replierInfo={replierInfo} content={content}></ReplyCommentListItemContainer>
                    )
                })
            }
            <InputWrapper isReply>
                <Input isReply></Input>
                <InputBtn>입력</InputBtn>    
            </InputWrapper> 
        </ReplyCommentWrapper>
    )
}

export default ReplyCommentWrapperContainer
