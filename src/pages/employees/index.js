import React, { useState, useEffect } from "react";
import { datas } from "../../datas/datas";
import { tableHeader } from "../../datas/tableHeader";
import DataTable from "../../components/DataTable";
import { Grid } from "@material-ui/core";
import CustomButton from "../../components/CustomButton/index";

import DropDown from "../../components/DropDown/index";

const Employees = () => {
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
			<Grid container xs={12} item justifyContent="space-between">
				<Grid
					container
					item
					xs={6}
					alignItems="center"
					justifyContent="flex-start"
				>
					<CustomButton type="add a new user" />
					<CustomButton type="role" />
				</Grid>
				<Grid
					container
					item
					xs={6}
					justifyContent="flex-end"
					alignItems="center"
				>
					<CustomButton type="designation" />
					<DropDown sortBy={sortBy} handleChangeSort={handleChangeSort} />
				</Grid>
			</Grid>
			<DataTable datas={sortedArr} tableHeader={tableHeader} />
		</Grid>
	);
};

export default Employees;
