import React from 'react'
import styled from 'styled-components';
import ReplyCommentInputWrapper from './ReplyCommentInputWrapper';
import ReplyCommentList from './ReplyCommentList';

/*
*/

const StyledReplyCommentWrapper = styled.div`
    background-color: gray;
    padding-left: 3rem;
`;

const ReplyCommentWrapper = () => {
    return (
        <StyledReplyCommentWrapper>
            <ReplyCommentInputWrapper/>
            <ReplyCommentList/>
        </StyledReplyCommentWrapper>
    );
};

export default ReplyCommentWrapper;