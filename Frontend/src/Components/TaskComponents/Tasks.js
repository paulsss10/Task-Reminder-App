import React, { useState, useContext, useEffect } from "react";
import '../../SASS/_Tasks/_Tasks.scss';
import axios from 'axios';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Tasks = () => {
  const classes = useStyles();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/task/')
            .then(res => {
                setTasks(res.data)

            })
            .catch(err => console.log("Error fetching data from DB.: ", err))
    }, [])

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
                    on Schedule
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description of the the task is placed here
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Expand Details</Button>
                </CardActions>
              </Card>
            );
            
        })}
      
    </React.Fragment>
  );
};

const useStyles = makeStyles({
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
