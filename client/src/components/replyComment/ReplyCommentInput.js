import React from 'react'
import styled from 'styled-components';
import Input from '../common/comment/Input';

/*
*/

const StyledReplyCommentInput = styled(Input)`
    width: 58%;
`;

const ReplyCommentInput = (props) => {
    return (
        <StyledReplyCommentInput {...props}>
            
        </StyledReplyCommentInput>
    );
};

export default ReplyCommentInput;