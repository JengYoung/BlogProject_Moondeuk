import React from 'react'
import styled, { css } from 'styled-components';
import ResponsiveWrapper from '../common/Responsive';

/*
*/

const StyledTitleInput = styled.textarea`
    display: block;
    padding: 0px;
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 2.75rem;
    width: 100%;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    border-bottom: 1px solid lightgray;
    font-weight: bold;
    overflow: hidden;
    color: rgb(33, 37, 41);
`;

const StyledTitleText = styled.textarea`
    display: block;
    padding: 10rem;
    font-size: 2.75rem;
    width: 100%;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    font-weight: bold;
    overflow: hidden;
    color: rgb(33, 37, 41);
    ${props =>
        props.text && css`
        height: 100%;
    `}
`;

const WriteForm = () => {
    return (
        <>
            <StyledTitleInput/>
            <StyledTitleText text/>
        </>
    );
};

export default WriteForm;