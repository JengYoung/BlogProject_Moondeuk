import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { CgArrowsShrinkV } from 'react-icons/cg'
import { IoBrushOutline } from 'react-icons/io5'
import { IoIosColorPalette } from 'react-icons/io'
import { IoImage } from 'react-icons/io5'

/**
**/
const ThumbnailTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position:relative;
    width: 100vw;
    height: 84vh;
    border-bottom: 1px solid lightgray;
    transition: all 0.5s;
    background-size: cover;
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

const ThumbnailColorBox = styled.ul`
    display: none;
    justify-content: space-around;
    align-items: center;
    width: 260px;
    height: 30px;
    position: absolute;
    top: 40px;
    right: 6vw;
    padding: 0;
    li {
        width: 15px;
        height: 15px;
        border-radius: 20px;
        border: 1px solid #ffffff6c;
        transition: all 0.5s;
        &:hover {
            cursor: pointer;
            transform: translateY(-5px);
        }
    }
    .active {
        display: flex;
    }
    @media screen and (min-width: 481px) {
        right: 15vw;
    }
    @media screen and (min-width: 769px) {
        right: 20vw;
    }
`;
const TitleInput = styled.textarea`
    background: transparent;
    display: block;
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    outline: none;
    border: none;
    margin-bottom: 0.5rem;
    width: 100%;
    overflow-y: hidden;
    padding-left: 0.5rem;
    z-index: 11;
    opacity: 1;
    width: 100%;
    @media screen and (min-width: 481px) {
        font-size: 2.25rem;
    }
    @media screen and (min-width: 769px) {
        font-size: 2.5rem;
    }
`;
const SubtitleInput = styled.input`
    background: transparent;
    font-size: 1rem;
    margin-bottom: 2rem;
    outline: none;
    border: none;
    width: 100%;
    padding-left: 0.5rem;
`;

const TitleBox = styled.div`
    ${props =>
        props.isCenter && css`
            input, textarea {
                text-align: center;
            }
        `
    }
    ${props => 
        (props.isFontColor === 'white') && css`
            input, textarea {
                &::-webkit-input-placeholder {
                    color: white;
                }
                color: white;
            }
        `
    };
    &.center {
        textarea, input {
            text-align: center;
        }
    }
`

const TitleToolbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    Z-index: 9;
    top: 10px;
    /* flex-direction: row; */
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    height: 2rem;
    right: 6vw;

    .active {
        color: #f5e83a;
    }
    input {
        display: none;
    }
    label,
    div {
        position: relative;
        left: 0;
        top: 0;
        outline: none;
        color: #a09ca0;
        font-weight: 700;
        margin: 0.25rem;
        &:hover {
            cursor: pointer;
            color: #f5e83a;
        }
        svg {
            font-size: 1.25rem;
        }
    }
    .font-color-btn {
        display: none;
        svg {
            color: #a09ca0;
            path {
                fill: #a09ca0;
            }
            &.active {
                color: #f5e83a;
                path {
                    fill: white;
                }
            }
        }
        &:hover {
            svg {
                color: #f5e83a;
                path {
                    fill: #f5e83a;
                }
            }
        }
    }
    &.thumbnail {
        div, div > * {
            color: white;
            &:hover {
                color: #f5e83a;
            }
        }
        .active {
            color: #f5e83a;
        }
    }
    @media screen and (min-width: 481px) {
        right: 15vw;
        /* flex-direction: column;
        width: 2rem !important;
        height: 280px;
        right: 8vw;
        justify-content: flex-start; */
    }
    @media screen and (min-width: 769px) {
        right: 20vw;
        /* flex-direction: column;
        right: 15vw; */
    }
`;
const TitlePositionModifier = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 10px;
    margin: 0;
    padding: 0;
    border: 1px solid #a09ca0;
    &:hover {
        border: 1px solid #f5e83a;
        color: #f5e83a;
    }

    ${props => 
        props.isCenter && css`
            justify-content: center;
            align-items: center;
            border: 1px solid #f5e83a;
            color: #f5e83a !important;
        `
    }
`

const ThumbnailTitle = ({ title, subtitle, titleStyle, onChangeStyle, onChangeText }) => {
    const thumbnailBox = useRef(null);
    const titleBox = useRef(null);
    const mainTitle = useRef(null);
    const subTitle = useRef(null);

    const onResizeTitle = useCallback((ref) => {
        if (mainTitle === null || mainTitle.current === null) {
            return;
        }
        /* 기본 높이 설정 */
        mainTitle.current.style.height = '1px';
        /* 기본 길이에서 현재 높이에 따라서 높이 추가 */
        mainTitle.current.style.height = mainTitle.current.scrollHeight + 'px';
    }, [])

    const onChangeTitle = e => {
        onChangeText({ name: e.target.name, value: e.target.value });
    };

    /*
        ! 이벤트가 발생할 때 font 변경!
    */

    const onActive = e => {
        console.log(e.currentTarget.classList);
        if(e.currentTarget.classList.contains('active')) return e.currentTarget.classList.remove('active');
        e.currentTarget.classList.toggle('active');
    }

    const onTitleImageUpload = e => {
        if (!e.target.files[0]) return;
        // 만약 color가 추가되어 있었다면 제거하기.
        let fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = function (e) {
            if (titleStyle.color) {
                const thumbnailColorBox = document.querySelector('.thumbnail-color-box');
                const thumbnailColorBtn = document.querySelector('.thumbnail-color-btn');
                thumbnailColorBox.style.display = 'none';
                thumbnailColorBtn.classList.remove('active');
            }
            // setTitleStyle({
            //     ...titleStyle,
            //     thumbnail: e.target.result,
            //     color: ''
            // });
            onChangeStyle({ name: 'thumbnail', value: e.target.result });
            onChangeStyle({ name: 'color', value: '' });
        };
    };

    const onSize = () => {
        // setTitleStyle(() => ({...titleStyle, isFullSize: !titleStyle.isFullSize}))
        onChangeStyle({ name: 'isFullSize', value: !titleStyle.isFullSize })
        thumbnailBox.current.classList.toggle('half')
    }
    const onColor = () => {
        if (titleStyle.thumbnail) {
            thumbnailBox.current.style.backgroundImage = '';
            onChangeStyle({ name: 'thumbnail', value: '' });
        }
        const thumbnailColorBox = document.querySelector('.thumbnail-color-box');
        const thumbnailColorBtn = document.querySelector('.thumbnail-color-btn');
        if (thumbnailColorBtn.classList.contains('active')) {
            thumbnailColorBox.style.display = 'flex';
            // 1. initialize titleStyle.color (red; first-order color)
            onChangeStyle({ name: 'color', value: 'red'});
        } else {
            thumbnailColorBox.style.display = 'none';
            // 1. remove value from titleStyle.color
            thumbnailBox.current.classList.remove(titleStyle.color);
            onChangeStyle({ name: 'color', value: '' });
            // 2. fontColor -> black, btn active cancel
            titleStyle.fontColor = 'black';
        }
    }

    const onTitleColor = () => {
        if (titleStyle.fontColor === 'black') onChangeStyle({ name: 'fontColor', value: 'white' });
        else onChangeStyle({ name: 'fontColor', value: 'black' });
    }
    const onTitleCenter = () => {
        onChangeStyle({ name: 'isCenter',  value: !(titleStyle.isCenter) })
    }
    useEffect(() => {
        if (titleStyle.isCenter) {
            thumbnailBox.current.classList.add('center')
            titleBox.current.classList.add('center')
        } else {
            if (thumbnailBox.current.classList.contains('center')) {
                thumbnailBox.current.classList.remove('center')
                titleBox.current.classList.remove('center')
            }
        }
    }, [titleStyle.isCenter])
    const onChangeFont = e => {
        if (!e.target.classList.contains('font-btn')) return;
        const fontItem = document.querySelectorAll('.font-btn');
        // 현재 누른 게 아니라면 item에 있는 font-active 다 지우기.
        fontItem.forEach(item => {
            if (e.target !== item) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    mainTitle.current.classList.remove(item.classList[1])
                }
            } else {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    onChangeStyle({ name: 'font', value: '' })
                    mainTitle.current.classList.remove(item.classList[1])
                } else {
                    item.classList.toggle('active');
                    onChangeStyle({ name: 'font', value: item.classList[1] })
                    mainTitle.current.classList.toggle(item.classList[1])
                }
            }
        })
    }
    // check titleStyle state
    useEffect(() => {
        console.log(titleStyle)
    }, [titleStyle])
    useEffect(() => {
        // thumbnailBox.current.classList.add(titleStyle.color);
        console.log(titleStyle.color)
    },[titleStyle])

    // if thumbnail in TitleThumbnailBox -> set gradient & background-size
    useEffect(() => {
        const titleThumbnailBtn = document.querySelector('#title-thumbnail-btn');
        const titleToolbar = document.querySelector('.title-toolbar');
        if (titleStyle.thumbnail) {
            titleToolbar.classList.toggle('thumbnail')
            thumbnailBox.current.classList.toggle('thumbnail')
            titleThumbnailBtn.classList.add('active');
            thumbnailBox.current.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${titleStyle.thumbnail})`;
        } else {
            if (titleToolbar.classList.contains('thumbnail')) titleToolbar.classList.remove('thumbnail');
            if (titleThumbnailBtn.classList.contains('active')) titleThumbnailBtn.classList.remove('active');
            if (thumbnailBox.current.classList.contains('thumbnail')) thumbnailBox.current.classList.remove('thumbnail')
        }
    }, [titleStyle.thumbnail])

    useEffect(() => {
        const fontColorBtn = document.querySelector('.font-color-btn');
        const fontColorIcon = document.querySelector('.font-color-btn > svg')
        if (document.querySelector('#title-thumbnail-btn').classList.contains('active') || 
            (document.querySelector('.thumbnail-color-btn')).classList.contains('active')
            ) {
            fontColorBtn.style.display = 'block';
        } else {
            fontColorBtn.style.display = 'none';
            if (fontColorIcon.classList.contains('active')) fontColorIcon.classList.remove('active');
            onChangeStyle({ name: 'fontColor', value: 'black' });
        }
    },[titleStyle.thumbnail, titleStyle.color, onChangeStyle])

    // toggle thumbnail-color-btn titleStyle color
    const changeColor = e => {
        const colors = document.querySelectorAll(".color");
        if (e.target.nodeName !== 'LI') return;
        colors.forEach(color => {
            // 만약 같은 버튼을 눌렀을 경우
            if(color.classList === e.target.classList) {
                // 현재 포함 중일 때 그냥 리턴.
                if (thumbnailBox.current.classList.contains(color.classList[1])) return;
                else {
                    onChangeStyle({ name: 'color', value: color.classList[1] })
                }
            }
        })
    }

    useEffect(() => {
        const colors = ['red', 'orange', 'sky', 'blue', 'purple', 'yellow', 'mint', 'black', 'gray', 'green']
        if (titleStyle.color) {
            colors.forEach(color => {
                if (titleStyle.color === color) {
                    thumbnailBox.current.classList.add(color)
                } else if (thumbnailBox.current.classList.contains(color)) {
                    thumbnailBox.current.classList.remove(color);
                }    
            })
        } else {
            colors.forEach(color => {
                if (thumbnailBox.current.classList.contains(color)) {
                    thumbnailBox.current.classList.remove(color);
                }    
            }) 
        }
    },[titleStyle.color])

    return (
        <ThumbnailTitleBox ref={thumbnailBox} isCenter={titleStyle.isCenter} className="half">
                <TitleBox 
                    isCenter={titleStyle.isCenter} 
                    isFontColor={titleStyle.fontColor} 
                    ref={titleBox}
                >
                    <TitleInput 
                        ref={mainTitle}
                        onInput={onResizeTitle(mainTitle)}
                        name="title"
                        placeholder="제목을 입력하세요." 
                        onChange={onChangeTitle} 
                        value={title}
                    />
                    <SubtitleInput 
                        ref={subTitle}
                        name="subtitle" 
                        value={subtitle} 
                        onChange={onChangeTitle}
                        placeholder="소제목을 입력하세요."
                    />
                    {/* font -> event bubbling (추후 많아질 수도 있으니) */}
                </TitleBox>
                <TitleToolbar className="title-toolbar" onClick={onChangeFont}>
                    <label id="title-thumbnail-btn" htmlFor="title-thumbnail-input"><IoImage/></label>
                    <input onChange={onTitleImageUpload} id="title-thumbnail-input" type="file" accept="image/*"/>
                    <div onClick={onSize}>
                        <CgArrowsShrinkV onClick={onActive}/>
                    </div>
                    <div onClick={onColor}>
                        <IoIosColorPalette className="thumbnail-color-btn" onClick={onActive}/>
                    </div>
                    <div className="font-btn nanum-gothic" >가</div>
                    <div className="font-btn nanum-myeongjo">가</div>
                    <div className="font-btn gamja-flower">가</div>
                    <div className="font-btn dancing-script">abc</div>
                    <TitlePositionModifier
                        isCenter={titleStyle.isCenter} 
                        onClick={onTitleCenter}
                    >
                        가
                    </TitlePositionModifier>
                    <div 
                        className="font-color-btn" 
                        onClick={onTitleColor}
                    >
                        <IoBrushOutline onClick={onActive}/>
                    </div>
                </TitleToolbar>
                <ThumbnailColorBox className="thumbnail-color-box" onClick={changeColor}>
                    <li className="color red"></li>
                    <li className="color orange"></li>
                    <li className="color yellow"></li>
                    <li className="color green"></li>
                    <li className="color blue"></li>
                    <li className="color purple"></li>
                    <li className="color mint"></li>
                    <li className="color sky"></li>
                    <li className="color black"></li>
                    <li className="color gray"></li>
                </ThumbnailColorBox>
            </ThumbnailTitleBox>
    );
};

export default ThumbnailTitle;