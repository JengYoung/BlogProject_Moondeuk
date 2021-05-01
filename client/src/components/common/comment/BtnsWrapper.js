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
    };
`;
const StyledBtnsWrapper = styled.div`
    position: absolute;
    right: 0;
`;

const BtnsWrapper = (props, { onDelete, onUpdateMode }) => {
    return (
        <StyledBtnsWrapper {...props}>
            <StyledBtn onClick={onUpdateMode}>수정</StyledBtn>
            <StyledBtn onClick={onDelete}>삭제</StyledBtn>
        </StyledBtnsWrapper>
    );
};

export default BtnsWrapper;