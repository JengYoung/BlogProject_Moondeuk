import React from 'react'
import styled, { css } from 'styled-components';

/*
    댓글창 / 대댓글창에 사용하기 위한 공통 컴포넌트
*/

const StyledInputWrapper = styled.form`
    display: flex;
    width: 100%;
    height: 7rem;
    margin-bottom: 1rem;
`;

const InputWrapper = props => {
    return (
        <StyledInputWrapper {...props}>
        </StyledInputWrapper>
    );
};

export default InputWrapper;