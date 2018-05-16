import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.css';

const HeaderPeriod = (props) => {
  const { selectedPeriod } = props;
  const dayPeriod = ['Morning', 'Afternoon', 'Evening'];

  return (
    <div className={styles.daySlotRow}>
      {dayPeriod.map(period => (
        <div className={classNames(styles.daySlot, { [styles.slotSelected]: period === selectedPeriod })} key={period}>
          {period}
        </div>
      ))}
    </div>
  );
};

HeaderPeriod.propTypes = {
  selectedPeriod: PropTypes.string.isRequired
};

export default HeaderPeriod;
