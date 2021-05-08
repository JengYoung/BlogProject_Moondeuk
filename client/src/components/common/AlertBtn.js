import React from 'react'
import styled, { css } from 'styled-components';
import {BsBell, BsBellFill} from "react-icons/bs";
/*
*/

const StyledAlertBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50px;
    background-color: transparent;
    border: 1px solid lightgray;
    outline: none;
    font-size: 1.5rem;
    border: 1px solid #535353;
    color: #535353;
    ${props => props.count > 0 && css`
        color:  #ffe600;
        border: none;
    `}
    &:hover {
        cursor: pointer;
    }
    @media screen and (min-width: 481px) {
        width: 3rem;
        height: 3rem;
    }
`;

const AlertBtn = ({ onConform, count}) => {
    return (
        <StyledAlertBtn onClick={onConform}>
            {count > 0 ? <BsBellFill></BsBellFill> : <BsBell></BsBell>}
        </StyledAlertBtn>
    );
};

export default AlertBtn;