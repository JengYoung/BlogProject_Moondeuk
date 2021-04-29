import React from 'react'
import CommentList from '../../components/comment/CommentList'
import CommentListItem from '../../components/comment/CommentListItem';

const CommentListContainer = ({ comments }) => {
    return (
        <CommentList>
            { comments.map(comment => {
                console.log(comment)
                const { _id, userInfo, content } = comment;
                const { userId, nickname } = userInfo;
                return <CommentListItem key={_id} userId={userId} nickname={nickname} content={content} />
            })}
        </CommentList>
    )
}

export default CommentListContainer
