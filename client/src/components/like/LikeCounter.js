import React from 'react'
import styled from 'styled-components';
import ModalListItem from '../common/ModalListItem';
import LikeModal from './LikeModal';

/*
*/

const StyledLikeCounters = styled.button`
    border: none;
    background-color: transparent;
    outline: none;
    &:hover {
        cursor: pointer;
    };
`;

const LikeCounter = ({ modal, likes, onLikeList }) => {
    return (
        <>
            { modal && 
                <LikeModal onLikeList={onLikeList}>
                    {
                        likes.map(like => <ModalListItem key={like._id}>{like.nickname + `(${like.userId})`}</ModalListItem>)
                    }
                </LikeModal>
            }
            <StyledLikeCounters onClick={onLikeList}>
                {likes.length}
            </StyledLikeCounters>
        </>
    );
};

export default LikeCounter;