import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default function RatingGroup(props) {
  const { handleClickOpen } = props;
  const classes = useStyles();
  return (
    <ButtonGroup className={classes.root} color="primary" fullWidth aria-label="outlined primary button group">
      {_.times(5, i => <Button onClick={handleClickOpen} key={i}>{ i + 1}</Button>)}
    </ButtonGroup>
  );
}

RatingGroup.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
};
