import React from 'react'
import styled from 'styled-components';

/**
**/

const StyledQuestionBox = styled.div`
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* min-height: 100%; */
`;

const QuestionBox = (props) => {
    return (
        <StyledQuestionBox {...props}>
            
        </StyledQuestionBox>
    );
};

export default QuestionBox;