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
  const { classes, avatarUrl, title } = props;
  return <Avatar alt={title} classes={{ root: classes.root }} src={`http://vensachallenge2018.azurewebsites.net/${avatarUrl}`} />;
};

ClinicianAvatar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  }),
  avatarUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

ClinicianAvatar.defaultProps = {
  classes: {
    root: {}
  }
};

export default withStyles(styles)(ClinicianAvatar);
