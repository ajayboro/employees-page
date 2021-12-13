import React, { useState } from "react";

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

import { ReactComponent as CategorySvg } from "../assets/category.svg";
import { ReactComponent as ChartSvg } from "../assets/chart.svg";
import { ReactComponent as PeopleSvg } from "../assets/people.svg";
import { ReactComponent as NoteFavoriteSvg } from "../assets/note-favorite.svg";
import { ReactComponent as CalendarSvg } from "../assets/calendar.svg";
import { ReactComponent as UserOctagonSvg } from "../assets/user-octagon.svg";
import { ReactComponent as DocumentTextSvg } from "../assets/document-text.svg";

import { ReactComponent as CategoryActiveSvg } from "../assets/category-active.svg";
import { ReactComponent as ChartActiveSvg } from "../assets/chart-active.svg";
import { ReactComponent as PeopleActiveSvg } from "../assets/people-active.svg";
import { ReactComponent as NoteFavoriteActiveSvg } from "../assets/note-favorite-active.svg";
import { ReactComponent as CalendarActiveSvg } from "../assets/calendar-active.svg";
import { ReactComponent as UserOctagonActiveSvg } from "../assets/user-octagon-active.svg";
import { ReactComponent as DocumentTextActiveSvg } from "../assets/document-text-active.svg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
	const classes = useStyles();

	const navBarDatas = [
		{
			link: "/dashboard",
			icon: <CategorySvg className={classes.icon} />,
			iconActive: <CategoryActiveSvg className={classes.icon} />,
			text: "DASHBOARD",
		},
		{
			link: "/attendence",
			icon: <ChartSvg className={classes.icon} />,
			iconActive: <ChartActiveSvg className={classes.icon} />,
			text: "ATTENDENCE",
		},
		{
			link: "/employees",
			icon: <PeopleSvg className={classes.icon} />,
			iconActive: <PeopleActiveSvg className={classes.icon} />,
			text: "EMPLOYEES",
		},
		{
			link: "/leaves",
			icon: <NoteFavoriteSvg className={classes.icon} />,
			iconActive: <NoteFavoriteActiveSvg className={classes.icon} />,
			text: "LEAVES",
		},
		{
			link: "/events",
			icon: <CalendarSvg className={classes.icon} />,
			iconActive: <CalendarActiveSvg className={classes.icon} />,
			text: "EVENTS",
		},
		{
			link: "/profile",
			icon: <UserOctagonSvg className={classes.icon} />,
			iconActive: <UserOctagonActiveSvg className={classes.icon} />,
			text: "PROFILE",
		},
		{
			link: "/policies",
			icon: <DocumentTextSvg className={classes.icon} />,
			iconActive: <DocumentTextActiveSvg className={classes.icon} />,
			text: "POLICIES",
		},
	];
	const [newActiveLink, setNewActiveLink] = useState(null);
	return (
		<Router>
			<Grid
				container
				justifyContent="space-around"
				className={classes.gridContainer}
			>
				<Grid container item xs={2}>
					<SideBar
						navBarDatas={navBarDatas}
						newActiveLink={newActiveLink}
						setNewActiveLink={setNewActiveLink}
					/>
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
