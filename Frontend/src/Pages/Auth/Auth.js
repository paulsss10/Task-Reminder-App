import React from 'react';
import '../../SASS/Components/_AuthForm/_AuthForm.scss';
import { makeStyles } from '@material-ui/core/styles';
import { RegisterForm } from '../../Components/AuthComponent/AuthForm';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Auth = () => {
    const classes = useStyles();

    return (
      <div className="auth_container">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <RegisterForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow: 'none'
    },
  }));

export default Auth
