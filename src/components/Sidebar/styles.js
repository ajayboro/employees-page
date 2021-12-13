import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	gridContainer: {
		backgroundColor: "#14213D",
		borderRadius: 10,
		padding: "50px 4px",
		height: 850,
	},

	navContainer: {
		display: "flex",
		justifyContent: "space-between",
	},

	icon: {
		marginRight: 20,
	},

	navLink: {
		marginTop: 3,
		marginBottom: 3,
		textDecoration: "none",
		color: "#fff",
		padding: 18,
		marginLeft: 16,
		marginRight: 16,
		fontWeight: 600,
		width: "85%",
	},

	divLink: {
		marginTop: 6,
		marginBottom: 6,
		color: "#fff",
		padding: "18px 0px 18px 8px",
	},

	activeNavLink: {
		color: "#14213D",
		backgroundColor: "#fff",
		borderRadius: 8,
	},
});
