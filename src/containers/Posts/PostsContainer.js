import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import Posts from '../../components/Posts/Posts';

const propTypes = {
  posts: PropTypes.object.isRequired,
};

class PostsContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <Posts posts={ posts } />
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
};

const mapDispatchToProps = {
  fetchPosts,
}

PostsContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
