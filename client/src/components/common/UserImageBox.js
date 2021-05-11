import React from 'react'
import styled from 'styled-components';
import { AiFillCamera } from "react-icons/ai";
/** 
**/

const StyledUserImageBox = styled.div`
    position: relative;
    display: inline-block;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    border: 1px solid lightgray;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`;

const StyledUserImageInput = styled.input`
    display: none;
`;
const StyledSettingImageLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: #964d96;
    position: absolute;
    right: 0;
    color: #ffee00;
    outline: none;
    border: none;
    border-radius: 25px;
    font-size: 30px;
    &:hover {
        cursor: pointer;
    }
    * {
        font-size: 1rem;
    }
`;
const UserImageBox = () => {
    return (
        <StyledUserImageBox>
            <StyledUserImageInput id="userImage"></StyledUserImageInput>
            <StyledSettingImageLabel htmlFor="userImage">
                <AiFillCamera></AiFillCamera>
            </StyledSettingImageLabel>
        </StyledUserImageBox>
    );
};

export default UserImageBox;