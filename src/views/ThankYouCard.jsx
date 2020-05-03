import React from 'react';
import PropTypes from 'prop-types';
import { 
  makeStyles, Card, CardContent, Typography, ClickAwayListener, Grid 
} from '@material-ui/core';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
// eslint-disable-next-line import/no-cycle
import FeedbackForm from './FeedbackForm';

const useStyles = makeStyles({
  root: {
    width: '70%',
    // height: '20%',
    textAlign: 'center',
    position: 'absolute',
    bottom: 5,
    // padding: '5%',
  },
  icon: {
    verticalAlign: 'middle',
    fill: '#d6b911',
  },
});

export default function ThankYouCard(props) {
  const classes = useStyles();
  const {
    onClose, showIcon, content, subContent,
  } = props;
  const [formOpen, setFormOpen] = React.useState(false);
  const [hideCard, setHideCard] = React.useState(false);

  const handleClickOpen = () => {
    setFormOpen(showIcon);
    setHideCard(!showIcon);
  };

  return (
    // eslint-disable-next-line no-nested-ternary
    formOpen ? <FeedbackForm formOpen={formOpen} onClose={onClose} />
      : (hideCard ? ''
        : (
          <ClickAwayListener onClickAway={handleClickOpen}>
            <Grid container>
              <Grid item xs />
              <Grid item xs={8}>
                <Card
                  className={classes.root}
                  maxwidth="lg"
                >
                  <CardContent>
                    <Typography variant="h6" color="textSecondary" component="p">
                      {showIcon ? <SentimentSatisfiedTwoToneIcon className={classes.icon} /> : ''}
                      {' '}
                      { content }
                    </Typography>
                    {subContent
                      ? (
                        <Typography variant="body2" color="textSecondary" component="p">
                          {showIcon ? <SentimentSatisfiedTwoToneIcon className={classes.icon} /> : ''}
                          {' '}
                          { subContent }
                        </Typography>
                      )
                      : ''}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs />
            </Grid>

          </ClickAwayListener>
        )
      )
  );
}

ThankYouCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  showIcon: PropTypes.bool,
  content: PropTypes.string.isRequired,
  subContent: PropTypes.string,
};