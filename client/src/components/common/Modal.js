import React from 'react'
import styled from 'styled-components';
import Button from './Button';

/*
*/

const StyledModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledModal = styled.div`
    width: 400px;
    background: white;
    padding: 2rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    .buttonWrapper {
        display: flex;
        justify-content: flex-end;
        * {
            margin-left: 1rem;
        }
    }
`;

const Modal = ({body}) => {
    return (
        <StyledModalBackground>
            <StyledModal>
                {body}
                <div className="buttonWrapper">
                    <Button>확인</Button>
                    <Button>취소</Button>
                </div>
            </StyledModal>
        </StyledModalBackground>
    );
};

export default Modal;