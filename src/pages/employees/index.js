import React, { useState, useEffect } from "react";
import { datas } from "../../datas/datas";
import { tableHeader } from "../../datas/tableHeader";
import DataTable from "../../components/DataTable";
import { Grid } from "@material-ui/core";
import CustomButton from "../../components/CustomButton/index";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { ReactComponent as DesignationSvg } from "../../assets/designation.svg";

import DropDown from "../../components/DropDown/index";
import { useStyles } from "./styles";

const Employees = () => {
	const classes = useStyles();
	const sortBy = [
		{
			name: "Name",
			value: "name",
		},
		{
			name: "Active",
			value: "active",
		},
		{
			name: "Non-active",
			value: "non-active",
		},
		{
			name: "All employees",
			value: "all-employees",
		},
	];

	const [sortedArr, setSortedArr] = useState(datas);

	useEffect(() => {
		const sortByName = datas.sort((first, second) => {
			if (first.name < second.name) {
				return -1;
			} else {
				return 0;
			}
		});
		setSortedArr(() => [...sortByName]);
	}, []);

	const handleChangeSort = e => {
		const value = e.target.value;
		const sortByName = datas.sort((first, second) => {
			if (first.name < second.name) {
				return -1;
			} else {
				return 0;
			}
		});
		if (value === "name") {
			setSortedArr(() => [...sortByName]);
		} else if (value === "active") {
			setSortedArr(datas.filter(item => item.status === "successful"));
		} else if (value === "non-active") {
			setSortedArr(datas.filter(item => item.status === "pending"));
		} else {
			setSortedArr(datas);
		}
	};

	return (
		<Grid container>
			<Grid container item justifyContent="space-between">
				<Grid container item xs={3} alignItems="center">
					<CustomButton
						type="outlined"
						label="Add a new user"
						endIcon={<AddOutlinedIcon />}
						style={classes.btnAdd}
					/>
					<CustomButton type="text" label="Role" style={classes.btnRole} />
				</Grid>
				<Grid
					container
					item
					xs={4}
					justifyContent="space-between"
					alignItems="center"
				>
					<CustomButton
						type="outlined"
						label="Designation"
						startIcon={<DesignationSvg />}
						style={classes.btnDesignation}
					/>
					<DropDown sortBy={sortBy} handleChangeSort={handleChangeSort} />
				</Grid>
			</Grid>
			<DataTable datas={sortedArr} tableHeader={tableHeader} />
		</Grid>
	);
};

export default Employees;
