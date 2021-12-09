import React from "react";
import { Grid } from "@material-ui/core";

import { ReactComponent as PendingSvg } from "../../assets/pending.svg";
import { ReactComponent as SuccessfulSvg } from "../../assets/successful.svg";
import { useStyles } from "./styles";

export const Pending = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			justifyContent="space-evenly"
			alignItems="center"
			className={classes.pending}
		>
			<Grid item>Pending</Grid>
			<Grid item>
				<PendingSvg className={classes.IconSvg} />
			</Grid>
		</Grid>
	);
};

export const Successful = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			justifyContent="space-evenly"
			alignItems="center"
			className={classes.successful}
		>
			<Grid item>Successful</Grid>
			<Grid item>
				<SuccessfulSvg className={classes.IconSvg} />
			</Grid>
		</Grid>
	);
};
