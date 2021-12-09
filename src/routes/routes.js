import React from "react";

import Dashboard from "../pages/dashboard/index";
import Attendence from "../pages/attendence/index";
import Employees from "../pages/employees/index";
import Leaves from "../pages/leaves/index";
import Events from "../pages/events/index";
import Profile from "../pages/profile/index";
import Policies from "../pages/policies/index";
import SideBar from "../components/Sidebar/index";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
	const classes = useStyles();
	return (
		<Router>
			<Grid
				container
				justifyContent="space-around"
				className={classes.gridContainer}
			>
				<Grid container item xs={2}>
					<SideBar />
				</Grid>

				<Switch>
					<Route exact path="/dashboard">
						<Grid container item xs={9}>
							<Dashboard />
						</Grid>
					</Route>
					<Route exact path="/attendence">
						<Grid container item xs={9}>
							<Attendence />
						</Grid>
					</Route>
					<Route exact path="/employees">
						<Grid container item xs={9} alignItems="flex-start">
							<Employees />
						</Grid>
					</Route>
					<Route exact path="/leaves">
						<Grid container item xs={9}>
							<Leaves />
						</Grid>
					</Route>
					<Route exact path="/events">
						<Grid container item xs={9}>
							<Events />
						</Grid>
					</Route>
					<Route exact path="/profile">
						<Grid container item xs={9}>
							<Profile />
						</Grid>
					</Route>
					<Route exact path="/policies">
						<Grid container item xs={9}>
							<Policies />
						</Grid>
					</Route>
				</Switch>
			</Grid>
		</Router>
	);
};

export default Routes;
