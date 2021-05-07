import React from 'react'
import styled, { css } from 'styled-components';
import InputBox from '../common/auth/InputBox';

/**
**/

const StyledRegisterInputBox = styled(InputBox)`
    ${props => 
        props.name !== "userId" && css`
            position: absolute;
            right: -300px;
        `
    }
`;

const RegisterInputBox = (props) => {
    return (
        <StyledRegisterInputBox {...props}>
            
        </StyledRegisterInputBox>
    );
};

export default RegisterInputBox;