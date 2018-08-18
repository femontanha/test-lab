import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './users.css';

const propTypes = {
  users: PropTypes.object.isRequired,
};

class Users extends PureComponent {
  renderUsers() {
    const { users } = this.props;
    return Object.keys(users).map((item) => (
      <ul className={ styles.list } key={ users[item].id }>
        <li>{ users[item].username }</li>
        <li>{ users[item].name }</li>
        <li>{ users[item].email }</li>
        <li>{ users[item].phone }</li>
        <li>{ users[item].website }</li>
      </ul>
    ));
  }

  render() {
    return (
      <div className={ styles.users }>
        <Link className="app-button" to="/">View Posts</Link>
        { this.renderUsers() }
      </div>
    );
  }
}

Users.propTypes = propTypes;

export default Users;
