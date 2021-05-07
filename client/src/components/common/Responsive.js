import React from 'react'
import styled from 'styled-components';

/*
    전체적인 반응형을 위한 컴포넌트
*/

export const StyledResponsive = styled.div`
    width: 1024px;
    margin: 0 auto;
    /* text-align: center; */
    @media screen and (min-width: 481px) {
        
    }

    @media screen and (min-width: 1024px) {

    }


`;

const ResponsiveWrap = ({children, ...rest}) => {
    return (
        <StyledResponsive {...rest}>
            {children}
        </StyledResponsive>
    );
};

export default ResponsiveWrap;