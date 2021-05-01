import React from 'react'
import styled from 'styled-components';
import InputBtn from '../common/comment/InputBtn';
import InputWrapper from '../common/comment/InputWrapper';
import ReplyCommentInput from './ReplyCommentInput';

/*
*/

const StyledReplyCommentInputWrapper = styled(InputWrapper)`
`;

const ReplyCommentInputWrapper = (props) => {
    return (
        <StyledReplyCommentInputWrapper { ...props }>
            <ReplyCommentInput/>
            <InputBtn>입력</InputBtn>
        </StyledReplyCommentInputWrapper>
    );
};

export default ReplyCommentInputWrapper;