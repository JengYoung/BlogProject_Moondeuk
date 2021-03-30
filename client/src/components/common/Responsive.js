import React from 'react'
import styled from 'styled-components';

/*
*/

const ResponsiveBlock = styled.div`
    width: 1024px;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Responsive = () => {
    return (
        <ResponsiveBlock>
            test
        </ResponsiveBlock>
    );
};

export default Responsive;