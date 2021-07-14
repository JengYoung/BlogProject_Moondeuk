import { setTheme } from 'modules/setting';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*
    localStorage에서 theme key의 value를 가져옴. 
    없을 시 light를 반환.
*/ 
export const checkTheme = () => {
    let theme = localStorage.getItem('theme');
    console.log("여기", theme)
    if (!theme) {
        const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
        theme = matches ? 'dark' : 'light';
    }
    return theme;
}

const useTheme = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector(({ settingReducer }) => ({
        theme: settingReducer.theme,
    }));

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        dispatch(setTheme(nextTheme));
        localStorage.setItem('theme', nextTheme);
    }

    // 처음 렌더링 될 때는 체크하고, 스토어, 로컬스토리지에 넣어주기만 한다.
    useEffect(() => {
        const nowTheme = checkTheme();
        dispatch(setTheme(nowTheme));
        localStorage.setItem('theme', nowTheme);
    }, [dispatch])

    return { theme, toggleTheme };
}

export default useTheme;