import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const StyledThumbnailTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position:relative;
    width: 100%;
    height: 84vh;
    border-bottom: 1px solid lightgray;
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
    .red,
    &.red {
        background: #f38686;
    }
    .orange,
    &.orange {
        background: #ff9900;
    }
    .yellow,
    &.yellow {
        background: #ffd900;
    }
    .green,
    &.green {
        background: #b8e264;
    }
    .blue,
    &.blue {
        background: #726bd3;
    }
    .purple,
    &.purple {
        background: #7f51a5;
    }
    .mint,
    &.mint {
        background: #a7ffd3;
    }
    .sky,
    &.sky {
        background: #96e1ff;
    }
    .black,
    &.black {
        background: #2e2d2d;
    }
    .gray,
    &.gray {
        background: #686565;
    }
`;

const ThumbnailTitleBox = props => {
    const thumbnailTitleBox = useRef(null);
    useEffect(() => {
        if (props.hasThumbnail !== "") thumbnailTitleBox.current.style.backgroundImage = `url(${props.hasThumbnail})`;
    }, [props.hasThumbnail])

    useEffect(() => {
        if (props.hasColor !== "") thumbnailTitleBox.current.classList.add(props.hasColor);
    }, [props.hasColor])

    return (
        <StyledThumbnailTitleBox
            {...props}
            ref={thumbnailTitleBox}
        />
    )
}

export default ThumbnailTitleBox;