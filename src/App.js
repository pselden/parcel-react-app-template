import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <h1 className={styles['App-title']}>Welcomes to React</h1>
        </header>
        <p className={styles['App-intro']}>
          <Button fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
