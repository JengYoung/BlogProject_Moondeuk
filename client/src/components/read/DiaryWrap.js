import React from 'react'
import styled from 'styled-components';

/**
**/

const StyledDiaryWrap = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    overflow: auto;
    background: #f5eaf7;
    display: flex;
    justify-content: center;
`;

const DiaryWrap = (props) => {
    return (
        <StyledDiaryWrap {...props}>
            
        </StyledDiaryWrap>
    );
};

export default DiaryWrap;