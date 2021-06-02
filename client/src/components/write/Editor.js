import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useCallback } from 'react';
import { CgArrowsShrinkV } from 'react-icons/cg'
import { IoBrushOutline } from 'react-icons/io5'
import { IoIosColorPalette } from 'react-icons/io'
import { IoImage } from 'react-icons/io5'
import { useState } from 'react';
/*
    Editor UI 컴포넌트
*/

const StyledEditor = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 페이지 위아래 여백 지정 */
    /* padding-top: 5rem;
    padding-bottom: 5rem; */
    .red {
        background: #f38686;
    }
    .orange {
        background: #ff9900;
    }
    .yellow {
        background: #ffd900;
    }
    .green {
        background: #b8e264;
    }
    .blue {
        background: #726bd3;
    }
    .purple {
        background: #7f51a5;
    }
    .mint {
        background: #a7ffd3;
    }
    .sky {
        background: #96e1ff;
    }
    .black {
        background: #2e2d2d;
    }
    .gray {
        background: #686565;
    }
`;

const TitleThumbnailBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position:relative;
    width: 100%;
    height: 84vh;
    border-bottom: 1px solid lightgray;
    transition: all 0.5s;
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
    ${props => 
        props.isCenter && css`
            justify-content: center;
            align-items: center;
        `
    }
`;

const ThumbnailColorBox = styled.ul`
    display: none;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 30px;
    position: absolute;
    padding: 0 20px;
    top: 40px;
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
        top: 20px;
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
            text-align: center;
        `
    }
    ${props => 
        props.isFontColor === 'white' && css`
            input, textarea {
                &::-webkit-input-placeholder {
                    color: white;
                }
                color: white;
            }
        `
    }
`

const TitleToolbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    Z-index: 9;
    top: 10px;
    /* flex-direction: row; */
    width: 100%;
    justify-content: center;
    align-items: center;

    height: 2rem;

    .active {
            color: #f5e83a;
        }
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
    @media screen and (min-width: 481px) {
        flex-direction: column;
        width: 2rem !important;
        height: 280px;
        right: 8vw;
    }
    @media screen and (min-width: 769px) {
        flex-direction: column;
        right: 15vw;
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
const QuillWrapper = styled.div`
    position: relative;
    height: auto;
    padding-bottom: 12vh;
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
        height: 80vh;
        /* right: 8vw; */
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
        height: 78vh;
        /* right: 15vw; */
    }
    /* Setting min-size & remove padding */
    .ql-toolbar {
        position: relative;
        right: 0;
        width: 100%;
        margin-top: 2rem;
        z-index: 9;
        .ql-formats {
            button {
                &:hover,&:focus {
                    * {
                        fill: none;
                        stroke: #f5e83a;
                    }
                    .ql-fill {
                    stroke: #f5e83a;
                }
                }
            }
            .ql-picker-label:hover,
            .ql-picker-item:hover {
                color: #f5e83a;
                stroke: #f5e83a;
                .ql-stroke {
                    stroke: #f5e83a;
                }
            }
            .ql-strike.ql-active,
            .ql-underline.ql-active {
                stroke: #f5e83a;
                color: #f5e83a;
                .ql-fill {
                    fill: transparent;
                }
            }
            .ql-selected,
            .ql-font,
            .ql-header,
            .ql-size {
                .ql-active {
                    color: #f5e83a;
                    
                }
            }
            .ql-active .ql-stroke,
            .ql-picker-label.ql-active .ql-stroke,
            .ql-list.ql-active .ql-fill{
                fill: none;
                stroke: #f5e83a;
                color: #a09ca0;
                &::before {
                    color: #a09ca0;
                }
            }
        }
    }
    .ql-align-center {
        text-align: center;
    }
    .ql-editor {
        position: relative;
        margin-top: 2rem;
        padding: 0 0.5rem 0 0.5rem;
        line-height: 1.5;
        height: auto;
        /* @media screen and (min-width: 481px) {
        right: 8vw;
        }
        @media screen and (min-width: 769px) {
            right: 15vw;
        } */
    }
    .ql-container {
        border: none;
    }
    .ql-editor.ql-blank::before{
        font-style: normal;
    }
    .ql-snow .ql-picker.ql-size {
        .ql-picker-label[data-value=small]::before,
        .ql-picker-item[data-value=small]::before {
            content:'12';
            font-size: 12px;
        }
        .ql-picker-label::before,
        .ql-picker-item::before {
            content:'16';
        }
        .ql-picker-label[data-value=large]::before,
        .ql-picker-item[data-value=large]::before {
            content:'18';
        }
        .ql-picker-label[data-value=huge]::before,
        .ql-picker-item[data-value=huge]::before {
            content:'24';
            font-size: 24px;
        }
    }
`;
const Editor = ({title, subtitle, body, onChangeText}) => {
    const [ titleStyle, setTitleStyle ] = useState({
        isCenter: false,
        isFullSize: true,
        thumbnail: '',
        color: '',
        fontColor: 'black',
        font: '',
    });

    const onTitleStyle = (name, value) => {
        return setTitleStyle(titleStyle => ({
            ...titleStyle,
            [name]: value,
    }))}

    const thumbnailBox = useRef(null);
    const titleBox = useRef(null);
    const mainTitle = useRef(null);
    const subTitle = useRef(null);
    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    useEffect(() => {
        const toolbarOptions =   [
            [{ 'size': ['small', false, 'large', 'huge'] }, { 'font': [] }],
            [{ 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike', { 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],

            ['clean'] 
        ]
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: '내용을 작성하세요.',
            modules: {
                toolbar: toolbarOptions
            },
        });

        const quill = quillInstance.current; 
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                onChangeText({ name: 'body', value: quill.root.innerHTML });
            }
        });
    }, [onChangeText]);

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = body;
    }, [body]);
    
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
    const onSize = () => {
        setTitleStyle(() => ({...titleStyle, isFullSize: !titleStyle.isFullSize}))
        thumbnailBox.current.classList.toggle('half')
    }
    const onColor = () => {
        const thumbnailColorBox = document.querySelector('.thumbnail-color-box');
        const thumbnailColorBtn = document.querySelector('.thumbnail-color-btn');
        const fontColorBtn = document.querySelector('.font-color-btn');
        if (thumbnailColorBtn.classList.contains('active')) {
            thumbnailColorBox.style.display = 'flex';
            fontColorBtn.style.display = 'block';
            // 1. initialize titleStyle.color (red; first-order color)
            onTitleStyle('color', 'red');
            thumbnailBox.current.classList.toggle('red');
        } else {
            thumbnailColorBox.style.display = 'none';
            fontColorBtn.style.display = 'none';
            // 1. remove value from titleStyle.color
            thumbnailBox.current.classList.remove(titleStyle.color);
            onTitleStyle('color', '');
            // 2. fontColor -> black, btn active cancel
            titleStyle.fontColor = 'black';
            document.querySelector('.font-color-btn > svg').classList.toggle('active');
        }
    }

    const onTitleColor = () => {
        if (titleStyle.fontColor === 'black') onTitleStyle('fontColor', 'white');
        else onTitleStyle('fontColor', 'black');
    }
    const onTitleCenter = () => {
        setTitleStyle(titleStyle => ({
            ...titleStyle,
            isCenter: !(titleStyle.isCenter)
        }))
    }
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
                    setTitleStyle(() => ({...titleStyle, font: ''}))
                    mainTitle.current.classList.remove(item.classList[1])
                } else {
                    item.classList.toggle('active');
                    setTitleStyle(() => ({...titleStyle, font: item.classList[1]}))
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

    const changeColor = e => {
        const colors = document.querySelectorAll(".color");
        if (e.target.nodeName !== 'LI') return;
        colors.forEach(color => {
            // 만약 다른 버튼을 눌렀을 경우
            if(color.classList !== e.target.classList) {
                // 만약 지금 클래스를 포함시
                if (thumbnailBox.current.classList.contains(color.classList[1])) {
                    return thumbnailBox.current.classList.remove(color.classList[1])
                } 
            //같은 버튼일 경우
            } else {
                // 현재 포함 중일 때 그냥 리턴.
                if (thumbnailBox.current.classList.contains(color.classList[1])) return;
                else {
                    setTitleStyle(() => ({ ...titleStyle, color: color.classList[1]}))
                    thumbnailBox.current.classList.toggle(color.classList[1])
                }
            }
        })
    }

    return (
        <StyledEditor>
            <TitleThumbnailBox ref={thumbnailBox} isCenter={titleStyle.isCenter} className="half">
                <TitleBox isFontColor={titleStyle.fontColor} ref={titleBox}>
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
                <TitleToolbar onClick={onChangeFont}>
                    <div><IoImage /></div>
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
            </TitleThumbnailBox>
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
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
        </StyledEditor>
    );
};

export default Editor;