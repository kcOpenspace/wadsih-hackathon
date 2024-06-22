import React from "react";
import { StyledHeader } from "./styledcss/header-styles";
import logo from '../assets/wapol-logo.png'

const Header = () => {
	return (
		<>
			<StyledHeader>
				<img src={logo} alt="wapol" />
				<h2>000 Operator</h2>
			</StyledHeader>
		</>
	);
};

export default Header;
