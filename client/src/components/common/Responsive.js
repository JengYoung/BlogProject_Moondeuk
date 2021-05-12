import React from 'react'
import styled from 'styled-components';

/*
    전체적인 반응형을 위한 컴포넌트
*/

export const StyledResponsive = styled.div`
    position: relative;
    width: calc(100vw - 600px);
    margin: 0 auto;
    /* text-align: center; */
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    border: 1px solid lightgray;

`;

const ResponsiveWrapper = ({children, ...rest}) => {
    return (
        <StyledResponsive {...rest}>
            {children}
        </StyledResponsive>
    );
};

export default ResponsiveWrapper;