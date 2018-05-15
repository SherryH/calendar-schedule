import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '4em',
    height: '4em'
  }
};

const OverviewCards = (props) => {
  const { classes } = props;
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt="Adelle Charles"
            classes={{ root: classes.root }}
            src="http://vensachallenge2018.azurewebsites.net/api/Picture/e538c28d-52df-0654-800f-6145909aca28"
          />
        }
      />
    </Card>
  );
};

OverviewCards.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  })
};

OverviewCards.defaultProps = {
  classes: {
    root: {
      width: '4em',
      height: '5em'
    }
  }
};

export default withStyles(styles)(OverviewCards);
