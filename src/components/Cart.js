import React from 'react';
import LineItem from './LineItem';
import styles from '../styles/Cart.module.css'
import {displayPrice, secondThing} from '../helpers';

const Cart = (props) => {
  const {lineItems} = props;
  const cartTotal = (lineItems) => {
    return lineItems.reduce((acc, next) => acc += next.price, 0)
  }

  return lineItems.length ? (
    <div className={styles.cart}>
      <ul>
        {lineItems.map(item => (
          <LineItem item={item}/>
        ))}
      </ul>
      <span>Total: {displayPrice(cartTotal(lineItems))}</span>
    </div>
   
  ) : (
    <p className={styles.cart}>Your cart is empty</p>
  )
}

export default Cart;












