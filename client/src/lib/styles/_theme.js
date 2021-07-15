import myColors from './_color';

const themeStyles = {
    dark: {
        now: 'dark',
        bgColor: myColors.purple[myColors.purple.length - 1],
        loginBg: 'transparent',
        fontColor: 'white',
        borderColor: 'white',
        errorColor: '#ff8e8e',
        inputColor: 'white',
        inputBorderColor: myColors.yellow[4],
        buttonBg: 'white',
        linkColor: myColors.yellow[3],
        event: {
            hoverBg: myColors.yellow[5],
            linkHoverColor: myColors.yellow[5],
            buttonHoverColor: myColors.purple[5],
            
        }
    },
    light: {
        now: 'light',
        bgColor: 'white',
        loginBg: 'white',
        borderColor: myColors.purple[1],
        fontColor: '#2b2b2b',
        errorColor: '#ff3c3c',
        inputColor: 'gray',
        inputBorderColor: myColors.purple[1],
        linkColor: myColors.purple[1],
        buttonBg: myColors.purple[1],
        event: {
            hoverBg: myColors.purple[6],
            linkHoverColor: myColors.purple[6],
            buttonHoverColor: 'white',
        }
    }
};

export default themeStyles;