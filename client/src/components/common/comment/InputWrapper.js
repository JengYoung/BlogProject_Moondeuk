import React from 'react'
import styled, { css } from 'styled-components';

/*
    댓글창 / 대댓글창에 사용하기 위한 공통 컴포넌트
*/

const StyledInputWrapper = styled.form`
    display: flex;
    width: 400px;
    z-index: 99;
    ${props => 
    props.isReply && css`
        width: 100%;
    `}
`;

const InputWrapper = props => {
    return (
        <StyledInputWrapper {...props}>
        </StyledInputWrapper>
    );
};

export default InputWrapper;