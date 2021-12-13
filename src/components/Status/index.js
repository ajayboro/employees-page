import React from "react";
import { Grid } from "@material-ui/core";
import { ReactComponent as PendingSvg } from "../../assets/pending.svg";
import { ReactComponent as SuccessfulSvg } from "../../assets/successful.svg";

import { useStyles } from "./styles";

const Status = ({ type, customType }) => {
	const classes = useStyles();
	return (
		<Grid
			container
			justifyContent="space-evenly"
			alignItems="center"
			className={
				type === "successful"
					? classes.successful
					: type === "pending"
					? classes.pending
					: classes.default
			}
		>
			<Grid item>
				{type === "successful"
					? "Successful"
					: type === "pending"
					? "Pending"
					: customType}
			</Grid>
			<Grid item>
				{type === "successful" ? (
					<SuccessfulSvg className={classes.iconSvg} />
				) : type === "pending" ? (
					<PendingSvg className={classes.iconSvg} />
				) : (
					""
				)}
			</Grid>
		</Grid>
	);
};

export default Status;
