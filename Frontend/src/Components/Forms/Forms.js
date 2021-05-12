import React, { useState, useEffect, useContext } from 'react';
import {TaskContext} from '../../Contexts/TaskContext';
import '../../SASS/Components/_Forms/_Forms.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [schedule, setSchedule] = useState("");
    const [type, setType] = useState("");
    const [reminder, setReminder] = useState(false);

    const [tasks, setTasks] = useContext(TaskContext);

    const onSubmit = (e) => {
      e.preventDefault();

      if (title === "" || description === "") {
        alert("Please fill in all the fields.");
        return;
      } else {
        setTasks(prevTasks => [...prevTasks, {title, description}])

        setTitle("");
        setDescription("");
        setSchedule("");
        setType("");
        setReminder(false);
      }
    };
    
    return (
      <React.Fragment>
        <form className="task_form" onSubmit={(e) => onSubmit(e)} noValidate autoComplete="off">
          <TextField
            id="task_title"
            label="Task Name"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            id="task_description"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <FormControlLabel
            // value="start"
            control={<Checkbox color="primary" />}
            style={{  }}
            checked={reminder}
            label="Set Reminder as Important"
            labelPlacement="end"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />

          <Button onClick={(e) => onSubmit(e)} variant="contained" id="submit_btn">
            SUBMIT
          </Button>
        </form>
      </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
  }));


export const AuthForm = () => {
    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}