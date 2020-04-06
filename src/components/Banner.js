import React from 'react';

const Banner = (props) => {
  const {title, subTitle} = props.banner;
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  )
}

export default Banner;