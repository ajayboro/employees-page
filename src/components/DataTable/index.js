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

import { ReactComponent as PendingSvg } from "../../assets/pending.svg";
import { ReactComponent as SuccessfulSvg } from "../../assets/successful.svg";
import { ReactComponent as ArrowUpSvg } from "../../assets/arrowUp.svg";

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
								{/* task: extract the status */}
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
											<CustomButton
												type="contained"
												label="Send Invite"
												endIcon={<ArrowUpSvg />}
												style={classes.btnInvite}
											/>
										) : data.status === "successful" ? (
											<Status
												label="Successful"
												icon={<SuccessfulSvg className={classes.iconSvg} />}
												style={classes.successful}
											/>
										) : data.status === "pending" ? (
											<Status
												label="Pending"
												icon={<PendingSvg className={classes.iconSvg} />}
												style={classes.pending}
											/>
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
