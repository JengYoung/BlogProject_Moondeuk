import React from 'react'
import styled, { css } from 'styled-components';
import ModalListItem from '../common/ModalListItem';
import UserImage from '../common/UserImage';
import LikeModal from './LikeModal';

/*
*/

const StyledLikeCounter = styled.div`
    padding-left: 5px;
    transition: all 0.3s;
    ${props =>
        props.typeName !== 'Diary' && css`
            position: relative;
            font-size: 0.8rem;
            margin: 0;
            padding-left: 0;
        `
    }
    &:hover {
        cursor: pointer;
        font-weight: 700;
        transform: scale(1.1);
        color: #be89be;
    }
`;

const LikeCounter = ({ typeName, modal, onLikeList, likeUsersList }) => {
    return (
        <>
            { modal && 
                <LikeModal onLikeList={onLikeList}>
                    {
                        likeUsersList.map(like => {
                            const { username, nickname, userImage } = like.userInfo;
                            return (
                                <ModalListItem key={username}>
                                    <UserImage userImage={userImage}/>
                                    {nickname + `(${username})`}
                                </ModalListItem>
                            )
                        })
                    }
                </LikeModal>
            }
            <StyledLikeCounter typeName={typeName} onClick={onLikeList}>
                {likeUsersList.length}
            </StyledLikeCounter>
        </>
    );
};

export default React.memo(LikeCounter);