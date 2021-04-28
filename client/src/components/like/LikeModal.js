import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import Modal from '../common/Modal';

/*
*/

const StyledLikeModal = styled(Modal)``;

const LikeModal = ({ onLikeList, children, ...rest }) => {
    return (
        <StyledLikeModal { ...rest }>
            { children }
            <Button onClick={onLikeList}>확인</Button>
        </StyledLikeModal>
    );
};

export default LikeModal;