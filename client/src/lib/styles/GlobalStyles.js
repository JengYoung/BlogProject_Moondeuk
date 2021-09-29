import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        height: 100vh;
    }
    #root {
        height: 100%;
    }
    body {
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        min-height: 100%;
        height: 100%;
        ${({ theme }) => css`
            background: ${theme.bgColor};
        `}
    }
    button, textarea, input, option, select {
        font-family: 'Noto Sans KR', sans-serif;
    }
    img {
        image-rendering: auto;
    }
    button {
        border: none;
        outline: none;
        background: transparent;
        :hover {
            cursor: pointer;
        }
    }
    * {
        box-sizing: inherit;
        margin: 0;
    }
    li {
        list-style: none;
    }

    .nanum-gothic {
        font-family: 'Nanum Gothic', sans-serif;
    }
    .nanum-myeongjo {
        font-family: 'Nanum Myeongjo', sans-serif;
    }
    .dancing-script {
        font-family: 'Dancing Script', sans-serif;
    }
    .gamja-flower {
        font-family: 'Gamja Flower', cursive;
    }
    .red,
    &.red {
        background: #f38686;
    }
    .orange,
    &.orange {
        background: #ff9900;
    }
    .yellow,
    &.yellow {
        background: #ffee00;
    }
    .green,
    &.green {
        background: #b8e264;
    }
    .blue,
    &.blue {
        background: #726bd3;
    }
    .purple,
    &.purple {
        background: #7f51a5;
    }
    .mint,
    &.mint {
        background: #a7ffd3;
    }
    .sky,
    &.sky {
        background: #96e1ff;
    }
    .black,
    &.black {
        background: #2e2d2d;
    }
    .gray,
    &.gray {
        background: #686565;
    }
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: gray;
    }
    &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
`;

export default GlobalStyles;