import React from 'react';
import '../../_Styles/_Header.css'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { colors } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Header = () => {
    const classes = useStyles();

    return (
      <header id="Header">
        <Grid container id="Header_container">
          <Grid item xs={8} className="header_grids">
            {/* <MenuIcon id="Burger_icon" /> */}
            <Paper className={classes.leftPaper}>Task Reminder App</Paper>
          </Grid>
          <Grid item xs={4}>
            {/* <Paper className={classes.rightPaper} id="rightPaper">xs=6</Paper> */}
          </Grid>
        </Grid>
      </header>
    );
}


const useStyles = makeStyles((theme) => ({
  leftPaper: {
    padding: theme.spacing(2),
    textAlign: "left",
    boxShadow: "none",
    backgroundColor: "transparent",
    color: "#fafafa",
    fontFamily: "Poppins",
    fontWeight: "700"
  },
  rightPaper: {
    padding: theme.spacing(2),
    textAlign: "right",
    boxShadow: "none",
    backgroundColor: "transparent",
    color: "#fafafa",
  },
}));

export default Header
