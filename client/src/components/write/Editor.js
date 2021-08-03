import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

/*
    Editor UI 컴포넌트
*/

const StyledEditor = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* 페이지 위아래 여백 지정 */
    /* padding-top: 5rem;
    padding-bottom: 5rem; */
`;


const QuillWrapper = styled.div`
    position: relative;
    height: auto;
    width: 100%;
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
        padding: 1rem 1rem;
        margin-top: 2rem;
        z-index: 9;
        .ql-formats {
            ${({ theme }) => css`
                .ql-picker-label {
                    color: ${theme.editorColor};
                }
                .ql-stroke {
                    stroke: ${theme.editorColor};
                }
                .ql-fill {
                    fill: ${theme.editorColor};
                }
            `}
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
const Editor = ({ body, onChangeText }) => {

    // const onTitleStyle = (name, value) => {
    //     return setTitleStyle(titleStyle => ({
    //         ...titleStyle,
    //         [name]: value,
    // }))}

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

    // useEffect(() => {
    //     const quill = quillInstance.current; 
    //     quill.focus();
    // }, [quillInstance])
    return (
        <StyledEditor>
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
        </StyledEditor>
    );
};

export default Editor;