import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
// import palette from '../../lib/palette';
import Responsive from '../common/Responsive';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';

/*
    Editor UI 컴포넌트
*/

const StyledEditor = styled(Responsive)`
    /* 페이지 위아래 여백 지정 */
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const TitleInput = styled.input`
    padding: 0 0 1rem 1rem;
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid #947f94;
    margin-bottom: 2rem;
    width: 100%;
`;

const QuillWrapper = styled.div`
    padding-left: 1rem;
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
    console.log("title : ", title, "body: ", body)
    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    
    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 작성하세요 🌙',
            modules: {
                toolbar: [
                    [{ header: '1' }, { header: '2' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
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

    const onChangeTitle = e => {
        onChangeText({ name: 'title', value: e.target.value });
        console.log("title문제", e.target.value);
    };

    return (
        <StyledEditor>
            <TitleInput 
                name="title"
                placeholder="제목을 입력하세요" 
                onChange={onChangeTitle} 
                value={title}
            />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </StyledEditor>
    );
};

export default Editor;