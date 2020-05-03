import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// eslint-disable-next-line import/no-cycle
import ThankYouCard from './ThankYouCard';
import FormHook from '../logic/FormHook';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: 'black',
    color: 'white',
    textAlign: 'center',
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
    color: 'white',
  },
}));

const DialogTitle = ((props) => {
  const classes = useStyles();
  const {
    children, onClose, ...other
  } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function FeedbackForm(props) {
  const { formOpen, onClose } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleThankyouCardOpen = () => {
    setOpen(true);
  };

  const { inputs, handleInputChange, handleSubmit } = FormHook({ like: '', dislike: '', email: '' }, handleThankyouCardOpen);
  return (
    open ? <ThankYouCard onClose={onClose} content="Thank you!" subContent="Your feedback is valueable to us." />
      : (
        <Dialog
          classes={{ paper: classes.dialogPaper, container: classes.container }}
          onClose={onClose}
          aria-labelledby="customized-dialog-title"
          open={formOpen}
          fullWidth
        >
          <DialogTitle id="customized-dialog-title" onClose={onClose}>
            Tell us more
          </DialogTitle>
          <DialogContent dividers>
            <TextField
              autoFocus
              margin="dense"
              id="like"
              name="like"
              label="What did you like the most?"
              type="text"
              fullWidth
              multiline
              onChange={handleInputChange}
              value={inputs.like}
            />
            <TextField
              autoFocus
              margin="dense"
              id="dislike"
              name="dislike"
              label="What did you like least?"
              type="text"
              fullWidth
              multiline
              onChange={handleInputChange}
              value={inputs.dislike}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Your email"
              type="email"
              fullWidth
              onChange={handleInputChange}
              value={inputs.email}
            />
          </DialogContent>
          <DialogActions>
            <Button id="submit-button" autoFocus color="primary" onClick={handleSubmit}>
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>
      )
  );
}

FeedbackForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  formOpen: PropTypes.bool.isRequired,
};

DialogTitle.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string,
};
