import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Add_TaskForm from './Add_TaskForm';

const Add_TaskModal = ({ onAdd }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
      <div className={classes.paper} id="modal_paper">
        <h2 id="transition-modal-title" style={{borderBottom: '1px solid #bdbdbd', paddingBottom: '10px'}} >What to remind you next?</h2>
        <Add_TaskForm onAdd={onAdd} />
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
        width: "30%",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: "5px"
    },
  }));

export default Add_TaskModal
