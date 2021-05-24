import React from 'react'
import styled from 'styled-components';
import ModalListItem from '../common/ModalListItem';
import LikeModal from './LikeModal';

/*
*/

const StyledLikeCounter = styled.div`
    padding-left: 5px;
`;

const LikeCounter = ({ modal, likeUsersList, onLikeList }) => {
    return (
        <>
            { modal && 
                <LikeModal onLikeList={onLikeList}>
                    {
                        likeUsersList.map(like => {
                            const { userId, nickname } = like;
                            return <ModalListItem key={userId}>{nickname + `(${userId})`}</ModalListItem>
                        })
                    }
                </LikeModal>
            }
            <StyledLikeCounter onClick={onLikeList}>
                {likeUsersList.length}
            </StyledLikeCounter>
        </>
    );
};

export default LikeCounter;