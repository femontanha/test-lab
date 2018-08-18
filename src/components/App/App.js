import React, { Fragment } from 'react';
import Header from '../Header/Header';
import PostsContainer from '../../containers/Posts/PostsContainer';

const App = () => (
  <Fragment>
    <Header title={ 'React Fake Posts' } />
    <PostsContainer />
  </Fragment>
);

export default App;
