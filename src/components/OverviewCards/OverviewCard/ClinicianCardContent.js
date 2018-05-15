import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: '#979797',
    backgroundColor: '#F7F7F7',
    borderRadius: 5,
    width: '100%'
  },
  contentRoot: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 0
  }
};

const ClinicianCardContent = (props) => {
  const {
    classes: { root, contentRoot, label }
  } = props;
  return (
    <CardContent className={contentRoot}>
      <Chip label="No appointment available for this date" classes={{ root, label }} />
    </CardContent>
  );
};

ClinicianCardContent.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  })
};

ClinicianCardContent.defaultProps = {
  classes: { root: {} }
};

export default withStyles(styles)(ClinicianCardContent);
