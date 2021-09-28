import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';

const StyledThumbnailTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position:relative;
    width: 100%;
    height: 84vh;
    border-bottom: 1px solid lightgray;
    ${({ hasThumbnail, hasColor }) => (hasThumbnail || hasColor) && css`
        border: none;
    `}
    transition: all 0.5s;
    background-size: cover;
    background-position: center;
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
        height: 80vh;
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
        height: 78vh;
    }
    &.half {
        height: 42vh;
        @media screen and (min-width: 481px) {
            padding: 0 15vw;
            height: 40vh;
        }
        @media screen and (min-width: 769px) {
            padding: 0 20vw;
            height: 39vh;
        }
    }
    &.center {
        justify-content: center;
        /* align-items: center; */
    }
`;

const ThumbnailTitleBox = props => {
    const thumbnailTitleBox = useRef(null);
    useEffect(() => {
        if (props.hasThumbnail !== "") thumbnailTitleBox.current.style.backgroundImage = `url(${props.hasThumbnail})`;
        if (!props.isFullSize) thumbnailTitleBox.current.classList.add('half');
        if (props.hasColor !== "") thumbnailTitleBox.current.classList.add(props.hasColor);
    }, [props])
    return (
        <StyledThumbnailTitleBox
            {...props}
            ref={thumbnailTitleBox}
        />
    )
}

export default ThumbnailTitleBox;