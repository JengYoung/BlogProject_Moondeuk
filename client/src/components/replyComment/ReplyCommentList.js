import React from 'react'
import styled from 'styled-components';
import ReplyCommentListItem from './ReplyCommentListItem';

/*
*/

const StyledReplyCommentList = styled.div``;

const ReplyCommentList = () => {
    return (
        <StyledReplyCommentList>
            <ReplyCommentListItem/>
        </StyledReplyCommentList>
    );
};

export default ReplyCommentList;