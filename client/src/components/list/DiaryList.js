import React from 'react'
import styled from 'styled-components';
import ResponsiveWrapper from '../common/Responsive';
import LoginBg from '../../images/LoginBg.jpg';
import { Link } from 'react-router-dom';
/*
*/


const StyledDiaryList = styled(ResponsiveWrapper)`
    display: flex;
    /* flex-direction: row; */
    background-color: purple;
    margin-top: 3rem;
    flex-flow: wrap;
`;

const StyledDiaryThumbnail = styled.div`
    width: 90%;
    height: 300px;
    background-image: url(${LoginBg});
`;
const StyledDiaryWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 1%;
    margin: 1%;
    background-color: white;
    border-radius: 10px;
`;

const StyledDiaryData = styled.div`
    word-break:break-all;
`;
const DiaryWrapper = ({ diary }) => {
    const { title, tags, author,_id } = diary;
    const { userId } = author;
    return (
        <StyledDiaryWrapper to={`/@${userId}/${_id}`}>
            <StyledDiaryThumbnail />
            <StyledDiaryData>
                <h1>{title}</h1>
                <div>
                    {userId}
                </div>
                {tags.map(tag => <div key={tag}><b>{tag}</b></div>)}
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
                return <DiaryWrapper key={diary._id} diary={diary}/>
            })}
        </StyledDiaryList>
    );
};

export default DiaryList;