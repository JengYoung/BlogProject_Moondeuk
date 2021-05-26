import React from 'react'
import styled, { css } from 'styled-components';

/**
**/

const StyledUserImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 3rem;
    border: 1px solid lightgray;
    background: white;
    min-width: 50px;
    ${props => 
        props.imgUrl && css`
            background-image: url(${props.imgUrl});
            background-size: cover;
        `
    }
`;

const UserImage = ({ userImage }) => {
    const imgUrl = userImage ? '/img/' + userImage.replace('\\', '/') : null;
    return (
        <StyledUserImage imgUrl={imgUrl}>
            
        </StyledUserImage>
    );
};

export default UserImage;