import React from 'react';
import PropTypes from 'prop-types';
import OverviewCard from './OverviewCard';

const OverviewCards = props => <OverviewCard provider={props.providerOverview[0]} />;

OverviewCards.propTypes = {
  providerOverview: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.string,
    Title: PropTypes.string,
    Name: PropTypes.string,
    AvailableSlots: PropTypes.shape({}),
    PictureURL: PropTypes.string
  })).isRequired
};

export default OverviewCards;
