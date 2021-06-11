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
    ${props => 
        props.imgUrl && css`
            background-image: url(${props.imgUrl});
            background-size: cover;
        `
    }
    ${ props => 
        props.isSubscribePage && css`
            margin-top: 3rem;
            width: 200px;
            height: 200px;
            border-radius: 200px;
        `
    }
`;

const UserImage = ({ isSubscribePage, userImage, ...rest }) => {
    const imgUrl = userImage ? '/img/' + userImage.replace('\\', '/') : null;
    return (
        <StyledUserImage isSubscribePage={isSubscribePage} imgUrl={imgUrl} {...rest}/>
    );
};

export default UserImage;