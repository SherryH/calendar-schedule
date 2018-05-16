import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import ClinicianCardHeader from './ClinicianCardHeader';
import ClinicianCardContent from './ClinicianCardContent';

const OverviewCard = ({ provider }) => (
  <Card>
    <ClinicianCardHeader title={provider.Name} subheader={provider.Title} avatarUrl={provider.PictureURL} />
    <ClinicianCardContent slots={provider.AvailableSlots} />
  </Card>
);

OverviewCard.propTypes = {
  provider: PropTypes.shape({
    Id: PropTypes.string,
    Title: PropTypes.string,
    Name: PropTypes.string,
    AvailableSlots: PropTypes.shape({}),
    PictureURL: PropTypes.string
  }).isRequired
};

export default OverviewCard;
