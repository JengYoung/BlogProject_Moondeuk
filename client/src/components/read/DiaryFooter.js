import styled, { css } from 'styled-components';

const StyledDiaryFooter = styled.footer`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    bottom: 0;
    border-top: 1px solid lightgray;
    box-shadow: 0px -5px 5px 0px rgba(0,0,0,0.1);
    width: 100%;
    height: 8vh;
    @media screen and (min-width: 481px) {
        height: 10vh;
    }
    
    ${props =>
        props.isWrite && css`
            display: flex;
            justify-content: center;
            @media screen and (min-width: 469px) {
                justify-content: flex-end;
            }
        `
    }
    ${({ theme }) => css`
        background: ${theme.FooterBg};
        border-top: ${theme.FooterBg};
    `}
`;

const Spacer = styled.div`
    height: 8vh;
    bottom: 0;
    @media screen and (min-width: 481px) {
        height: 10vh;
    }
    @media screen and (min-width: 769px) {
        height: 12vh;
    }
`;

const DiaryFooter = (props) => {
    return (
        <>
            <StyledDiaryFooter {...props}/>
            <Spacer className="Joker"/>
        </>

    )
}

export default DiaryFooter;