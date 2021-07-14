import { setTheme } from 'modules/setting';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*
    localStorage에서 theme key의 value를 가져옴. 
    없을 시 light를 반환.
*/ 
export const checkTheme = () => {
    let theme = localStorage.getItem('theme');
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
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
    }

    // 처음 렌더링 될 때는 체크하고, 스토어, 로컬스토리지에 넣어주기만 한다.
    useEffect(() => {
        const nowTheme = checkTheme();
        dispatch(setTheme(nowTheme));
        localStorage.setItem('theme', nowTheme);
    }, [dispatch])

    // 이후에는 theme이 바뀔때마다 로컬스토리지만 변경해주면 된다.
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme, dispatch]);

    return { theme, toggleTheme };
}

export default useTheme;