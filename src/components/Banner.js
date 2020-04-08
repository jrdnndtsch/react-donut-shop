import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner = (props) => {
  const {title, subTitle} = props.banner;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  )
}

export default Banner;