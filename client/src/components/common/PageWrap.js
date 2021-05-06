import React from 'react'
import styled from 'styled-components';

/**
 * ! 전체 페이지 요소를 포괄하는 Wrap
**/

const StyledPageWrap = styled.div`
    width: 100vw;
    height:100vh;
    display: flex;
    margin: 0;
`;

const PageWrap = (props) => {
    return (
        <StyledPageWrap {...props}>
            
        </StyledPageWrap>
    );
};

export default PageWrap;