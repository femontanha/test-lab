import React, { PureComponent } from 'react';
import PostsContainer from '../../containers/Posts/PostsContainer';
import styles from './app.css';

class App extends PureComponent {
  render() {
    return (
      <div className={ styles.app }>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <PostsContainer />
      </div>
    );
  }
}

export default App;
