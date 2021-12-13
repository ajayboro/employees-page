import React from "react";

import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { NavLink } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { ReactComponent as LogOutSvg } from "../../assets/logout.svg";

const SideBar = ({ navBarDatas, newActiveLink, setNewActiveLink }) => {
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
					{navBarDatas.map((navBarData, index) => (
						<div className={classes.navContainer}>
							<NavLink
								key={index}
								exact
								to={navBarData.link}
								className={classes.navLink}
								activeClassName={classes.activeNavLink}
								isActive={match => {
									match && setNewActiveLink(index);
									return match;
								}}
							>
								<Grid item>
									{newActiveLink === index
										? navBarData.iconActive
										: navBarData.icon}
									{navBarData.text}
								</Grid>
							</NavLink>
							<NavLink
								exact
								to={navBarData.link}
								className={classes.divLink}
								activeClassName={classes.activeNavLink}
							></NavLink>
						</div>
					))}

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
