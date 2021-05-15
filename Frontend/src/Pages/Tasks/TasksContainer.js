import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Tasks from '../../Components/TaskComponents/Tasks';
import { TaskForm } from '../../Components/TaskComponents/Forms';
import '../../SASS/_Tasks/_TasksContainer.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const TasksContainer = () => {
    const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/task/')
          .then(res => {
              setTasks(res.data)

          })
          .catch(err => console.log("Error fetching data from DB.: ", err))
  }, [tasks]);

    return (
      <React.Fragment>
        <Grid container spacing={3} id="task_mainGrid">
          <Grid item xs={12}  md={4} className="inner_grids" id="left_grid">
            <Paper className={classes.paper}>
                <h2>Add Your Tasks Here</h2>
              <TaskForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}className="inner_grids" id="right_grid">
            <Paper className={classes.paper}>
            <h2>Your Tasks</h2>
              <div id="task_wrapper">
                {tasks.length > 0 ? <Tasks /> : "NO TASK FOR NOW" }
                
              </div>
              
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
    padding: '1.5em 2.5em',

      color: theme.palette.text.secondary,
      boxShadow: 'none'
    },
  }));

export default TasksContainer