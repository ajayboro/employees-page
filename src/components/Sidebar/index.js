import React from "react";

import { Grid } from "@material-ui/core";

import { ReactComponent as CategorySvg } from "../../assets/category.svg";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { ReactComponent as ChartSvg } from "../../assets/chart.svg";
import { ReactComponent as PeopleSvg } from "../../assets/people.svg";
import { ReactComponent as NoteFavoriteSvg } from "../../assets/note-favorite.svg";
import { ReactComponent as CalendarSvg } from "../../assets/calendar.svg";
import { ReactComponent as UserOctagon } from "../../assets/user-octagon.svg";
import { ReactComponent as DocumentTextSvg } from "../../assets/document-text.svg";
import { ReactComponent as LogOutSvg } from "../../assets/logout.svg";

// import { ReactComponent as CategoryActiveSvg } from "../../assets/category-active.svg";
// import { ReactComponent as ChartActiveSvg } from "../../assets/chart-active.svg";
// import { ReactComponent as PeopleActiveSvg } from "../../assets/people-active.svg";
// import { ReactComponent as NoteFavoriteActiveSvg } from "../../assets/note-favorite-active.svg";
// import { ReactComponent as CalendarActiveSvg } from "../../assets/calendar-active.svg";
// import { ReactComponent as UserOctagonActiveSvg } from "../../assets/user-octagon-active.svg";
// import { ReactComponent as DocumentTextActiveSvg } from "../../assets/document-text-active.svg";

import { useStyles } from "./styles";

import { NavLink } from "react-router-dom";

const SideBar = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			item
			spacing={3}
			justifyContent="center"
			alignItems="center"
			className={classes.gridContainer}
		>
			<Grid container item xs={12} justifyContent="center">
				<Grid item>
					<LogoSvg />
				</Grid>
			</Grid>
			<Grid container item xs={12} justifyContent="center" alignItems="center">
				<Grid
					container
					spacing={4}
					item
					direction="column"
					justifyContent="center"
				>
					<NavLink
						to="/dashboard"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						<Grid item>
							<CategorySvg className={classes.icon} />
							DASHBOARD
						</Grid>
					</NavLink>
					<NavLink
						to="/attendence"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						<Grid item>
							<ChartSvg className={classes.icon} />
							ATTENDANCE
						</Grid>
					</NavLink>
					<NavLink
						to="/employees"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						<Grid item>
							<PeopleSvg className={classes.icon} />
							EMPLOYEES
						</Grid>
					</NavLink>
					<NavLink
						to="/leaves"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						<Grid item>
							<NoteFavoriteSvg className={classes.icon} />
							LEAVES
						</Grid>
					</NavLink>
					<NavLink
						to="/events"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						<Grid item>
							<CalendarSvg className={classes.icon} />
							EVENTS
						</Grid>
					</NavLink>
					<NavLink
						to="/profile"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						<Grid item>
							<UserOctagon className={classes.icon} />
							PROFILE
						</Grid>
					</NavLink>
					<NavLink
						to="/policies"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						<Grid item>
							<DocumentTextSvg className={classes.icon} />
							POLICIES
						</Grid>
					</NavLink>

					<Grid item className={classes.navLink}>
						<LogOutSvg className={classes.icon} />
						LOGOUT
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SideBar;
