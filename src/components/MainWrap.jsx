import React from "react";
import { StyledMain, StyledContentArea } from './styledcss/general'
import SideMenu from "./SideMenu";
import ExistingBlock from "./ExistingBlock";

const MainWrap = () => {
	return <>
		<StyledMain>
			<StyledContentArea>
				<ExistingBlock />
			</StyledContentArea>
			<SideMenu />
		</StyledMain>
	</>
};

export default MainWrap;
