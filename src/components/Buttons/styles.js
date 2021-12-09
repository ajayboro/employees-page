import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	inviteButton: {
		backgroundColor: "#0885DF",
		borderRadius: 17,
		color: "#fff",
		textTransform: "capitalize",
		"&:hover": {
			color: "#14213D",
		},
	},
});
