import React from 'react'
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

/*
*/

const StyledCommentList = styled.div`
    padding: 1rem;
`;

const CommentList = ({ comments }) => {
    return (
        <StyledCommentList>
            { comments.map(comment => {
                const { _id, userInfo, content } = comment;
                const { userId, nickname } = userInfo;
                return <CommentListItem key={_id} userId={userId} nickname={nickname} content={content} />
            })}
        </StyledCommentList>
    );
};

export default CommentList;