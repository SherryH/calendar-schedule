import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendar from '@fortawesome/fontawesome-free-regular/faCalendar';
import dateFns from 'date-fns';
import HeaderDates from './HeaderDates';
import HeaderPeriod from './HeaderPeriod';
import styles from './Header.css';

const Header = (props) => {
  const {
    selectedDayPeriod: { selectedDay, selectedPeriod }
  } = props;
  return (
    <header className={styles.wrapper}>
      <div className={styles.companyName}>Vensa</div>
      <div className={styles.datepickerRow}>
        {dateFns.format(new Date(selectedDay), 'MMMM')} <FontAwesomeIcon icon={faCalendar} />
      </div>
      <HeaderDates selectedDay={selectedDay} />
      <HeaderPeriod selectedPeriod={selectedPeriod} />
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
