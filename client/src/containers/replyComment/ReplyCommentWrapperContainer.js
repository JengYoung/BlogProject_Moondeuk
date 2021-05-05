import React from 'react'
import ReplyCommentWrapper from '../../components/replyComment/ReplyCommentWrapper'
import ReplyCommentListItemContainer from './ReplyCommentListItemContainer'

function ReplyCommentWrapperContainer({ comment_id, replyComments }) {
    return (
        <ReplyCommentWrapper>
            {
                replyComments.map(replyComment => {
                    const { _id, replier_id, replierInfo, content } = replyComment;
                    return(
                        <ReplyCommentListItemContainer 
                            key={_id} 
                            _id={comment_id} 
                            comment_id={_id} 
                            replierInfo={replierInfo} 
                            replier_id={replier_id}
                            content={content}
                        />
                    )
                })
            }
        </ReplyCommentWrapper>
    )
}

export default ReplyCommentWrapperContainer
