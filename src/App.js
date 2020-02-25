import React from 'react';
import './App.css';
import styles from './App.css';
import Display from './components/Logic';
import Logic from './components/Display';

function App () {
  return (
    <div className="App">
      <div className={styles.calculator}>
        <Display/>
        <Logic/>
      </div>

    </div>
  );
}

export default App;
