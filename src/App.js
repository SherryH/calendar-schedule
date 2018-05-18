import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dateFns from 'date-fns';
import styles from './App.css';
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import { loadProvidersAsync } from './actions';
import { getProviders } from './reducers';
import './common/globalStyles.css';

class App extends React.Component {
  componentDidMount() {
    this.props.loadProvidersAsync(dateFns.format(new Date(), 'YYYY-MM-DD'));
  }
  render() {
    const { selectedDayPeriod, providerOverview } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header selectedDayPeriod={selectedDayPeriod} />
          <OverviewCards providerOverview={providerOverview} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  selectedDayPeriod: PropTypes.shape({
    selectedDay: PropTypes.string,
    selectedPeriod: PropTypes.string
  }).isRequired,
  providerOverview: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.string,
    Title: PropTypes.string,
    Name: PropTypes.string,
    AvailableSlots: PropTypes.arrayOf(PropTypes.string),
    PictureURL: PropTypes.string
  })).isRequired,
  loadProvidersAsync: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { selectedDayPeriod } = state;
  const providerOverview = getProviders(state);
  return {
    selectedDayPeriod,
    providerOverview
  };
};

// getProviders(state);
// const { selectedDayPeriod, providerOverview } = state;
// return {
//   selectedDayPeriod,
//   providerOverview
// };

export default connect(mapStateToProps, { loadProvidersAsync })(App);
