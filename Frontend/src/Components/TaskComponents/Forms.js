import React, { useState, useEffect, useContext } from 'react';
import '../../SASS/Components/_Forms/_Forms.scss';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const TaskForm = () => {
  const classes = useStyles();
  const nodeRef = React.useRef(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [schedule, setSchedule] = useState("");
    const [type, setType] = useState("");
    const [reminder, setReminder] = useState(false);

    const [selectValue, setSelectValue] = useState([
      {value: "work", label: "Work"},
      {value: "fitness", label: "Fitness"},
      {value: "education", label: "Education"},
      {value: "shopping", label: "Shopping"},
    ])

    const onSubmit = (e) => {
      e.preventDefault();

      const tasks = {
        title: title,
        description: description,
        schedule: schedule,
        type: type,
        reminder: reminder
      }

      if (title === "" || description === "") {
        alert("Please fill in all the fields.");
        return;
      } else {
        axios.post('http://localhost:5000/task/add', tasks)
          .then(res => console.log(res.data))
          .catch(err => console.log("Error adding task.: ", err))

        setTitle("");
        setDescription("");
        setSchedule("");
        setType("");
        setReminder(false);
      }
    };
    
    return (
      <React.Fragment>
        <form
          className="task_form"
          onSubmit={(e) => onSubmit(e)}
          noValidate
          autoComplete="off"
        >
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

          
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Task Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Age"
            >
              {selectValue.map((type) => {
                return <MenuItem value={type.value} key={type.value} ref={nodeRef}>{type.label}</MenuItem>;
              })}
            </Select>
          </FormControl>

          <TextField
            id="date"
            label="Schedule"
            variant="outlined"
            type="date"
            defaultValue={schedule}
            style={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setSchedule(e.target.value)}
          />

          <FormControlLabel
            // value="start"
            control={<Checkbox color="primary" />}
            checked={reminder}
            label="Set Reminder as Important"
            labelPlacement="end"
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />

          <Button
            onClick={(e) => onSubmit(e)}
            variant="contained"
            id="submit_btn"
          >
            SUBMIT
          </Button>
        </form>
      </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    formControl: {
      // margin: theme.spacing(3),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));