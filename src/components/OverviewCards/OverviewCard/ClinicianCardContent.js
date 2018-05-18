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
    flex: 1
  },
  contentRoot: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 0,
    flexWrap: 'wrap'
  }
};

const ClinicianCardContent = (props) => {
  const {
    slots,
    classes: { root, contentRoot, label }
  } = props;

  if (slots.length === 0) {
    return (
      <CardContent className={contentRoot}>
        <Chip label="No appointment available for this date" classes={{ root, label }} />
      </CardContent>
    );
  }
  return <CardContent className={contentRoot}>{slots.map(slot => <Chip key={slot} label={slot} classes={{ root, label }} />)}</CardContent>;
};

ClinicianCardContent.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  }),
  slots: PropTypes.arrayOf(PropTypes.string)
};

ClinicianCardContent.defaultProps = {
  classes: { root: {} },
  slots: {}
};

export default withStyles(styles)(ClinicianCardContent);
