import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '4em',
    height: '4em'
  }
};

const ClinicianAvatar = (props) => {
  const { classes } = props;
  return (
    <Avatar
      alt="Adelle Charles"
      classes={{ root: classes.root }}
      src="http://vensachallenge2018.azurewebsites.net/api/Picture/e538c28d-52df-0654-800f-6145909aca28"
    />
  );
};

ClinicianAvatar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  })
};

ClinicianAvatar.defaultProps = {
  classes: {
    root: {}
  }
};

export default withStyles(styles)(ClinicianAvatar);
