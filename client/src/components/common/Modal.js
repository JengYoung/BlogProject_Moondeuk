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

const StyledSubscribeListItem = styled.div`
    padding: 1rem;
    border-bottom: 1px solid gray;
`;

const Modal = ({ modal, isSubscribeList, subscribeToList, subscribedFromList, onConfirm, onCancel }) => {
    const body = isSubscribeList ? subscribeToList : subscribedFromList
    console.log("body: ", body)
    if (!modal) return null;
    return (
        <StyledModalBackground>
            <StyledModal>
                {body.map(user => <StyledSubscribeListItem>{user.nickname}{`(${user.userId})`}</StyledSubscribeListItem>)}
                <div className="buttonWrapper">
                    <Button onClick={onConfirm}>확인</Button>
                    {onCancel ? <Button>취소</Button> : null}
                </div>
            </StyledModal>
        </StyledModalBackground>
    );
};

export default Modal;