import React from "react";
import { Grid } from "@material-ui/core";

const Status = ({ label, icon, style }) => {
	return (
		<Grid
			container
			className={style}
			justifyContent="space-evenly"
			alignItems="center"
		>
			<Grid item>{label}</Grid>
			<Grid item>{icon}</Grid>
		</Grid>
	);
};

export default Status;
