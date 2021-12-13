import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	btnInvite: {
		backgroundColor: "#0885DF",
		borderRadius: 17,
		color: "#fff",
		textTransform: "capitalize",
		"&:hover": {
			color: "#14213D",
		},
	},

	btnAdd: {
		backgroundColor: "#fff",
		border: "1px solid rgba(20, 33, 61, 0.1)",
		borderRadius: 5,
		fontWeight: 600,
		padding: "12px 50px",
		textTransform: "none",
	},

	btnRole: {
		color: "#0885DF",
		fontWeight: 600,
		marginLeft: 10,
		textTransform: "none",
	},

	btnDesignation: {
		border: "1px solid #14213D",
		color: "#14213D",
		fontWeight: 600,
		borderRadius: 5,
		padding: "12px 50px",
		textTransform: "none",
	},
});
