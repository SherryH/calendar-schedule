import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './App.css';
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import './common/globalStyles.css';

const App = (props) => {
  const { selectedDayPeriod, providerOverview } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header selectedDayPeriod={selectedDayPeriod} />
        <OverviewCards providerOverview={providerOverview} />
      </div>
    </div>
  );
};

App.propTypes = {
  selectedDayPeriod: PropTypes.shape({
    selectedDay: PropTypes.string,
    selectedPeriod: PropTypes.string
  }).isRequired,
  providerOverview: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.string,
    Title: PropTypes.string,
    Name: PropTypes.string,
    AvailableSlots: PropTypes.shape({}),
    PictureURL: PropTypes.string
  })).isRequired
};

const mapStateToProps = (state) => {
  const { selectedDayPeriod, providerOverview } = state;
  return {
    selectedDayPeriod,
    providerOverview
  };
};

export default connect(mapStateToProps)(App);
