import React, { useState } from 'react';
import {
  Button, Fade,
} from '@material-ui/core';

import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import RatingCard from './RatingCard';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'absolute',
    bottom: 5,
    background: 'linear-gradient(45deg, #1a1819 30%, #FF8E53 90%)',
    borderRadius: 25,
    border: 10,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  icon: {
    border: 'linear-gradient(45deg, #1a1819 30%, #FF8E53 90%)',
    fill: '#d6b911',
    position: 'absolute',
    bottom: 5,
    fontSize: 50,
  },
  card: {
    position: 'absolute',
    bottom: 5,
  },
}));


export default function ButtonHover() {
  const classes = useStyles();
  const [isHovering, setIsHovering] = useState(false);
  const [rateCardOpen, setRateCardOpen] = React.useState(false);

  const handleClickOpen = () => {
    setRateCardOpen(true);
  };
  const handleRateCardClose = () => {
    setRateCardOpen(false);
  };

  const handleMouseHover = () => {
    setIsHovering(!isHovering);
  };


  return (
    <div className="row">
      {rateCardOpen
        ? <RatingCard open={rateCardOpen} onClose={handleRateCardClose} className={classes.card} />
        : (
          <div
            id="subDiv"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
          >
            { isHovering
              ? (
                <Fade in={isHovering}>
                  <Button
                    id="initButton"
                    className={classes.button}
                    onClick={handleClickOpen}
                  >
                    Help us Improve
                  </Button>
                </Fade>
              )
              : (
                <SentimentSatisfiedTwoToneIcon className={classes.icon} />
              ) }
          </div>
        ) }

    </div>
  );
}
