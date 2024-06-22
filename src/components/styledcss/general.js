import styled from "@emotion/styled";

export const StyledMain = styled("div")({
	width: "100%",
	height: "Calc(100vh - 70px)",
	// maxWidth: "1800px",
	// minHeight: "1800px",
	background: "blue",
	display: "flex",
	flexWrap: "nowrap",
});

export const StyledSideMenu = styled("div")({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	width: "600px",
	background: "#ffffff",
	border: "2px solid rgb(107,107,107)",
	padding: '10px 22px 10px 10px',

	h2: {
		display: 'flex',
		marginBottom: '14px',
		img: {
			width: '30px',
			marginRight: '10px'
		}
	},

	'& .action-block':{
		width: '100%',
		height: '30%',
		minHeight: '300px',
		margin: '10px 0',
		padding: '5px',
		border: "2px solid rgb(107,107,107)",
		overflowY: 'scroll'
	},

	'& .menu-blocks': {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		button: {
			width: '45%',
			fontSize: '12px'
		}
	}
});

export const StyledContentArea = styled("div")({
	width: "100%",
	padding: "20px",
	backgroundColor: "#000000",
});

export const StyledExistingBlock = styled("div")({
	width: "600px",
	height: "300px",
	boxShadow: "1px 0px 16px 4px #fff",
	img: {
		width: '100%',
		height: '100%',
		objectFit: "cover"
	}
});

export const ActionForm= styled("form")({
	display: 'flex',
	flexWrap: 'wrap',
	paddingRight: '5px',
	'.row':{
		width: '100%',
		display: 'flex',
		margin: '4px 0 8px',
		label: {
			width: '30%',
			marginRight: '5px'
		},
		input: {
			width: '70%',
			border: 'none',
			borderBottom: '1px solid #000'
		},

		'&.notes':{
			flexDirection: 'column',
			width: 'Calc(100% - 10px)',
			label: {
				width: '100%',
				marginBottom: '5px'
			},
			textarea: {
				width: '100%',
				minHeight: '100px',
				padding: '5px'
			}
		},
	}
});
