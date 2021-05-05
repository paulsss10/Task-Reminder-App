import React, { useState } from 'react';
import '../../_Styles/_Tasks.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const Add_TaskForm = () => {
    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [important, setImportant] = useState(false);

    return (
      <form className={classes.root} id="form" noValidate autoComplete="off">
        <TextField
          id="txt_task_title"
          label="Task Title"
          variant="outlined"
          required={true}
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <TextField
          id="txt_task_desc"
          label="Description"
          variant="outlined"
          value={desc}
          onChange={(e)=>setDesc(e.target.value)}
        />

        <TextField
          id="datetime_task"
          variant="outlined"
          label="Schedule this Task"
          type="datetime-local"
          // defaultValue="2017-05-24T10:30"
          required
          InputLabelProps={{
            shrink: true,
          }}

          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Age"
            required
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="work">Work</MenuItem>
            <MenuItem value="fitness">Fitness</MenuItem>
            <MenuItem value="shopping">Shopping</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          // value="start"
          control={<Checkbox color="primary" />}
          style={{ marginLeft: "5px", width: "250px" }}
          label="Set Reminder as Important"
          labelPlacement="end"
          value={important}
          onChange={(e)=>setImportant(e.currentTarget.checked)}
        />

        <Button tuype="submit" variant="contained" id="btn_add">
          Add Reminder
        </Button>
      </form>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '15px',
      },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

export default Add_TaskForm
