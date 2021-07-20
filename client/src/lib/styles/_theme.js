import myColors from './_color';

const themeStyles = {
    dark: {
        now: 'dark',
        bgColor: myColors.purple[myColors.purple.length - 1],
        loginBg: 'transparent',
        fontColor: 'white',
        borderColor: 'white', // border의 경우 다크모드 - 흰색, 라이트모드 - 연보라
        errorColor: '#ff8e8e',
        inputColor: 'white',
        inputBorderColor: myColors.yellow[4],
        buttonBg: 'transparent',
        buttonColor: myColors.yellow[4],
        linkColor: myColors.yellow[3],
        tagColor: 'white',
        tagBg: myColors.purple[5],
        SideBarBg: 'white',
        HeaderBg: myColors.purple[7],
        event: {
            hoverBg: myColors.yellow[5],
            SideBarHoverBg: myColors.yellow[5],
            hoverColor: myColors.purple[5],
            buttonHoverColor: myColors.purple[5], // 버튼을 hover했을 때 폰트 색
        },
        sideBarBg: myColors.purple[7]
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
        buttonColor: 'white',
        tagColor: 'white',
        tagBg: myColors.purple[1],
        SideBarBg: 'white',
        HeaderBg: 'white',
        event: {
            hoverBg: myColors.purple[6],
            SideBarHoverBg:myColors.purple[6],
            hoverColor: 'white',
            buttonHoverColor: 'white', // 버튼을 hover했을 때 폰트 색
        },
        sideBarBg: myColors.purple[0]
    }
};

export default themeStyles;