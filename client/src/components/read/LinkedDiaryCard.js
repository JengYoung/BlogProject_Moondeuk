import styled, { css } from 'styled-components';
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const StyledLinkedDiaryCard = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
    margin: 1rem 20px;
    box-shadow: 1px 4px 2px rgba(0,0,0,0.2);
    padding: 1rem;
    transition: transform 0.3s ease-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

const StyledTitle = styled.h1`
    margin-top: 0.5rem;
    font-size: 1.1875rem;
    font-weight: 700;
`;

const StyledPostedDate = styled.h2`
    margin-top: 0.5rem;
    font-size: 0.8rem;
    font-weight: 300;
`;

const StyledBody = styled.h3`
    margin-top: 0.5rem;
    font-weight: 300;
    font-size: 0.7rem;
`;

const StyledTag = styled.div`
    border: 1px solid lightgray;
    border-radius: 1rem;
`;

const LinkedDiaryCardHead = styled.div`
    position: relative;
    font-weight: 700;
    color: #805a80;
    div {
        display: flex;
        font-size: 0.875rem;
        align-items: center;
    }
    svg {
        font-size: 1.25rem;
        margin-right: 0.5rem;
    }
    ${props =>
        (!props.isPostedBefore) && css`
            right: 0px;
            div {
                justify-content: flex-end;
            }
            text-align: right;
            svg {
                transform: rotate(180deg);
                margin-left: 0.5rem;
                margin-right: 0;
            }
        `
    }
`;
const LinkedDiaryCard = ({ linkedDiary, isPostedBefore }) => {
    const { title, body, tags, postedDate, author, _id } = linkedDiary;
    return (
        <StyledLinkedDiaryCard to={`/@${author.userId}/${_id}`}>
            <LinkedDiaryCardHead isPostedBefore={isPostedBefore}>
                {isPostedBefore ? 
                    <div><BiArrowBack/><span>이전 글</span></div> : 
                    <div><span>다음 글</span><BiArrowBack/></div>
                }
            </LinkedDiaryCardHead>
            <StyledTitle>{title}</StyledTitle>
            {tags.map(tag => <StyledTag key={tag}>{tag}</StyledTag>)}
            <StyledPostedDate>{postedDate}</StyledPostedDate>
            <StyledBody>{body}</StyledBody>
        </StyledLinkedDiaryCard>
    )
}

export default LinkedDiaryCard;