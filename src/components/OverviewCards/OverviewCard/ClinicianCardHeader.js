import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import ClinicianAvatar from './ClinicianAvatar';

const styles = {
  root: {
    alignItems: 'normal'
  },
  title: {
    color: 'var(--primary)',
    fontSize: '1.1em'
  },
  subheader: {
    fontSize: '0.7em'
  }
};

const ClinicianCardHeader = (props) => {
  const {
    classes: { root, title, subheader }
  } = props;
  return <CardHeader classes={{ root, title, subheader }} avatar={<ClinicianAvatar />} title="Dr. John Smith" subheader="General Practitioner" />;
};

ClinicianCardHeader.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    subheader: PropTypes.string
  })
};

ClinicianCardHeader.defaultProps = {
  classes: {
    root: {},
    title: {},
    subheader: {}
  }
};

export default withStyles(styles)(ClinicianCardHeader);
