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
    slots,
    classes: { root, contentRoot, label }
  } = props;
  const availableSlots = Object.values(slots);
  if (availableSlots.length === 0) {
    return (
      <CardContent className={contentRoot}>
        <Chip label="No appointment available for this date" classes={{ root, label }} />
      </CardContent>
    );
  }
  return (
    <CardContent className={contentRoot}>{availableSlots.map(availableSlot => <Chip label={availableSlot} classes={{ root, label }} />)}</CardContent>
  );
};

ClinicianCardContent.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  }),
  slots: PropTypes.shape({})
};

ClinicianCardContent.defaultProps = {
  classes: { root: {} },
  slots: {}
};

export default withStyles(styles)(ClinicianCardContent);
