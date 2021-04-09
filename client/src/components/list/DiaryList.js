import React from 'react'
import styled from 'styled-components';
import ResponsiveWrapper from '../common/Responsive';
import LoginBg from '../../images/LoginBg.jpg'
/*
*/


const StyledDiaryList = styled(ResponsiveWrapper)`
    display: flex;
    background-color: purple;
    margin-top: 3rem;
`;

const StyledDiaryThumbnail = styled.div`
    width: 90%;
    height: 300px;
    background-image: url(${LoginBg});
`;
const StyledDiaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 1rem;
    margin: 3%;
    background-color: white;
    border-radius: 10px;
`;

const StyledDiaryData = styled.div`
    word-break:break-all;
`;
const DiaryData = () => {
    return (
        <StyledDiaryData>hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!!</StyledDiaryData>
    )
}
const DiaryList = () => {
    return (
        <StyledDiaryList>
            <StyledDiaryWrapper>
                <StyledDiaryThumbnail/>
                <DiaryData/>
            </StyledDiaryWrapper>
            <StyledDiaryWrapper>
                <StyledDiaryThumbnail/>
                <DiaryData/>
            </StyledDiaryWrapper>
            <StyledDiaryWrapper>
                <StyledDiaryThumbnail/>
                <DiaryData/>
            </StyledDiaryWrapper>
        </StyledDiaryList>
    );
};

export default DiaryList;