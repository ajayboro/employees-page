import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	sortBy: {
		backgroundColor: "#fff",
		border: "1px solid #0885DF",
		borderRadius: 5,
		paddingTop: 8,

		paddingBottom: 8,
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
	},

	marginRight: {
		marginRight: 8,
	},

	name: {
		fontWeight: 600,
	},

	menuItem: {
		borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
		paddingRight: 110,
		paddingTop: 12,
		paddingBottom: 12,
		"&:hover": {
			backgroundColor: "#fff",
		},
		"&:focus": {
			backgroundColor: "#fff",
		},
	},

	muiSelect: {
		minWidth: "100px !important",
		paddingRight: "24px !important",
		backgroundColor: "#fff !important",
	},

	muiListSelected: {
		backgroundColor: "#fff !important",
	},
});
