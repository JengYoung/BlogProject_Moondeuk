import myColors from './_color';

const themeStyles = {
    dark: {
        bgColor: myColors.purple[myColors.purple.length - 1],
        loginBg: 'transparent',
        fontColor: 'white',
    },
    light: {
        bgColor: 'white',
        loginBg: 'white',
        fontColor: 'black',
    }
};

export default themeStyles;