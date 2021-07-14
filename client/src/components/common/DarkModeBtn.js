import React, { useRef } from "react";
import styled from "styled-components";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import myColors from 'lib/styles/_color';
import { useEffect } from 'react';
/**
 **/
const StyledDarkModeBtn = styled.section`
	display: flex;
	align-items: center;
	position: absolute;
	top: 2rem;
	right: 0;
	width: 5rem;
	height: 2.25rem;
	background: #7fdbff;
	border-radius: 2.25rem;
	transition: background-color 0.5s;
	&.dark {
		background: ${myColors.purple[6]};
	}
	&:hover {
		background: ${myColors.purple[0]};
		&.dark {
			background: ${myColors.purple[4]};
		}
		cursor: pointer;
	}
`;
const StyledSwitchBtn = styled.button`
	--move: '30px';
	position: absolute;
	width: 2.375rem;
	height: 2.375rem;
	background: white;
	border: 1px solid ${myColors.gray[5]};
	border-radius: 2rem;
	transition: transform 0.5s;
	&.move {
		transform: translateX(2.625rem);
	}
`;
const StyledTheme = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
	font-size: 1.5rem;
	color: yellow;
`;


const DarkModeBtn = () => {
	const switchBtn = useRef(null);
	const darkModeBtn = useRef(null);
	/*
		클릭할 시:
		1. switchBtn 움직임
		2. DarkModeBtn 색상 바뀜
	*/ 
	const onClick = (e) => {
		switchBtn.current.classList.toggle('move');
		darkModeBtn.current.classList.toggle('dark');
		const theme = localStorage.getItem('theme');
		const nextTheme = theme === 'dark' ? 'light' : 'dark'
		localStorage.setItem('theme', nextTheme);
		document.querySelector('#root').classList.toggle('dark');
	}

	/*
		1. 다크모드 여부를 체크한다.
		2. 기존 테마 설정이 다크모드라면, 
			2-1) 먼저 root에 class dark 추가
			2-2) 만약 checkTheme이 false라면 버튼 옮기기 (button은 light mode일 시 움직임)
			2-3) 색상 변경
	*/
	useEffect(() => {
		const theme = localStorage.getItem('theme'); // 1.체크
		if (!theme) {
			const checkTheme = window.matchMedia('(prefers-color-scheme: Dark)').matches; // 2. 모드 여부
			if (checkTheme) {
				document.querySelector('#root').classList.add('dark'); // 2-1
				darkModeBtn.current.classList.add('dark');
			} else switchBtn.current.classList.toggle('move'); // 2-2
			localStorage.setItem('theme', checkTheme ? 'dark' : 'light');
		}
		else {
			if (theme === 'dark') {
				document.querySelector('#root').classList.add('dark')
				darkModeBtn.current.classList.toggle('dark');
			}
			else switchBtn.current.classList.toggle('move');
		}
	}, [])
	return (
		<StyledDarkModeBtn ref={darkModeBtn} onClick={onClick}>
			<StyledSwitchBtn ref={switchBtn}/>
			<StyledTheme><IoMdSunny/></StyledTheme>
			<StyledTheme><IoIosMoon/></StyledTheme>		
		</StyledDarkModeBtn>
	);
};

export default DarkModeBtn;
