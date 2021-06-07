import React, { useEffect } from 'react'
import styled, { css } from 'styled-components';
import { AiFillCamera } from "react-icons/ai";
import userImgUploadAPI from '../../lib/routes/upload/userImgUpload';
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
    background-size: cover;
    img {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
    ${props => 
        props.imgUrl && css`
            background-image: url(${props.imgUrl});
        `
    }
    ${props => 
        props.isHeader && css`
            width: 30px;
            height: 30px;
            min-width: 30px;
            min-height: 30px;
            margin-right: 0.25rem;
            @media screen and (min-width: 481px) {
                width: 3rem;
                height: 3rem;
                margin-right: 0.5rem;
            }    
        `
    }
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
    ${props => 
        props.isHeader && css`
            display: none;
        `
    }
`;
const UserImageBox = ({ isHeader, user_id, user_image, checkUser }) => {
    const imgUrl = user_image ? '/img/' + user_image.replace('\\', '/') : null;
    const onChange = (e) => {
        const imgFiles = e.target.files
        console.log("onChange", imgFiles);
        userImgUploadAPI(user_id, imgFiles)
        checkUser();
    }
    
    useEffect(() => {
        checkUser();
    }, [user_image, checkUser])

    return (
        <StyledUserImageBox isHeader={isHeader} imgUrl={imgUrl}>
            <StyledUserImageInput 
                id="sideUserImage"
                type="file" 
                accept="image/jpeg, image/jpg, image/png" 
                enctype="multipart/form-data"
                onChange={onChange}
            />
            <StyledSettingImageLabel isHeader={isHeader} htmlFor="sideUserImage">
                <AiFillCamera></AiFillCamera>
            </StyledSettingImageLabel>
        </StyledUserImageBox>
    );
};

export default React.memo(UserImageBox);