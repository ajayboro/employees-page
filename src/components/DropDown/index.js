import React from "react";

import { Grid, MenuItem, Select } from "@material-ui/core";
import { useStyles } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const DropDown = ({ sortBy, handleChangeSort }) => {
	const classes = useStyles();
	return (
		<Grid item xs={4} className={classes.sortBy}>
			<div className={classes.marginRight}>
				<span className={classes.name}>Sort by : </span>
			</div>

			<Select
				IconComponent={ExpandMoreIcon}
				onChange={handleChangeSort}
				disableUnderline
				defaultValue="name"
				MenuProps={{
					MenuListProps: {
						disablePadding: true,
					},
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "left",
					},
					transformOrigin: {
						vertical: "top",
						horizontal: "center",
					},
					getContentAnchorEl: null,
				}}
				classes={{ select: classes.muiSelect }}
			>
				{sortBy.map((item, index) => (
					<MenuItem
						className={classes.menuItem}
						classes={{
							selected: classes.muiListSelected,
						}}
						key={index}
						value={item.value}
					>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</Grid>
	);
};

export default DropDown;
