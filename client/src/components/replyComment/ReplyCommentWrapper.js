import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledReplyCommentWrapper = styled.div`
    background-color: #e4d2e4;
    border-bottom: 1px solid #e4d2e4;
    width: calc(100% + 1px);
    padding: 1rem;
    margin: 0;
`;

const ReplyCommentWrapper = (props) => {
    return (
        <StyledReplyCommentWrapper {...props}>
        </StyledReplyCommentWrapper>
    );
};

export default ReplyCommentWrapper;