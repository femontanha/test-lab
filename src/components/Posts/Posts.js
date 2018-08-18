import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './posts.css';

const propTypes = {
  posts: PropTypes.object.isRequired,
};

class Posts extends PureComponent {
  renderPosts() {
    const { posts } = this.props;

    return Object.keys(posts).map((item) => (
      <article className={ styles.article } key={ posts[item].id }>
        <h1 className={ styles.title }>{ posts[item].title }</h1>
        <p className={ styles.text }>{ posts[item].body }</p>
      </article>
    ));
  }

  render() {
    return (
      <div className={ styles.posts }>
        <Link className="app-button" to="users">View Users</Link>
        { this.renderPosts() }
      </div>
    );
  }
}

Posts.propTypes = propTypes;

export default Posts;
