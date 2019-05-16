import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css';

export default function Photo({ photo }) {
  return <img className={styles.Photo} src={photo}/>;
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};
