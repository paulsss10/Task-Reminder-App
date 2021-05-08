import React, {useState, useEffect} from 'react';
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
import Typography from '@material-ui/core/Typography';
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
  
  


  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async()=> {
      const taskGikanServer = await fetchTasks()
      setTasks(taskGikanServer)

      console.log("Mga data gikan static server: ", taskGikanServer)
    }
    getTasks()
  }, []);

  // pagkuha sa tanan data from backend
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:3001/tasks')
    const data = await res.json()

    return data
  }

  // Add Action
  const addTask = async(task) => {
     // THIS IS TO ADD AN ITEM IF NAA NAY DB SERVER NA PWEDE TA MAKA ADD and Persist added data
    // const res = await fetch(`${process.env.REACT_APP_UR}/tasks`, {
    //   method: 'POST',
    //   header: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })

    // const data = await res.json()
    // setTasks([...tasks, data])


    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Action
  const deleteItem = async(id) => {

    // THIS IS TO DELETE AN ITEM IF NAA NAY DB SERVER NA PWEDE TA MAKADELETE and Persist Data mods.
    // await fetch(`${process.env.REACT_APP_UR}/tasks/${id}`, {
    //   method: "DELETE",
    // })

   setTasks(tasks.filter((task) => task.id !== id))

  
  }


  // get specific task for value update
  const fetchATask = async(id) => {
    const res = await fetch(`${process.env.REACT_APP_UR}/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Mark as Important
  const toggleImportant = async(id) => {
    // THIS IS TO UPDATE AN ITEM IF NAA NAY DB SERVER NA PWEDE TA UPDATE and Persist Data mods.
    // const taskToUpdate = await fetchATask(id)
    // const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder }

    // const res = await fetch(`${process.env.REACT_APP_UR}/tasks/${id}`, {
    //   method: 'UPDATE',
    //   header: {
    //         'Content-type': 'application/json'
    //       },
    //       body: JSON.stringify(updatedTask)
    // })

    // const data = await res.json()

    // setTasks(
    //   tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)
    // )

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
              <Tasks
                tasks={tasks}
                onDelete={deleteItem}
                toggleImportant={toggleImportant}
              />
            ) : (
              <EmptyTask_UI />
            )}

            <Add_TaskButton openOnClick={handleOpen} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography
              component="span"
              variant="body2"
              style={{
                display: "inline",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "18px",
                color: "grey",
              }}
              color="textPrimary"
            >
              Task Dashboard Coming Soon
            </Typography>
          </Paper>
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
