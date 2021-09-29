import myColors from './_color';

const themeStyles = {
    dark: {
        now: 'dark', // 현재 모드
        /* default color */ 
        bgColor: myColors.purple[myColors.purple.length - 1],
        fontColor: 'white',
        borderColor: myColors.gray[5], // border의 경우 다크모드 - 흰색, 라이트모드 - 연보라
        errorColor: '#ff8e8e',
        /* component color */ 
        buttonBg: 'transparent',
        buttonColor: myColors.yellow[4],
        linkColor: myColors.yellow[3],
        inputColor: 'white',
        inputBorderColor: myColors.yellow[4],
        tagColor: 'white',
        tagBg: myColors.purple[5],
        progressBarColor: 'white',
        editorColor: myColors.gray[5],
        diaryCardBorderColor: myColors.gray[7],
        commentWrapperBgColor: myColors.purple[8],
        commentInputBtnBgColor: myColors.purple[1],
        /* page Specific color */
        loginBg: 'transparent',
        SideBarComponentBg: 'white',
        /* layout color */ 
        SideBarBg: myColors.purple[6],
        HeaderBg: myColors.purple[8],
        FooterBg: myColors.purple[8],
        ArticleBg: myColors.purple[6],
        ArticleCardBg:  myColors.purple[8],
        ArticleBorderColor: myColors.purple[7], // 배너 등의 스크롤 도중에 들어가있는 콘텐츠
        /* event color */ 
        event: {
            hoverBg: myColors.yellow[5],
            SideBarHoverBg: myColors.yellow[5],
            hoverColor: myColors.purple[5],
            buttonHoverColor: myColors.purple[5], // 버튼을 hover했을 때 폰트 색
        },
    },
    light: {
        now: 'light',
        /* default color */ 
        bgColor: 'white',
        fontColor: '#2b2b2b',
        borderColor: myColors.purple[1],
        errorColor: '#ff3c3c',
        /* component color */ 
        buttonBg: myColors.purple[1],
        buttonColor: 'white',
        linkColor: myColors.purple[1],
        inputColor: 'gray',
        inputBorderColor: myColors.purple[1],
        tagColor: 'white',
        tagBg: myColors.purple[1],
        progressBarColor: myColors.purple[0],
        editorColor: myColors.gray[7],
        diaryCardBorderColor: myColors.gray[3],
        commentWrapperBgColor: myColors.gray[1], 
        commentInputBtnBgColor: myColors.purple[1],
        /* page Specific color */
        loginBg: 'white',
        SideBarComponentBg: 'white',
        /* layout color*/ 
        SideBarBg: myColors.purple[0],
        HeaderBg: 'white',
        FooterBg: 'white',
        ArticleBg: myColors.purple[0],
        ArticleCardBg: 'white',
        ArticleBorderColor: myColors.purple[0],
        /* event color */ 
        event: {
            hoverBg: myColors.purple[3],
            hoverColor: 'white',
            SideBarHoverBg:myColors.purple[6],
            buttonHoverColor: 'white', // 버튼을 hover했을 때 폰트 색
        },    }
};

export default themeStyles;