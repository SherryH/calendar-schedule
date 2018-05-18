import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getSlotsByPeriod } from '../../actions';
import styles from './Header.css';

const HeaderPeriod = (props) => {
  const { selectedPeriod } = props;
  const dayPeriod = ['Morning', 'Afternoon', 'Evening'];

  const clickHandler = (period) => {
    props.getSlotsByPeriod(period);
  };

  const onKeyDownHandler = (event, period) => {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      this.clickHandler(period);
    }
  };

  return (
    <div className={styles.daySlotRow}>
      {dayPeriod.map(period => (
        <div
          role="tab"
          tabIndex={0}
          onKeyDown={e => onKeyDownHandler(e, period)}
          onClick={() => clickHandler(period)}
          className={classNames(styles.daySlot, { [styles.slotSelected]: period === selectedPeriod })}
          key={period}
        >
          {period}
        </div>
      ))}
    </div>
  );
};

HeaderPeriod.propTypes = {
  selectedPeriod: PropTypes.string.isRequired,
  getSlotsByPeriod: PropTypes.func.isRequired
};

export default connect(null, { getSlotsByPeriod })(HeaderPeriod);
