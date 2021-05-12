import React from 'react'
import styled, { css } from 'styled-components';
import background from '../../images/background.png'
/**
 * ! 전체 페이지 요소를 포괄하는 Wrap
**/

const StyledPageWrap = styled.div`
    width: 100vw;
    display: flex;
    /* overflow-x: hidden; */
    overflow: auto;
    margin: 0;
    min-height: 100%;
    ${props => 
        props.register && css`
            /* width: 100%; */
            justify-content: center;
            background-image: url(${background});
            background-repeat: no-repeat;
            background-size: cover;
        `}
`;

const PageWrap = (props) => {
    return (
        <StyledPageWrap {...props}>
            
        </StyledPageWrap>
    );
};

export default PageWrap;