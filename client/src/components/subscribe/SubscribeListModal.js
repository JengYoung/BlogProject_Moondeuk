import React from 'react'
import Button from '../common/Button';
import Modal from '../common/Modal';
import ModalListItem from '../common/ModalListItem';

/*
*/

const SubscribeListModal = ({ modal, isSubscribeList, subscribeToList, subscribedFromList, onConfirm, onCancel }) => {
    const body = isSubscribeList ? subscribeToList : subscribedFromList
    if (!modal) return null;
    return (
        <Modal>
            {body.map(user => {
                const { userInfo } = user;
                return <ModalListItem key={userInfo.username}>{userInfo.nickname}{`(${userInfo.username})`}</ModalListItem>
            })}
            <div className="buttonWrapper">
                <Button onClick={onConfirm}>확인</Button>
                {onCancel ? <Button>취소</Button> : null}
            </div>
        </Modal>
    );
};

export default SubscribeListModal;