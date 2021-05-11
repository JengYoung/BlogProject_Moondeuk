import React from 'react'
import Button from '../common/Button';
import Modal from '../common/Modal';
import ModalListItem from '../common/ModalListItem';

/*
*/

const SubscribeListModal = ({ modal, isSubscribeList, subscribeToList, subscribedFromList, onConfirm, onCancel }) => {
    const body = isSubscribeList ? subscribeToList : subscribedFromList
    // console.log("body: ", body)
    if (!modal) return null;
    return (
        <Modal>
            {body.map(user => <ModalListItem>{user.nickname}{`(${user.userId})`}</ModalListItem>)}
            <div className="buttonWrapper">
                <Button onClick={onConfirm}>확인</Button>
                {onCancel ? <Button>취소</Button> : null}
            </div>
        </Modal>
        // <StyledModalBackground>
        //     <StyledModal>
        //         {body.map(user => <StyledSubscribeListItem>{user.nickname}{`(${user.userId})`}</StyledSubscribeListItem>)}
        //         <div className="buttonWrapper">
        //             <Button onClick={onConfirm}>확인</Button>
        //             {onCancel ? <Button>취소</Button> : null}
        //         </div>
        //     </StyledModal>
        // </StyledModalBackground>
    );
};

export default SubscribeListModal;