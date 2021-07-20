import React from 'react'
import styled, { css } from 'styled-components';
import {BsBell, BsBellFill} from "react-icons/bs";
import CircleBtn from './CircleBtn';
/*
*/

// const StyledAlertBtn = styled.button`
//     display: flex;
//     position: relative;
//     justify-content: center;
//     align-items: center;
//     width: 2rem;
//     height: 2rem;
//     margin-right: 0.25rem;
//     border-radius: 50px;
//     background-color: transparent;
//     border: 1px solid lightgray;
//     outline: none;
//     font-size: 1.5rem;
//     * {
//         margin: 0;
//     }
//     &:hover {
//         cursor: pointer;
//         color: #ffee00;
//         border: 1px solid #ffee00;
//     }
//         &:hover {
//         color: #ffee00;
//         border: 1px solid #ffee00;
//     }
//     ${props => (props.count > 0) && css`
//         color:  #ffe600;
//         background: #e7a7e7;
//         border: none;
//     `}
//     @media screen and (min-width: 481px) {
//         width: 3rem;
//         height: 3rem;
//         margin-right: 0.5rem;
//     }
// `;

const StyledAlertBtn = styled(CircleBtn)`

`;
const StyledCount = styled.div`
    position: absolute;
    top: -1vh;
    right: -1vw;
    padding: 0.35rem 0.5rem;
    font-size: 0.5rem;
    border-radius: 15px;
    background-color: #944286;
    color: white;
    @media screen and (min-width: 481px) {
        top: 0;
        right: 0;
    }
`;

const AlertBtn = ({ onOpenAlertList, count}) => {
    const onClick = () => {
        onOpenAlertList()
    }
    return (
        <StyledAlertBtn onClick={onClick} count={count}>
            {count > 0 && <StyledCount>{count > 99 ? "+99" : count}</StyledCount>}
            {count > 0 ? <BsBellFill/>: <BsBell/>}
        </StyledAlertBtn>
    );
};

export default AlertBtn;