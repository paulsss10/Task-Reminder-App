import React, { useContext } from 'react';
import Tasks from './Tasks';
import '../../SASS/_Tasks/_TasksContainer.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TaskForm } from '../../Components/Forms/Forms';
import {TaskContext} from '../../Contexts/TaskContext';

const TasksContainer = () => {
    const classes = useStyles();
    const [tasks, setTasks] = useContext(TaskContext);


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
              {tasks.map(task => (
                <Tasks title={task.title} description={task.description} key={task.id} />
              ))}
              
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