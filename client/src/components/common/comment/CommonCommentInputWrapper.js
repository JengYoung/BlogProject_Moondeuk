import React from 'react'
import styled from 'styled-components';

/*
    댓글창 / 대댓글창에 사용하기 위한 공통 컴포넌트
*/

const StyledCommonCommentInputWrapper = styled.form`
    position: fixed;
    display: flex;
    width: 400px;
    z-index: 99;
`;

const CommonCommentInputWrapperSpacer = styled.div`
    width: 100%;
    height: 3rem;
`;

const CommonCommentInputWrapper = props => {
    return (
        <>
            <StyledCommonCommentInputWrapper { ...props }/>
            <CommonCommentInputWrapperSpacer />
        </>
    );
};

export default CommonCommentInputWrapper;