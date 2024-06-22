import styled from "@emotion/styled";

export const StyledMain = styled("div")({
	width: "100%",
	height: "100%",
	maxWidth: "1800px",
	minHeight: "1800px",
	background: "blue",
	display: "flex",
	flexWrap: "nowrap",
});

export const StyledSideMenu = styled("div")({
	width: "400px",
	backgroundColor: "green",
});

export const StyledContentArea = styled("div")({
	width: "100%",
	backgroundColor: "grey",
});

export const StyledExistingBlock = styled("div")({
	width: "600px",
	height: "300px",
	backgroundColor: "yellow",
});
