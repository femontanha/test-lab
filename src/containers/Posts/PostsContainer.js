import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';

class PostsContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('this.props', this.props.posts)
    return (
      <div>Teste</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
