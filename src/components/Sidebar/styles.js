import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	gridContainer: {
		backgroundColor: "#14213D",
		borderRadius: 10,
		padding: "50px 20px",
		height: 850,
	},

	icon: {
		marginRight: 20,
	},

	navLink: {
		marginBottom: 8,
		textDecoration: "none",
		color: "#fff",
		padding: 18,
		fontWeight: 600,
	},

	activeNavLink: {
		color: "#14213D",
		backgroundColor: "#fff",
		borderRadius: 8,
	},
});
