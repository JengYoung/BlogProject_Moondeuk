import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { AiFillCamera } from "react-icons/ai";
import AWS from 'aws-sdk';
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
    background-position: center;
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
    const { REACT_APP_ALBUMBUCKETNAME, REACT_APP_BUCKETREGION, REACT_APP_IDENTITY_POOL_ID } = process.env;
    AWS.config.update({
        region: REACT_APP_BUCKETREGION,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: REACT_APP_IDENTITY_POOL_ID,
        }),
    })
    
    const fileName = useRef(null);
    const imgUrl = user_image ? 
                    user_image : 
                    `https://${REACT_APP_ALBUMBUCKETNAME}.s3.ap-northeast-2.amazonaws.com/profile/userProfile.jpg`;
    
    const handleImgUpload = e => {
        const file = e.target.files[0];
        fileName.current = file.name;
        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: "moondeuk-images",
                Key: "profile/" + file.name,
                Body: file,
            }
        })
        const promise =  upload.promise();

        promise.then(
            function (data) {
                alert("프로필 사진이 성공적으로 수정 되었어요! ")
                userImgUploadAPI(user_id, data.Location)
            },
            function (err) {
                alert("업로드 중 오류가 발생했어요! 😂")
            }
        )
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
                onChange={handleImgUpload}
            />
            <StyledSettingImageLabel isHeader={isHeader} htmlFor="sideUserImage">
                <AiFillCamera></AiFillCamera>
            </StyledSettingImageLabel>
        </StyledUserImageBox>
    );
};

export default React.memo(UserImageBox);