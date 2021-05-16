import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import { RiEraserLine, RiDeleteBinLine } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai'
import { useState } from 'react';
/*
*/

const StyledDiaryModifyAndDeleteBtns = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    z-index: 99;
    right: 2vw;
    top: 80vh;
    font-size: 1.5rem;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;

const StyledDiaryModifyAndDeleteBtn = styled.li`
    display: block;
    list-style: none;
    padding: 0.3rem 1rem;
    border: 1px solid lightgray;
    font-size: 0.9rem;
    font-weight: 700;
    color: gray;
    transition: all 0.2s ease-out;
    &:hover { 
        background: #673c74;
        color: #ffee00;
    }
    &:nth-child(n+3) {
        border-top: 0px;
    }
`;

const DiaryModifyAndDeleteBtns = ({onPatch, onDelete}) => {
    const [openBtns, setOpenBtns] = useState(false);
    const onClick = () => {
        setOpenBtns(!openBtns);
    }
    return (
        <StyledDiaryModifyAndDeleteBtns onClick={onClick}>
            <AiTwotoneSetting></AiTwotoneSetting>
            {
                openBtns ? 
                <>
                    <StyledDiaryModifyAndDeleteBtn onClick={onPatch}><RiEraserLine/> 수정</StyledDiaryModifyAndDeleteBtn>
                    <StyledDiaryModifyAndDeleteBtn onClick={onDelete}><RiDeleteBinLine/> 삭제</StyledDiaryModifyAndDeleteBtn>
                </>
                : null
            }                
        </StyledDiaryModifyAndDeleteBtns>
    );
};

export default DiaryModifyAndDeleteBtns;