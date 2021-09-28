import AWS from 'aws-sdk';

const uploadImage = (e, resolveCallback) => {
    const { 
        REACT_APP_BUCKETREGION, 
        REACT_APP_IDENTITY_POOL_ID 
    } = process.env;
    AWS.config.update({
        region: REACT_APP_BUCKETREGION,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: REACT_APP_IDENTITY_POOL_ID,
        }),
    })
    const file = e.target.files[0];
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: "moondeuk-images",
            Key: "diary/thumbnail/" + file.name,
            Body: file,
        }
    })
    const promise =  upload.promise();
    
    promise.then(
        function (data) {
            resolveCallback(data);
        },
        function (err) {
            alert(`이미지를 가져올 수 없어요! 😂\n 사유: ${err}`)
        }
    )
}

export default uploadImage;