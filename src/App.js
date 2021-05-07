import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Tasks from './Components/Tasks/Tasks';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Add_TaskButton from './Components/Tasks/Add_TaskButton';
import Add_TaskModal from './Components/Tasks/Add_TaskModal';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EmptyTask_UI from './Components/Tasks/EmptyTask_UI';

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [tasks, setTasks] = useState([
    {
        id: "1",
        title: "Meeting with Mr. Stark",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        schedule: "Dec. 25, 2021",
        type: "work",
        reminder: "false",
      },
      {
        id: "2",
        title: "Go to gym",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        schedule: "May 25, 2021",
        type: "fitness",
        reminder: "false",
      },
      {
        id: "3",
        title: "Have your fridge filled.",
        description: "eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        schedule: "May 25, 2021",
        type: "shopping",
        reminder: "true",
      },
])

  // Add Action
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Action
  const deleteItem = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
  }

  // Mark as Important
  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
    console.log(id)
  }

  return (
    <div className="App">
      <Header />
      <Grid
        container
        spacing={3}
        style={{
          marginTop: "20px",
          marginLeft: "0",
          padding: "20px 10px",
          width: "100%",
        }}
      >
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onDelete={deleteItem} toggleImportant={toggleImportant} />
            ) : (
              <EmptyTask_UI />
            )}

            <Add_TaskButton openOnClick={handleOpen} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Add_TaskModal onAdd={addTask} />
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    position: 'relative',
    height: '75vh'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default App;
