import React, { useState } from 'react';
import '../../SASS/Components/_AuthForm/_AuthForm.scss';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export const RegisterForm = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Default"); // coming soon
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitNow = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Password did not match")

      setPassword("");
      setConfirmPassword("")
    }
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
            error={confirmPassword !== password ? true : false }
          />

          <TextField
            id="confirmPassword_txt"
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPassword !== password ? true : false}
            helperText={confirmPassword !== password ? "Passwords did not match" : ""}
          />

          <Button className="submit_button" type="submit" onClick={(e) => submitNow(e)} variant="contained">
            Sign Up
          </Button>
        </form>
      </div>
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
