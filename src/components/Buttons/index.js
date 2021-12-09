import React from "react";

import { Button } from "@material-ui/core";
import { ReactComponent as ArrowUpSvg } from "../../assets/arrowUp.svg";
import { useStyles } from "./styles";

export const InviteButton = () => {
	const classes = useStyles();
	return (
		<Button
			variant="outlined"
			className={classes.inviteButton}
			endIcon={<ArrowUpSvg />}
		>
			Send Invite
		</Button>
	);
};
