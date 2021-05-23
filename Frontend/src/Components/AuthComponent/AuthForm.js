import React, { useState } from 'react';
import '../../SASS/Components/_AuthForm/_AuthForm.scss';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const RegisterForm = () => {
  const classes = useStyles();
  const [openToast, setOpenToast] = useState(false);
  const [severity, setSeverity] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  const handleClick = () => {
    setOpenToast(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Athlete"); // coming soon
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitNow = (e) => {
    e.preventDefault()
    const newUser = {
      name,
      username,
      password,
      usertype: userType
    }

    if (password !== confirmPassword) {
      alert("Password did not match")

      setPassword("");
      setConfirmPassword("")
    }
    // else

    axios.post('http://localhost:5000/auth/register', newUser)
    
      .then(res => setToastMsg("You are now registered."), setSeverity("success"),  setOpenToast(true))
      .catch(err => setSeverity("error"), setToastMsg("Error."), setOpenToast(true))

      setName("");
      setUsername("");
      // setUserType("");
      setPassword("");
      setConfirmPassword("");
  }

  return (
    <React.Fragment>
      <div className="authForm_container">
        <form
          id="auth_form"
          onSubmit={(e) => submitNow(e)}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name_txt"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="username_txt"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password_txt"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={confirmPassword !== password ? true : false}
          />

          <TextField
            id="confirmPassword_txt"
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPassword !== password ? true : false}
            helperText={
              confirmPassword !== password ? "Passwords did not match" : ""
            }
          />

          <Button
            className="submit_button"
            type="submit"
            onClick={(e) => submitNow(e)}
            variant="contained"
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Snackbar open={openToast} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {toastMsg}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
}));
