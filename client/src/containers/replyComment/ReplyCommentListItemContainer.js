import React from 'react'
import ListItem from '../../components/common/comment/ListItem'

function ReplyCommentListItemContainer({ replierInfo, content }) {
    return (
        <ListItem replierInfo={replierInfo} content={content}>
        </ListItem>
    )
}

export default ReplyCommentListItemContainer
