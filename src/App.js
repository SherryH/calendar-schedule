import React from 'react';
import styles from './App.css';
import Header from './components/Header';

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Header />
    </div>
  </div>
);

export default App;
