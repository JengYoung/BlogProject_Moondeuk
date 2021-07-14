import { createGlobalStyle } from 'styled-components';

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
    }
    textarea, input, option, select {
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
`;

export default GlobalStyles;