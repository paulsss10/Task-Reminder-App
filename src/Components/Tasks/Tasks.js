import '../../_Styles/_Tasks.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Task from './Task';
import Typography from '@material-ui/core/Typography';

const Tasks = ({ tasks, onDelete, toggleImportant }) => {
    const classes = useStyles();

    return (
      <div style={{width: '92%', margin: "15px auto"}}>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
          Your Tasks
          
        </Typography>

        <List id="listItem_container">
          <Task tasks={tasks} id="list_item" onDelete={onDelete} toggleImportant={toggleImportant} />
        </List>
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
    inline: {
      display: 'inline',
      fontFamily: 'Poppins',
      fontWeight: '600',
      fontSize: '20px',
      
    },
  }));


export default Tasks