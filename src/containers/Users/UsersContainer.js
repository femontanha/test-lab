import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users';
import Users from '../../components/Users/Users';

const propTypes = {
  users: PropTypes.object.isRequired,
};

class UsersContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <Users users={ users } />
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
};

const mapDispatchToProps = {
  fetchUsers,
}

UsersContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
