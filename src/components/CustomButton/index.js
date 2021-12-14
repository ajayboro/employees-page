import React from "react";

import { Button } from "@material-ui/core";

const CustomButton = ({ type, label, style, startIcon, endIcon }) => {
	return (
		<Button
			className={style}
			variant={type}
			startIcon={startIcon && startIcon}
			endIcon={endIcon && endIcon}
		>
			{label}
		</Button>
	);
};

export default CustomButton;
