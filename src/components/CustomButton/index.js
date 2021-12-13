import React from "react";

import { Button } from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { ReactComponent as DesignationSvg } from "../../assets/designation.svg";
import { ReactComponent as ArrowUpSvg } from "../../assets/arrowUp.svg";
import { useStyles } from "./styles";

const CustomButton = ({ type, customType }) => {
	const classes = useStyles();

	return (
		<Button
			className={
				type === "add a new user"
					? classes.btnAdd
					: type === "role"
					? classes.btnRole
					: type === "designation"
					? classes.btnDesignation
					: type === "invite"
					? classes.btnInvite
					: ""
			}
			variant={
				type === "add a new user"
					? "outlined"
					: type === "role"
					? "text"
					: type === "designation"
					? "outlined"
					: type === "invite"
					? "outlined"
					: "contained"
			}
			startIcon={type === "designation" ? <DesignationSvg /> : ""}
			endIcon={
				type === "add a new user" ? (
					<AddOutlinedIcon />
				) : type === "invite" ? (
					<ArrowUpSvg />
				) : (
					""
				)
			}
		>
			{type === "add a new user"
				? "Add a new user"
				: type === "role"
				? "Role"
				: type === "designation"
				? "Designation"
				: type === "invite"
				? "Send Invite"
				: customType}
		</Button>
	);
};

export default CustomButton;
