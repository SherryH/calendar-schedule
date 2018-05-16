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
    title: providerTitle,
    subheader: providerSubheader,
    avatarUrl,
    classes: { root, title, subheader }
  } = props;
  return (
    <CardHeader
      classes={{ root, title, subheader }}
      avatar={<ClinicianAvatar avatarUrl={avatarUrl} title={providerTitle} />}
      title={providerTitle}
      subheader={providerSubheader}
    />
  );
};

ClinicianCardHeader.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    subheader: PropTypes.string
  }),
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
};

ClinicianCardHeader.defaultProps = {
  classes: {
    root: {},
    title: {},
    subheader: {}
  }
};

export default withStyles(styles)(ClinicianCardHeader);
