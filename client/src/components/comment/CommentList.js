import React from 'react'
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

/*
*/

const StyledCommentList = styled.div`
    padding: 1rem;
`;

const CommentList = () => {
    return (
        <StyledCommentList>
            <CommentListItem/>
        </StyledCommentList>
    );
};

export default CommentList;