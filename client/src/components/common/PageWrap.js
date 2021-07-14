import React from "react";
import styled from "styled-components";
/**
 * ! 전체 페이지 요소를 포괄하는 Wrap
 **/

const StyledPageWrap = styled.div`
	display: flex;
	overflow: hidden;
	margin: 0;
	width: 100%;
	height: 100%;
`;

const PageWrap = (props) => {
	return <StyledPageWrap {...props}></StyledPageWrap>;
};

export default PageWrap;
