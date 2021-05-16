import React from "react";
import "../../SASS/Components/_Header/_Profile.scss";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';

const Profile = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={classes.root}>
          <div className="avatar_container" className={classes.root}>
            <MenuOutlinedIcon
              id="menu_burger"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
          </div>
          {open ? (
            <List className={classes.dropdown}>
              <ListItem alignItems="flex-start" className="list_item">
                {/* <AssignmentTurnedInOutlinedIcon className="listItem_icon" /> */}
                <Avatar
                  alt="Profile Pic"
                  src=""
                  id="avatar_icon"
                //   onClick={handleClick}
                  style={{ cursor: "pointer", marginRight: "0.5em" }}
                />
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        id="profile_text"
                      >
                        Profile Name
                      </Typography>
                      <small>Account Type</small>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <div style={{ padding: "0 0.8em" }}>
                <ListItem alignItems="flex-start" className="list_item">
                  <AssignmentTurnedInOutlinedIcon className="listItem_icon" />
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                          id="listItem_text"
                        >
                          Show finished tasks
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>

                <ListItem alignItems="flex-start" className="list_item">
                  <HourglassEmptyOutlinedIcon className="listItem_icon" />
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                          id="listItem_text"
                        >
                          Show overdue tasks
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>

                <Divider variant="inset" component="li" />

                <ListItem alignItems="flex-start" className="list_item">
                  <ExitToAppIcon className="listItem_icon" />
                  <ListItemText
                    id="listItem_text"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                          id="listItem_text"
                        >
                          Log out
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </div>
            </List>
          ) : null}
        </div>
      </ClickAwayListener>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    width: "15em",
    top: 30,
    right: 0,
    zIndex: 1,
    border: "1px solid",
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    borderRadius: '5px'
  },
  inline: {
    display: "flex",
    width: '100%'
  },
}));

export default Profile;
