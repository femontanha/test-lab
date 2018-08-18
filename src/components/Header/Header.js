import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Header = ({ title }) => {
  return (
    <header className={ styles.header }>
      <h1 className={ styles.title }>{ title }</h1>
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
