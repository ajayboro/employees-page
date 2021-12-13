import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	pending: {
		backgroundColor: "#E38630",
		width: 130,
		height: 35,
		borderRadius: 17,
		color: "#fff",
		textTransform: "capitalize",
	},

	successful: {
		backgroundColor: "#34E330",
		width: 130,
		height: 35,
		borderRadius: 17,
		color: "#fff",
		textTransform: "capitalize",
	},

	default: {
		backgroundColor: "gray",
		width: 130,
		height: 35,
		borderRadius: 17,
		color: "#fff",
		textTransform: "capitalize",
	},

	iconSvg: {
		marginTop: 5,
	},
});
