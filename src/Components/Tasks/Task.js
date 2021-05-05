import React from "react";
import "../../_Styles/_Tasks.css";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import { GiTie, GiRunningShoe } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io"

const Task = ({ tasks, onDelete, toggleImportant }) => {
  const classes = useStyles();

  return (
    <>
      {tasks.map((task) => (
        <ListItem alignItems="flex-start" id="item" key={task.id} onDoubleClick={()=>toggleImportant(task.id)} >
          <Grid container spacing={3} id="main_grid">
            <Grid item xs={8} style={{ display: "flex", flexDirection: "row" }}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  style={{
                    backgroundColor: "transparent",
                    border: task.reminder === true ? "3px solid #ebce2c" : "1px solid #bdbdbd",
                    width: "60px",
                    height: "60px",
                    marginRight: "15px",
                  }}
                >
                  {task.type === "work" ? (
                    <GiTie style={{ color: task.reminder === true ? "#ebce2c" : "#2ACF73" , fontSize: "35px" }} />
                  ) : task.type === "shopping" ? (
                    <MdLocalGroceryStore
                      style={{ color: task.reminder === true ? "#ebce2c" : "#2ACF73", fontSize: "35px" }}
                    />
                  ) : (
                    <GiRunningShoe
                      style={{ color: task.reminder === true ? "#ebce2c" : "#2ACF73", fontSize: "35px" }}
                    />
                  )}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                className="listItem_text"
                primary={task.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                      
                    >
                      {task.description}
                    </Typography>
                    <br /><br />
                    <small>{" on " + task.schedule}</small>
                  </React.Fragment>
                }
              />
            </Grid>

            <Grid item xs={4} id="action_grid">
              <div className="action_container">
                <Tooltip title="Mark as done" placement="right-start">
                  <div>
                    <IoMdDoneAll
                      className="markAsDone_btn"
                      onClick={() => alert(task.id)}
                      style={{ fontSize: "25px" }}
                    />
                  </div>
                </Tooltip>
                <Tooltip title="Mark as Important" placement="right-start">
                  <div>
                    <BsBell
                      className="setReminder_btn"
                      onClick={() => toggleImportant(task.id)}
                      style={{ color: task.reminder === true ? "#ebce2c" : "", fontSize: "25px" }}
                    />
                  </div>
                </Tooltip>

                <Tooltip title="Add" placement="right-start">
                  <div>
                    <RiDeleteBin5Line
                      className="delete_btn"  
                      onClick={() => onDelete(task.id)}
                      style={{ fontSize: "25px" }}
                    />
                  </div>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
}));

export default Task;
