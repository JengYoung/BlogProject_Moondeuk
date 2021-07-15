import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoIosMoon, IoMdSunny } from "react-icons/io";
import myColors from 'lib/styles/_color';
import myVars from 'lib/styles/_variable';
import useTheme from 'lib/hooks/useTheme';
/**
 **/
const StyledDarkModeBtn = styled.section`
	display: flex;
	position: absolute;
	z-index: 50;
	align-items: center;
	top: 2rem;
	right: 2rem;
	width: 5rem;
	height: 2.25rem;
	background: #7fdbff;
	border: 1px solid ${myColors.gray[0]};
	box-shadow: ${myVars.defaultShadow};
	/* overflow: hidden; */
	border-radius: 2.25rem;
	transition: background-color 0.5s;
	&.dark {
		background: ${myColors.purple[6]};
	}
	&:hover {
		background: #08b7fc;
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
	border: 3px solid ${myColors.gray[0]};
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
	const $switchBtn = useRef(null);
	const $darkModeBtn = useRef(null);
	/*
		클릭할 시:
		1. switchBtn 움직임
		2. DarkModeBtn 색상 바뀜
	*/ 
	const { theme, toggleTheme } = useTheme();
	const onClick = (e) => {
		// $switchBtn.current.classList.toggle('move');
		// $darkModeBtn.current.classList.toggle('dark');
		toggleTheme();
	}
	useEffect(() => {
		$switchBtn.current.classList.toggle('move', theme === 'light');
		$darkModeBtn.current.classList.toggle('dark', theme === 'dark');
	}, [theme])

	return (
		<StyledDarkModeBtn ref={$darkModeBtn} onClick={onClick}>
			<StyledSwitchBtn ref={$switchBtn}/>
			<StyledTheme><IoMdSunny/></StyledTheme>
			<StyledTheme><IoIosMoon/></StyledTheme>		
		</StyledDarkModeBtn>
	);
};

export default React.memo(DarkModeBtn);
