import React from "react";
import {
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Grid,
} from "@material-ui/core";

import { ReactComponent as GreenSvg } from "../../assets/green.svg";
import { ReactComponent as RedSvg } from "../../assets/red.svg";

import { useStyles } from "./styles";

import Status from "../Status/index";
import CustomButton from "../CustomButton/index";

const DataTable = ({ datas, tableHeader }) => {
	const classes = useStyles();
	return (
		<TableContainer className={classes.tableContainer}>
			<Table stickyHeader>
				<TableHead>
					<TableRow className={classes.tableHeadRow}>
						{tableHeader.map((title, index) => {
							return (
								<TableCell key={index} className={classes.tableHeadCell}>
									<Grid
										container
										justifyContent="flex-start"
										alignItems="center"
									>
										<Grid item>
											{index > 0 ? (
												<div className={classes.verticalLine}></div>
											) : (
												""
											)}
										</Grid>
										<Grid item className={classes.title}>
											{title}
										</Grid>
									</Grid>
								</TableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody className={classes.tableBody}>
					{datas.map((data, index) => (
						<TableRow
							key={index}
							hover
							classes={{
								hover: classes.tableRowHover,
							}}
						>
							<TableCell>
								{data.status === "invite" ? (
									<GreenSvg className={classes.status} />
								) : data.status === "successful" ? (
									<GreenSvg className={classes.status} />
								) : data.status === "pending" ? (
									<RedSvg className={classes.status} />
								) : (
									""
								)}
								{data.name}
							</TableCell>
							<TableCell>{data.email}</TableCell>
							<TableCell>{data.phone}</TableCell>
							<TableCell>{data.designation}</TableCell>
							<TableCell>
								<Grid
									container
									alignItems="center"
									justifyContent="space-between"
								>
									<Grid item>{data.assignTo}</Grid>
									<Grid item>
										{data.status === "invite" ? (
											<CustomButton type="invite" customType="Button" />
										) : data.status === "successful" ? (
											<Status type="successful" customType="Status" />
										) : data.status === "pending" ? (
											<Status type="pending" customType="Status" />
										) : (
											""
										)}
									</Grid>
								</Grid>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
