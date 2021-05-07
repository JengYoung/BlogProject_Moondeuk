import React from 'react'
import styled from 'styled-components';
import names from '../../../lib/inputNames';
import Input from '../Input';

/**
 * * composed of... 1. InputTitle 2. Input 3. description
**/

const StyledInputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding-bottom: 1rem;
`;
const StyledInputTitle = styled.h2`
    padding-left: 0.5rem;
    display: inline-block;
    font-size: 1rem;
    font-weight: 700;
`;

const InputBox = (props) => {
    return (
        <StyledInputBox {...props}>
            <StyledInputTitle>{names[props.name]}</StyledInputTitle>
            <Input type={props.type} names={names} name={props.name}></Input>
            {props.name === 'password' && <Input type={props.name} names={names} name="passwordConform"></Input>}
        </StyledInputBox>
    );
};

export default InputBox;