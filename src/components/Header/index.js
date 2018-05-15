import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendar from '@fortawesome/fontawesome-free-regular/faCalendar';
import classNames from 'classnames';
import styles from './Header.css';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.companyName}>Vensa</div>
    <div className={styles.datepickerRow}>
      AUGUST <FontAwesomeIcon icon={faCalendar} />
    </div>
    <div className={styles.dateDisplay}>
      <div className={styles.dateElement}>
        19 <div>Mon</div>
      </div>
      <div className={styles.dateElement}>
        20 <div>Tue</div>
      </div>
      <div className={classNames(styles.dateElement, styles.selected)}>
        21 <div>Wed</div>
      </div>
      <div className={styles.dateElement}>
        22 <div>Thu</div>
      </div>
      <div className={styles.dateElement}>
        23 <div>Fri</div>
      </div>
    </div>
    <div className={styles.daySlotRow}>
      <div className={classNames(styles.daySlot, styles.slotSelected)}>Morning</div>
      <div className={styles.daySlot}>Afternoon</div>
      <div className={styles.daySlot}>Evening</div>
    </div>
  </header>
);

export default Header;
