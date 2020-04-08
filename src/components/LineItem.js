import React from 'react';
import {displayPrice} from '../helpers';

const LineItem = (props) => {
  const {item} = props
  return (
    <li>
      <img src={item.imgUrl} alt={item.title}/>
      <span>{item.title}</span>
      <span>{displayPrice(item.price)}</span>
    </li>
  )
}

export default LineItem;