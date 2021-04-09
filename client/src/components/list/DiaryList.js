import React from 'react'
import styled from 'styled-components';
import ResponsiveWrapper from '../common/Responsive';
import LoginBg from '../../images/LoginBg.jpg'
/*
*/


const StyledDiaryList = styled(ResponsiveWrapper)`
    display: flex;
    /* flex-direction: row; */
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
const DiaryWrapper = ({ diary }) => {
    const { title, tags, author } = diary;
    const { userId } = author;
    return (
        <StyledDiaryWrapper>
            <StyledDiaryThumbnail />
            <StyledDiaryData>
                <h1>{title}</h1>
                <div>
                    {userId}
                </div>
                {tags.map(tag => <div>{tag}</div>)}
                <hr/>
            </StyledDiaryData>
        </StyledDiaryWrapper>
    )
}
const DiaryList = ({ diaries, diariesError }) => {
    if (diariesError) return <StyledDiaryList>Error is occurred...</StyledDiaryList>
    return (
        <StyledDiaryList>
            {diaries && diaries.map(diary => {
                return <DiaryWrapper diary={diary}/>
            })}
        </StyledDiaryList>
    );
};

export default DiaryList;