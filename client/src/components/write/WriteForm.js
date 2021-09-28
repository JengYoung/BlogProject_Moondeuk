import React from 'react'
import styled, { css } from 'styled-components';

/*
*/

const StyledTitleText = styled.div`
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

const StyledBodyText = styled.textarea`
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

const WriteForm = ({ onChangeText, title, body }) => {
    const onChange = (e) => {
        const { name, value } = e.target;
        onChangeText({name, value});
    };
    return (
        <>
            <StyledTitleText contentEditable onChange={onChange} name="title" value={title} />
            <StyledBodyText onChange={onChange} name="body" value={body} text/>
        </>
    );
};

export default WriteForm;