import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.companyName}>Vensa</div>
    <div className={styles.datepickerRow}>August</div>
  </div>
);

export default Header;
