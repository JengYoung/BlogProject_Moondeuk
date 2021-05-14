import React from 'react'
import styled from 'styled-components';

/*
    전체적인 반응형을 위한 컴포넌트
*/

export const StyledResponsive = styled.div`
    position: relative;
    margin: 0 auto;
    /* text-align: center; */
    @media screen and (min-width: 481px) {
        width: 100%;
    }
    @media screen and (min-width: 769px) {
        width: 768px;
    }
    /* border: 1px solid lightgray; */

`;

const ResponsiveWrapper = ({children, ...rest}) => {
    return (
        <StyledResponsive {...rest}>
            {children}
        </StyledResponsive>
    );
};

export default ResponsiveWrapper;