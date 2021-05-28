import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useCallback } from 'react';
import { BsImage } from 'react-icons/bs';
import { CgArrowsShrinkV } from 'react-icons/cg'
import { IoIosColorPalette } from 'react-icons/io'
import { IoImage } from 'react-icons/io5'
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
    justify-content: center;
    align-items: flex-end;
    position:relative;
    width: 100%;
    height: 84vh;
    /* padding: 0 20px; */
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
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    margin-bottom: 2rem;
    width: 100%;
    overflow-y: hidden;
    @media screen and (min-width: 481px) {
        font-size: 2.25rem;
    }
    @media screen and (min-width: 769px) {
        font-size: 2.5rem;
    }
`;
const subTitleInput = styled.input`
    font-size: 1rem;
`;

const TitleToolbar = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    right: 6vw;
    flex-direction: column;
    border: 1px solid lightgray;
    width: 2rem;
    align-items: center;
    div {
        color: #a09ca0;
        font-weight: 700;
        margin: 0.25rem;
        b, svg {
            &:hover {
                cursor: pointer;
            }
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
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
        height: 78vh;
        /* bottom: 10vh; */
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
        height: 76vh;
        /* bottom: 12vh; */
    }
    /* Setting min-size & remove padding */
    .ql-editor {
        padding: 0rem;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::before {
        left: 0px;
    }
`;

const Editor = ({title, body, onChangeText}) => {
    const mainTitle = useRef(null);

    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    useEffect(() => {
        const toolbarOptions =   [
            ['bold', 'italic'], ['link', 'image']
        ]
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: '내용을 작성하세요 🌙',
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
        mainTitle.current.style.height = '1em';
        /* 기본 길이에서 현재 높이에 따라서 높이 추가 */
        mainTitle.current.style.height = mainTitle.current.scrollHeight + 'px';
    }, [])

    const onChangeTitle = e => {
        onChangeText({ name: 'title', value: e.target.value });
    };

    return (
        <StyledEditor>
            <TitleThumbnailBox>
                <TitleInput 
                    ref={mainTitle}
                    onInput={onResizeTitle(mainTitle)}
                    name="title"
                    placeholder="제목을 입력하세요" 
                    onChange={onChangeTitle} 
                    value={title}
                />
                <TitleToolbar>
                    <div><IoImage/></div>
                    <div><CgArrowsShrinkV/></div>
                    <div><IoIosColorPalette/></div>
                    <div className="nanum-gothic"><b>가</b></div>
                </TitleToolbar>
            </TitleThumbnailBox>
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </StyledEditor>
    );
};

export default Editor;