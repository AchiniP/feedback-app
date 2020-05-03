import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Grid, Dialog, DialogTitle as MuiDialogTitle, DialogContent as MuiDialogContent, Typography,
} from '@material-ui/core';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
import RatingGroup from './RatingGroup';
import ThankYouCard from './ThankYouCard';


const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  container: {
    background: 'lightBlue',
  },
  dialogPaper: {
    maxHeight: '80vh',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

const DialogTitle = ((props) => {
  const {
    children, onClose, ...other
  } = props;
  const classes = useStyles();
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    justifyContent: 'center',
  },
}))(MuiDialogContent);


export default function RatingCard(props) {
  const { onClose, open } = props;
  const [thankYouCardOpen, setThankYouCardOpen] = React.useState(false);
  const classes = useStyles();

  const handleButtonClick = () => {
    setThankYouCardOpen(true);
  };

  return (
    thankYouCardOpen ? (
      <ThankYouCard
        onClose={onClose}
        showIcon
        content="Thank you! Tell us more."
      />
    )
      : (
        <Dialog
          classes={{ paper: classes.dialogPaper, container: classes.container }}
          onClose={onClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          fullWidth
          maxWidth="lg"
        >
          <DialogTitle id="customized-dialog-title" onClose={onClose} align="center">
            Rate your Experience
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <RatingGroup handleClickOpen={handleButtonClick} />
              </Grid>
              <Grid item xs={3}>
                <Typography gutterBottom variant="body2">NOT SATISFILED</Typography>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={3} />
              <Grid item xs={3}>
                <Typography gutterBottom align="right" variant="body2">VERY SATISFILED</Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )
  );
}

RatingCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

DialogTitle.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string,
};
