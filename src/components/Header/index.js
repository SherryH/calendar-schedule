import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendar from '@fortawesome/fontawesome-free-regular/faCalendar';
import classNames from 'classnames';
// import moment from 'moment';
import dateFns from 'date-fns';
import HeaderDates from './HeaderDates';
import styles from './Header.css';

const Header = (props) => {
  const {
    selectedDayPeriod: { selectedDay, selectedPeriod }
  } = props;
  // const monthNum = moment(selectedDay).month();
  console.log('selectedPeriod', selectedPeriod);
  return (
    <header className={styles.wrapper}>
      <div className={styles.companyName}>Vensa</div>
      <div className={styles.datepickerRow}>
        {dateFns.format(new Date(selectedDay), 'MMMM')} <FontAwesomeIcon icon={faCalendar} />
      </div>
      <HeaderDates selectedDay={selectedDay} />
      <div className={styles.daySlotRow}>
        <div className={classNames(styles.daySlot, styles.slotSelected)}>Morning</div>
        <div className={styles.daySlot}>Afternoon</div>
        <div className={styles.daySlot}>Evening</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  selectedDayPeriod: PropTypes.shape({
    selectedDay: PropTypes.string,
    selectedPeriod: PropTypes.string
  }).isRequired
};

export default Header;
