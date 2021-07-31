import React from 'react'
import ReplyCommentWrapper from '../../components/replyComment/ReplyCommentWrapper'
import ReplyCommentListItemContainer from './ReplyCommentListItemContainer'

function ReplyCommentWrapperContainer({ comment_id, replyComments }) {
    return (
        <ReplyCommentWrapper>
            {
                replyComments.map(replyComment => {
                    return(
                        <ReplyCommentListItemContainer 
                            key={replyComment._id} 
                            replyComment={replyComment}
                            comment_id={comment_id}
                        />
                    )
                })
            }
        </ReplyCommentWrapper>
    )
}

export default ReplyCommentWrapperContainer
