import React from "react";

import { Button } from "@material-ui/core";

const CustomButton = ({ type, label, style, endIcon, startIcon }) => {
	return (
		<Button
			className={style}
			variant={type}
			endIcon={endIcon && endIcon}
			startIcon={startIcon && startIcon}
		>
			{label}
		</Button>
	);
};

export default CustomButton;
