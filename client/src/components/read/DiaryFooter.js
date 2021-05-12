import styled from 'styled-components';

const StyledDiaryFooter = styled.div`
display: flex;
position: fixed;
align-items: center;
justify-content: space-between;
z-index: 99;
bottom: 0;
border-top: 1px solid lightgray;
background: white;
box-shadow: 0px -5px 5px 0px rgba(0,0,0,0.1);
width: 100vw;
height: 8vh;
@media screen and (min-width: 481px) {
    height: 10vh;
}
`;

const Spacer = styled.div`
    height: 8vh;
    @media screen and (min-width: 481px) {
        height: 10vh;
    }
    /* @media screen and (min-width: 769px) {
        height: 12vh;
    } */
`;

const DiaryFooter = (props) => {
    return (
        <>
            <StyledDiaryFooter {...props}>
            </StyledDiaryFooter>
            <Spacer/>
        </>

    )
}

export default DiaryFooter;