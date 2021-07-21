import styled, { css } from 'styled-components';
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { myFont } from 'lib/styles/_variable';
const StyledLinkedDiaryCard = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    ${({ theme }) => css`
        background: ${theme.ArticleCardBg};
        color: ${theme.fontColor};
    `}
    margin: 1rem 20px;
    box-shadow: 1px 4px 2px rgba(0,0,0,0.2);
    padding: 1rem;
    transition: transform 0.3s ease-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    text-decoration: none;
`;

const StyledTitle = styled.h1`
    margin-top: 0.5rem;
    font-size: ${myFont.size.ml};
    font-weight: 700;
`;

const StyledSubTitle = styled.h2`
    margin-top: 0.25rem;
    font-weight: 400;
    font-size: ${myFont.size.ms};
`

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

const StyledTags = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    padding: 0;
`;
const StyledTag = styled.span`
    margin: 0.25rem 0.375rem 0.25rem 0;
    padding: 0 1rem;
    font-size: ${myFont.size.mms};
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
    const { title, subtitle, body, tags, postedDate, author, _id } = linkedDiary;
    return (
        <StyledLinkedDiaryCard to={`/@${author.userId}/${_id}`}>
            <LinkedDiaryCardHead isPostedBefore={isPostedBefore}>
                {isPostedBefore ? 
                    <div><BiArrowBack/><span>이전 글</span></div> : 
                    <div><span>다음 글</span><BiArrowBack/></div>
                }
            </LinkedDiaryCardHead>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubTitle>{subtitle}</StyledSubTitle>
            <StyledTags>
                {tags.map(tag => <StyledTag key={tag}>{tag}</StyledTag>)}
            </StyledTags>
            <StyledPostedDate>{postedDate}</StyledPostedDate>
            <StyledBody>{body}</StyledBody>
        </StyledLinkedDiaryCard>
    )
}

export default LinkedDiaryCard;