import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { CgArrowsShrinkV } from 'react-icons/cg';
import { IoIosColorPalette } from 'react-icons/io';
import { IoImage } from 'react-icons/io5';
import uploadImage from 'lib/util/uploadImage';

const ThumbnailTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position:relative;
    width: 100%;
    height: 82vh;
    border-bottom: 1px solid lightgray;
    transition: all 0.5s;
    background-size: cover;
    background-position: center;
    @media screen and (min-width: 481px) {
        padding: 0 15vw;
        height: 78vh;
    }
    @media screen and (min-width: 769px) {
        padding: 0 20vw;
        height: 76vh;
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
const TitleInput = styled.div`
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
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
`;
const SubtitleInput = styled.textarea`
    background: transparent;
    font-size: 1rem;
    margin-bottom: 2rem;
    outline: none;
    border: none;
    width: 100%;
    padding-left: 0.5rem;
    ${({ theme }) => css`
        color: ${theme.fontColor};
    `}
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
    justify-content: center;
    align-items: center;
    height: 2rem;
    right: 6vw;
    --activeColor: #f5e83a;

    .active {
        color: var(--activeColor);
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
            color: var(--activeColor);
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
                color: var(--activeColor);
                path {
                    fill: white;
                }
            }
        }
        &:hover {
            svg {
                color: var(--activeColor);
                path {
                    fill: var(--activeColor);
                }
            }
        }
    }
    &.thumbnail {
        div, div > * {
            color: white;
            &:hover {
                color: var(--activeColor);
            }
        }
        .active {
            color: var(--activeColor);
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
        border: 1px solid var(--activeColor);
        color: var(--activeColor);
    }

    ${props => 
        props.isCenter && css`
            justify-content: center;
            align-items: center;
            border: 1px solid var(--activeColor);
            color: #{var(--activeColor);} !important;
        `
    }
`

const ThumbnailTitle = ({ title, subtitle, titleStyle, onChangeStyle, onChangeText, children }) => {
    const thumbnailBox = useRef(null);
    const titleBox = useRef(null);
    const mainTitle = useRef(null);
    const subTitle = useRef(null);

    const onChangeTitle = e => {
        const { dataset, textContent, value } = e.target;
        const { name } = dataset;
        const isTitle = name === "title";
        if (isTitle && textContent.length > 30) {
            alert("30자 이상 입력할 수 없습니다.");
            e.target.textContent = e.target.textContent.slice(0,30);
            onChangeText({ name, value: e.target.textContent });
            return;
        }
        const isSubtitle = name === 'subtitle';
        if (isSubtitle && textContent.length > 40) {
            alert("40자 이상 입력할 수 없습니다.");
            e.target.value = e.target.value.slice(0,40);
            onChangeText({ name, value: e.target.value });
            return;
        }
        onChangeText({ name, value: isTitle ? textContent : value });
    };

    /*
        ! 이벤트가 발생할 때 font 변경!
    */

    const onActive = e => {
        if(e.currentTarget.classList.contains('active')) return e.currentTarget.classList.remove('active');
        e.currentTarget.classList.toggle('active');
    }
    const onThumbnailUpload = e => uploadImage(e, data => {
        onChangeStyle({ name: 'thumbnail', value: data.Location})
        onChangeStyle({ name: 'color', value: "" })
        const thumbnailColorBtn = document.querySelector('.thumbnail-color-btn');
        thumbnailColorBtn.classList.remove('active');
    })

    const onSize = () => {
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
        }
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
                ref={titleBox}
            >
                <TitleInput 
                    contentEditable
                    ref={mainTitle}
                    data-name="title"
                    placeholder="제목을 입력하세요." 
                    onInput={onChangeTitle}
                    outerText={title}
                />
                <SubtitleInput 
                    ref={subTitle}
                    data-name="subtitle" 
                    onChange={onChangeTitle}
                    placeholder="소제목을 입력하세요."
                    value={subtitle}
                />
                { children }
                {/* font -> event bubbling (추후 많아질 수도 있으니) */}
            </TitleBox>
            <TitleToolbar className="title-toolbar" onClick={onChangeFont}>
                <label id="title-thumbnail-btn" htmlFor="title-thumbnail-input"><IoImage/></label>
                <input 
                    onChange={onThumbnailUpload} 
                    id="title-thumbnail-input" 
                    type="file" 
                    accept="image/*"
                />
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