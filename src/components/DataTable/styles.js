import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	tableContainer: {
		maxHeight: 750,
		marginTop: 20,
		borderRadius: 10,
	},

	tableHeadCell: {
		color: "#fff",
		backgroundColor: "#14213D",
		fontWeight: 600,
		padding: "20px 0px ",
	},

	title: {
		paddingLeft: 15,
	},

	verticalLine: {
		backgroundColor: "#fff",
		height: 30,
		width: 2,
	},

	tableBody: {
		backgroundColor: "#fff",
	},

	tableRowHover: {
		"&:hover": {
			boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
		},
	},

	status: {
		marginRight: 20,
	},
});
