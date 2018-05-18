import React from 'react';
import PropTypes from 'prop-types';
import OverviewCard from './OverviewCard';

const OverviewCards = (props) => {
  const { providerOverview: providers } = props;
  console.log('providers', providers);
  return providers.map(provider => <OverviewCard provider={provider} key={provider.Id} />);
};

OverviewCards.propTypes = {
  providerOverview: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.string,
    Title: PropTypes.string,
    Name: PropTypes.string,
    AvailableSlots: PropTypes.arrayOf(PropTypes.string),
    PictureURL: PropTypes.string
  })).isRequired
};

export default OverviewCards;
