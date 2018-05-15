import React from 'react';
import styles from './App.css';
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import './globalStyles.css';

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Header />
      <OverviewCards />
    </div>
  </div>
);

export default App;
