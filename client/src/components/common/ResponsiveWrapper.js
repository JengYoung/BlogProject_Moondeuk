import myMediaQuery from 'lib/styles/_mediaQuery';
import React from 'react'
import styled from 'styled-components';

/*
    전체적인 반응형을 위한 컴포넌트
*/

export const StyledResponsive = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    ${myMediaQuery.tablet} {
        max-width: 768px;
    }
    ${myMediaQuery.mobileAndTablet} {
        max-width: 500px;
    }
    ${myMediaQuery.tablet} {
        width: 100%;
    }
`;

const ResponsiveWrapper = ({children, ...rest}) => {
    return (
        <StyledResponsive {...rest}>
            {children}
        </StyledResponsive>
    );
};

export default ResponsiveWrapper;