import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dateFns from 'date-fns';
import styles from './Header.css';

const HeaderDates = (props) => {
  const { selectedDay } = props;
  const startingDay = dateFns.subDays(new Date(selectedDay), 2);
  const dayArray = new Array(5).fill().map((day, index) => {
    const currentDay = dateFns.addDays(startingDay, index);
    return {
      date: dateFns.format(currentDay, 'DD'),
      weekdate: dateFns.format(currentDay, 'ddd'),
      currentDay: dateFns.format(currentDay, 'YYYY-MM-DD')
    };
  });

  return (
    <div className={styles.dateDisplay}>
      {dayArray.map(({ date, weekdate, currentDay }) => (
        <div className={classNames(styles.dateElement, { [styles.selected]: selectedDay === currentDay })} key={date}>
          {date} <div>{weekdate}</div>
        </div>
        ))}
    </div>
  );
};

HeaderDates.propTypes = {
  selectedDay: PropTypes.string.isRequired
};

export default HeaderDates;
