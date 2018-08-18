import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import PostsContainer from '../../containers/Posts/PostsContainer';
import UsersContainer from '../../containers/Users/UsersContainer';
import '../../global.css';

const App = () => (
  <Router>
    <Fragment>
      <Header title={ 'React Fake Posts' } />
      <Route exact path="/" component={ PostsContainer } />
      <Route path="/users" component={ UsersContainer } />
    </Fragment>
  </Router>
);

export default App;
