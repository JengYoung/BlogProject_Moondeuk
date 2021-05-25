import React from 'react'
import styled, { css } from 'styled-components';
import ModalListItem from '../common/ModalListItem';
import UserImage from '../common/UserImage';
import LikeModal from './LikeModal';

/*
*/

const StyledLikeCounter = styled.div`
    padding-left: 5px;
    ${props =>
        props.typeName !== 'Diary' && css`
            position: relative;
            font-size: 0.8rem;
            margin: 0;
            padding-left: 0;
        `
    }
`;

const LikeCounter = ({ typeName, modal, onLikeList, likeUsersList }) => {
    console.log("LikeCounter: ", likeUsersList, typeName)
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

export default LikeCounter;