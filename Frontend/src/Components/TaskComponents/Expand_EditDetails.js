import React, { useEffect } from 'react';
import '../../SASS/_Tasks/_ExpandTask.scss';
import Moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Expand_EditDetails = ({ specificTask }) => {
    const classes = useStyles();

    return (
      <React.Fragment>
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {specificTask.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {specificTask.description}
              </Typography>
              <br />
              <small><span style={{fontWeight: 'bold'}}>Scheduled on: </span>{Moment(specificTask.schedule).format("DD-MMMM-YYYY")}</small>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default Expand_EditDetails