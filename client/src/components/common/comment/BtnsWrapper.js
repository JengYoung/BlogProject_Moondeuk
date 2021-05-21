import React from 'react'
import styled from 'styled-components';

/*
*/

const StyledBtn = styled.button`
    background-color: transparent;
    font-size: 0.5rem;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
        color: #734879;
        border-bottom: 1px solid #734879;
    };
`;
const StyledBtnsWrapper = styled.div`
    position: absolute;
    right: 0;
`;

const BtnsWrapper = ({ onSettingUpdate, onUpdateMode, onDelete }) => {
    const onUpdate = () => {
        onUpdateMode();
        onSettingUpdate();
    }
    return (
        <StyledBtnsWrapper>
            <StyledBtn onClick={onUpdate}>수정</StyledBtn>

            <StyledBtn onClick={onDelete}>삭제</StyledBtn>
        </StyledBtnsWrapper>
    );
};

export default BtnsWrapper;