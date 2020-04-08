import React from 'react';

const Cart = (props) => {
  const {lineItems} = props;

  return lineItems.length ? (
    <div >There are Items!</div>
  ) : (
    <p>No Items in Your Cart</p>
  )
}

export default Cart;












