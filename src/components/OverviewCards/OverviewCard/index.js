import React from 'react';
import Card from '@material-ui/core/Card';
import ClinicianCardHeader from './ClinicianCardHeader';
import ClinicianCardContent from './ClinicianCardContent';

const OverviewCard = () => (
  <Card>
    <ClinicianCardHeader />
    <ClinicianCardContent />
  </Card>
);

export default OverviewCard;
