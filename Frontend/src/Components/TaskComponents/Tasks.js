import React, { useState, useContext, useEffect } from "react";
import '../../SASS/_Tasks/_Tasks.scss';
import axios from 'axios';
import Moment from 'moment';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' 

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { FaTrashAlt, FaExpandAlt } from 'react-icons/fa';

const Tasks = () => {
  const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/task/')
            .then(res => {
                setTasks(res.data)

            })
            .catch(err => console.log("Error fetching data from DB.: ", err))
    }, [tasks]);

    const onDeleteConfirmation = ( id ) => {
        confirmAlert({
            title: 'Confirm to Delete Task',
            message: 'Are you sure to delete this task? ' ,
            buttons: [
                {
                    label: 'No',
                    onClick: () => "",
                    className: 'no_btn'
                  },
              {
                label: 'Yes',
                onClick: () => onDelete(id),
                className: 'yes_btn'
              },
              
            ]
          })
    }

    const onDelete = (id) => {
       axios.delete('http://localhost:5000/task/' + id)
        .then(res => alert("Task has been deleted.", res.data))
        .catch(err => console.log("Error deleting. " + err))

    }



  return (
    <React.Fragment>
        {tasks.map((task) => {
            
            return (
                
              <Card key={task._id} className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2" id="task_title">
                    {task.title}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {/* {task.schedule} */}

                    {Moment(task.schedule).format('DD-MMMM-YYYY')}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {task.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip
                    title="Expand Details"
                    placement="bottom"
                    aria-label="expand-details"
                  >
                    <IconButton
                      aria-label="expand-task"
                      className={classes.margin}
                    >
                      <FaExpandAlt fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip
                    title="Scrap this task"
                    placement="bottom"
                    aria-label="delete-details"
                    // onClick={(id) => onDelete(task._id)}
                    onClick={(id) => onDeleteConfirmation(task._id)}
                  >
                    <IconButton aria-label="delete" className={classes.margin}>
                      <FaTrashAlt fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            );
            
        })}
      
    </React.Fragment>
  );
};

const useStyles = makeStyles({
    root: {
        marginBottom: "1.1em"
    },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default Tasks;
