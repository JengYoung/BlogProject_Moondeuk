import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledReplyCommentWrapper = styled.div`
    background-color: gray;
    margin-left: 3rem;
`;

const ReplyCommentWrapper = (props) => {
    return (
        <StyledReplyCommentWrapper {...props}>
        </StyledReplyCommentWrapper>
    );
};

export default ReplyCommentWrapper;