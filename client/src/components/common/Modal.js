import React from 'react'
import styled from 'styled-components';
// import Button from './Button';

/*
*/

export const StyledModalBackground = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledModal = styled.div`
    width: 400px;
    height: auto;
    background: white;
    padding: 2rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    display: flex;
    flex-direction: column;
    .buttonWrapper {
        display: flex;
        justify-content: flex-end;
        * {
            margin-left: 1rem;
        }
    }
`;

const Modal = (props) => {
    return (
        <StyledModalBackground>
            <StyledModal {...props} />
        </StyledModalBackground>
    );
};

export default Modal;