import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useCallback } from 'react';
import { CgArrowsShrinkV } from 'react-icons/cg'
import { IoIosColorPalette } from 'react-icons/io'
import { IoImage } from 'react-icons/io5'
import { useState } from 'react';
/*
    Editor UI 컴포넌트
*/

const StyledEditor = styled.div`
    /* 페이지 위아래 여백 지정 */
    /* padding-top: 5rem;
    padding-bottom: 5rem; */
`;

const TitleThumbnailBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position:relative;
    width: 100%;
    height: 84vh;
    border-bottom: 1px solid black;
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
        height: 80vh;
        /* bottom: 10vh; */
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
        height: 78vh;
        /* bottom: 12vh; */
    }
`;
const TitleInput = styled.textarea`
    display: block;
    position: relative;
    font-size: 2rem;
    font-weight: 900;
    outline: none;
    border: none;
    margin-bottom: 0.5rem;
    width: 100%;
    overflow-y: hidden;
    padding-left: 0.5rem;
    @media screen and (min-width: 481px) {
        font-size: 2.25rem;
    }
    @media screen and (min-width: 769px) {
        font-size: 2.5rem;
    }
`;
const SubtitleInput = styled.input`
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
`

const TitleToolbar = styled.div`
    display: flex;
    position: absolute;
    Z-index: 9;
    top: 20px;
    right: 6vw;
    flex-direction: column;
    border: 1px solid lightgray;
    width: 2rem;
    align-items: center;
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
            font-size: 1.5rem;
        }
    }
    @media screen and (min-width: 481px) {
        right: 8vw;
    }
    @media screen and (min-width: 769px) {
        right: 15vw;
    }
`;

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
        font: '',
    });

    const onTitleStyle = (name, value) => {
        setTitleStyle({
            ...titleStyle,
            [name]: value,
        })
    }

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

    const onChangeFont = e => {
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
    // useEffect(() => {
    //     console.log(titleStyle.font)
    // }, [titleStyle])
    return (
        <StyledEditor>
            <TitleThumbnailBox>
                <TitleBox ref={titleBox}>
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
                    <TitleToolbar onClick={onChangeFont}>
                        <div><IoImage /></div>
                        <div><CgArrowsShrinkV /></div>
                        <div><IoIosColorPalette/></div>
                        <div className="font-btn nanum-gothic" >가</div>
                        <div className="font-btn nanum-myeongjo">가</div>
                        <div className="font-btn gamja-flower">가</div>
                        <div className="font-btn dancing-script">abc</div>
                    </TitleToolbar>
                </TitleBox>
            </TitleThumbnailBox>
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
        </StyledEditor>
    );
};

export default Editor;