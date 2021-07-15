import myColors from './_color';

const themeStyles = {
    dark: {
        now: 'dark',
        bgColor: myColors.purple[myColors.purple.length - 1],
        loginBg: 'transparent',
        fontColor: 'white',
        errorColor: '#ff8e8e',
        inputColor: 'white',
        inputBorderColor: 'yellow',
    },
    light: {
        now: 'light',
        bgColor: 'white',
        loginBg: 'white',
        fontColor: 'black',
        errorColor: '#ff3c3c',
        inputColor: 'gray',
        inputBorderColor: '#ffbfff',
    }
};

export default themeStyles;