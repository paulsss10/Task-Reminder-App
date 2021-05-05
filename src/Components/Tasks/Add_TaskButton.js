import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const Add_TaskButton = ({ openOnClick }) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Tooltip title="Add New Task" placement="right">
          <Fab
            color="primary"
            aria-label="add"
            style={{
              backgroundColor: "#2ACF73",
              color: "#fafafa",
              justifyContent: "center",
            }}
            onClick={openOnClick}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // marginTop: '40px',
    zIndex: 999,

    position:'absolute', 
    right:'25px',
    bottom: '35px'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    textAlign: "center",
  },
}));

export default Add_TaskButton
